/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()

exports.handler = async (event, context) => {
  let date = new Date()
  console.log(event)
  if (event.request?.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: 'User' },
        name: { S: event.request.userAttributes.name },
        email: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
        dob: { S: event.request.userAttributes.birthdate },
        phone_number: { S: event.request.userAttributes.phone_number },
        _version: { S: '1' },
        _lastChangedAt: { S: '345' }
      },
      TableName: process.env.UserInfoTable
    }

    // Call DynamoDB
    try {
      await ddb.putItem(params).promise()
      console.log('Success')
    } catch (err) {
      console.log('Error', err)
    }

    console.log('Success: Everything executed correctly')
    context.done(null, event)
  } else {
    // Nothing to do, the user's email ID is unknown
    console.log('Error: Nothing was written to DynamoDB')
    context.done(null, event)
  }
}
