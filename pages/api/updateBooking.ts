import { CognitoJwtVerifier } from "aws-jwt-verify";
import { NextApiRequest, NextApiResponse } from "next";
import AWS from 'aws-sdk'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const accessToken = req.cookies['CognitoIdentityServiceProvider.17ovl7a0e00fsg578kopumaho2.fced523e-6617-4654-bdc9-c6ecff8fe656.accessToken']
    //const idToken = req.cookies['CognitoIdentityServiceProvider.17ovl7a0e00fsg578kopumaho2.fced523e-6617-4654-bdc9-c6ecff8fe656.idToken']

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

        ///Booking Id
        const bookingId = req.body.bookingId


        const paramForScan = {

            FilterExpression: "id = :topic AND userinfoID = :userId",

            ExpressionAttributeValues: {
                ":topic": { S: bookingId },
                ":userId": { S: userId }

            },

            ProjectionExpression: "total_cost,id",
            TableName: "Registration-ay6dl23zrjernjnqmaepjjtnfy-staging",
        };

        const { Items } = await ddb.scan(paramForScan).promise()

        if (!Items || Items.length === 0) {

            res.status(200).json({ status: false, message: "Registration ID invalid" });
            return;
        }


        const paramForUpadation = {

            Key: {
                id: { S: bookingId }
            }
            ,
            UpdateExpression: "set bookingStatus = :bookingStatus",
            ExpressionAttributeValues: {
                ":bookingStatus": { S: "canceled" }
            },
            TableName: "Registration-ay6dl23zrjernjnqmaepjjtnfy-staging",
        };


        await ddb.updateItem(paramForUpadation).promise()

        res.status(200).json({ status: true, message: "Booking Has been canceled" });
    }
    catch (e) {
        console.log(e)
        res.status(403).json({ status: false, message: "Invalid Access" });
        return;
    }




}