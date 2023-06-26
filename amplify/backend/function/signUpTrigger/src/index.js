


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();


exports.handler = async (event, context) => {

    let date = new Date();
    console.log(event)
    if (event.request?.userAttributes.sub) {

        let params;

        if (event.request.userAttributes['cognito:user_status'] == "EXTERNAL_PROVIDER") {
            params = {
                Item: {
                    'id': { S: "sub" },
                    '__typename': { S: 'User' },
                    'name': { S: "sub" },
                    'email': { S: "Sub"},
                    'createdAt': { S: date.toISOString() },
                    'updatedAt': { S: date.toISOString() },
                    'dob': { S: "bday"},
                    'phone_number': { S: "fgh" },
                    '_version': { S: '1' },
                    '_lastChangedAt': { S: "345" }
                },
                TableName: process.env.UserInfoTable
            };

        }
        else {

            params = {
                Item: {
                    'id': { S: event.request.userAttributes.sub },
                    '__typename': { S: 'User' },
                    'name': { S: event.request.userAttributes.name },
                    'email': { S: event.request.userAttributes.email },
                    'createdAt': { S: date.toISOString() },
                    'updatedAt': { S: date.toISOString() },
                    'dob': { S: event.request.userAttributes.birthdate},
                    'phone_number': { S: event.request.userAttributes.phone_number },
                    '_version': { S: '1' },
                    '_lastChangedAt': { S: "345" }
                },
                TableName: process.env.UserInfoTable
            };
        }




        console.log(params)
        // Call DynamoDB
        try {
            await ddb.putItem(params).promise()
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
            consooe.log(err.__type)
        }

        console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DynamoDB");
        context.done(null, event);
    }
};