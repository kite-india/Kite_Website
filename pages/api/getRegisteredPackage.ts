import { CognitoJwtVerifier } from "aws-jwt-verify";
import { NextApiRequest, NextApiResponse } from "next";
import AWS from 'aws-sdk'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const accessToken = req.cookies['CognitoIdentityServiceProvider.17ovl7a0e00fsg578kopumaho2.fced523e-6617-4654-bdc9-c6ecff8fe656.accessToken']
  //  const idToken = req.cookies['CognitoIdentityServiceProvider.17ovl7a0e00fsg578kopumaho2.fced523e-6617-4654-bdc9-c6ecff8fe656.idToken']

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

        const param = {

            FilterExpression: "userinfoID = :userInfoId",

            ExpressionAttributeValues: {
                ":userInfoId": { S: userId }
            },
            ProjectionExpression: "id,userinfoID,total_cost,mainPassenger,extraPassenger,packageName,bookingStatus",
            TableName: "Registration-ay6dl23zrjernjnqmaepjjtnfy-staging",
        };

        const userRegisteredPackages = await ddb.scan(param).promise()

        console.log(userRegisteredPackages.Items)

        res.status(200).json({ status: true, message: userRegisteredPackages.Items });
    }
    catch (e) {
        console.log(e)
        res.status(403).json({ status: false, message: "Invalid Access" });
        return;
    }




}