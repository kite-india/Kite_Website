import { CognitoJwtVerifier } from "aws-jwt-verify";
import { NextApiRequest, NextApiResponse } from "next";
import AWS from 'aws-sdk'
import { z } from "zod";
import { v4 as uuidv4 } from 'uuid';

AWS.config.update({
    region: "ap-south-1"
})

const mainPassengerSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    birthdate: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    starts: z.string(),
    ends: z.string()
});


const extraPassengerSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    birthdate: z.string(),
});

const extraPassengerArrayScehma = z.array(extraPassengerSchema);

type MainPassenger = z.infer<typeof mainPassengerSchema>

type ExtraPassengersType = z.infer<typeof extraPassengerSchema>



interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        packageId: string, //mandatory
        activities: string[], //Not mandatory
        mainPassenger: MainPassenger, //mandatory
        extraPassengers: ExtraPassengersType[] //not mandatory
    };
}


export default async function handler(req: ExtendedNextApiRequest, res: NextApiResponse) {

    const accessToken = req.cookies['CognitoIdentityServiceProvider.17ovl7a0e00fsg578kopumaho2.fced523e-6617-4654-bdc9-c6ecff8fe656.accessToken']
    // const idToken = req.cookies['CognitoIdentityServiceProvider.17ovl7a0e00fsg578kopumaho2.fced523e-6617-4654-bdc9-c6ecff8fe656.idToken']

    const verifier = CognitoJwtVerifier.create({
        userPoolId: "ap-south-1_GnEmuWInD",
        tokenUse: "access",
        clientId: "17ovl7a0e00fsg578kopumaho2"
    });


    try {
        const payload = await verifier.verify(
            accessToken
        );

        const ddb = new AWS.DynamoDB();

        ///UserId
        const userId = payload.sub

        ///PackageId - Mandatory
        const packageId = req.body.packageId;

        if (!packageId) {
            res.status(200).json({ status: false, message: "Enter package Id" });
            return;
        }

        ///Check if the user already registered the package
        const param = {

            FilterExpression: "registrationPackageId = :topic AND userinfoID = :userInfoId",

            ExpressionAttributeValues: {
                ":topic": { S: packageId },
                ":userInfoId": { S: userId }
            },
            ProjectionExpression: "id,userinfoID,bookingStatus",
            TableName: "Registration-ay6dl23zrjernjnqmaepjjtnfy-staging",
        };

        const checkPackageIsAlreadyReg = await ddb.scan(param).promise()

        if (checkPackageIsAlreadyReg.Items.length > 0 && checkPackageIsAlreadyReg.Items[0].bookingStatus.S === "Booked") {
            res.status(200).json({ status: false, message: "Your already registered this package" });
            return;
        }
        ///Activities - Not Mandatory   
        const activities = req.body.activities;

        ///Main Passengers
        const mainPassenger = req.body.mainPassenger

        const isValid = mainPassengerSchema.safeParse(mainPassenger);

        if (!isValid.success) {
            res.status(200).json({ status: false, message: "Enter All field" });
            return;
        }

        const filteredMainPassenger = {}
        for (const key of Object.keys(mainPassenger)) {

            if (typeof mainPassenger[key] === "string") {
                filteredMainPassenger[key] = { "S": mainPassenger[key] }
            }
            else if (typeof mainPassenger[key] === "number") {
                filteredMainPassenger[key] = { "N": mainPassenger[key] }
            }
        }


        //Extra Passengers - Not mandatory

        const extraPassenger = req.body.extraPassengers;
        let filteredExtraPassenger = []
        if (extraPassenger) {
            const isExtraPassengerValid = extraPassengerArrayScehma.safeParse(extraPassenger);

            if (!isExtraPassengerValid.success) {

                res.status(200).json({ status: false, message: "Please fill all required fields" });
                return;
            }

            filteredExtraPassenger = extraPassenger.map(pass => {

                const temp = {}
                for (const key of Object.keys(pass)) {

                    if (typeof pass[key] === "string") {
                        temp[key] = { "S": pass[key] }
                    }
                    else if (typeof pass[key] === "number") {
                        temp[key] = { "N": pass[key] }
                    }
                }

                return { "M": temp };

            })

        }



        let total_cost = 0;

        ///Check if it is a valid package
        const paramForPackage = {
            TableName: 'Package-ay6dl23zrjernjnqmaepjjtnfy-staging',
            Key: {
                'id': { S: packageId }
            },
            AttributesToGet: ["id", "name", "cost"]
        };


        const getPackage = await ddb.getItem(paramForPackage).promise()



        if (!getPackage.Item) {

            res.status(403).json({ status: false, message: "Package Not found" });
            return;
        }

        const packageName = getPackage.Item.name.S

        total_cost = total_cost + Number(getPackage.Item.cost.N);

        ///Activities

        let filteredActivities = []

        if (activities || activities?.length > 0) {

            //Get all Activities of a this package and check if the activity id is valid

            const paramForActivity = {

                FilterExpression: "packageID = :topic",

                ExpressionAttributeValues: {
                    ":topic": { S: packageId },

                },

                ProjectionExpression: "cost,id ",
                TableName: "Activity-ay6dl23zrjernjnqmaepjjtnfy-staging",
            };

            const { Items } = await ddb.scan(paramForActivity).promise()


            if (Items.length > 0) {
                //means there are activities for this packages
                ///So verify whether the user selected activities are valid
                const tempAct = Items.filter((items) => {

                    return activities.includes(items.id.S)
                })

                filteredActivities = tempAct.map(act => {
                    //Add the cost of all activities to total cost
                    total_cost = total_cost + Number(act.cost.N)
                    return act.id
                })

            }


        }


        const actualCost = String(total_cost)
        //INSERT INTO DYNAMODB
        const uuid = uuidv4()
        const registrationParams = {
            TableName: 'Registration-ay6dl23zrjernjnqmaepjjtnfy-staging',
            Item: {
                'id': { S: uuid },
                'total_cost': { N: actualCost },
                'userinfoID': { S: userId },
                'registrationPackageId': { S: packageId },
                'activitiesId': { L: filteredActivities },
                'mainPassenger': { M: filteredMainPassenger },
                'extraPassenger': { L: filteredExtraPassenger },
                'packageName': { S: packageName },
                'bookingStatus': { S: "Booked" }
            }

        };

        // Call DynamoDB to add the item to the table
        try {
            await ddb.putItem(registrationParams).promise()

            res.status(200).json({ status: true, message: "Registered" });
            return;
        }
        catch (e) {
            console.log(e)
            res.status(200).json({ status: false, message: "Failed to Register. Please contact us" });
            return
        }



    } catch (e) {
        console.log(e)
        res.status(403).json({ status: false, message: "Invalid Access" });
        return;
    }


}


