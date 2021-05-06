export interface DisplayUserProfileDataProps{
    userData: MainUserProfileData,
}

export type UserValueProps = {
    labelText: string,
    dataValue: string,
}

export type MainUserProfileData = {
    userName: string,
    userLogin: string,
    userPhone: string,

}

export interface UserProfileData extends MainUserProfileData {
    userPassword: string,
}