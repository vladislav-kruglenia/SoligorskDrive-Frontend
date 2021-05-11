import {gql} from "@apollo/client/core";

export const UpdateUserData = gql`
    mutation UpdateUserData($newUserPersonalData: UpdateUserPersonalDataArgs!){
        updateUserPersonalData(newUserPersonalData: $newUserPersonalData){
            userLogin,  userName, userNumberPhone
        }
    }
`;