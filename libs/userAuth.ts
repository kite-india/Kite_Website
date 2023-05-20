import { Auth } from 'aws-amplify'

export async function ionViewCanEnter() {
    try {
        await Auth.currentAuthenticatedUser();
        return true;
    } catch {
        return false;
    }
}

export async function getAuthUserName() {


    const user = await Auth.currentUserInfo();

    if (user == null) {

        throw new Error("unauthenticated");
    }

    return user;

}





