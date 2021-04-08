import {MainUserProfileData} from "../UserProfileDataDisplay/UserProfileDataDisplay.types";

export type UserProfileDataFormProps = {
    userData: MainUserProfileData,
    editUserData: (values: MainUserProfileData) => void,
    exitEditMode: () => void,
}