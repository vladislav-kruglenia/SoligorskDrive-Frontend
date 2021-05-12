import {MainUserProfileData} from "../../UserProfileData.types";

export interface DisplayUserProfileDataProps{
    userData: MainUserProfileData,
}

export type UserValueProps = {
    labelText: string,
    dataValue: string,
}

export interface UserProfileData extends MainUserProfileData {
    userPassword: string,
}