/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "ap-south-1",
    "aws_appsync_graphqlEndpoint": "https://6s373m5fprdhxmvdhxw6hy2dru.appsync-api.ap-south-1.amazonaws.com/graphql",
    "aws_appsync_region": "ap-south-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-v3fdb7b5f5hclnqzec3bwdsvru",
    "aws_cloud_logic_custom": [
        {
            "name": "kiterestapi",
            "endpoint": "https://27298ckf55.execute-api.ap-south-1.amazonaws.com/staging",
            "region": "ap-south-1"
        }
    ],
    "aws_cognito_identity_pool_id": "ap-south-1:ea0b2a54-3ea7-4618-855c-643da6534664",
    "aws_cognito_region": "ap-south-1",
    "aws_user_pools_id": "ap-south-1_GnEmuWInD",
    "aws_user_pools_web_client_id": "17ovl7a0e00fsg578kopumaho2",
    "oauth": {
        "domain": "fx4iju9c5gwz-staging.auth.ap-south-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:3000/,http://localhost:3000/",
        "redirectSignOut": "http://localhost:3000/,http://localhost:3000/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "NAME",
        "BIRTHDATE",
        "EMAIL",
        "PHONE_NUMBER",
        "PICTURE"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_user_files_s3_bucket": "kite-frontend-storage-79e65883162600-staging",
    "aws_user_files_s3_bucket_region": "ap-south-1"
};


export default awsmobile;
