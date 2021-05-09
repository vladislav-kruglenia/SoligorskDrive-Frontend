import {MainUserProfileData} from "../../UserProfileData.types";

export type UserProfileDataFormProps = {
    userData: MainUserProfileData,
    // editUserData: (values: MainUserProfileData) => void,
    exitEditMode: () => void,
}