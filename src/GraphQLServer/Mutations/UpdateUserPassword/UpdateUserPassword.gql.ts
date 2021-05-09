import {gql} from "@apollo/client/core";

export const UpdateUserPassword = gql`
    mutation UpdateUserPassword($updateUserPasswordData: UpdateUserPasswordArgs!){
        updateUserPassword(updateUserPasswordData: $updateUserPasswordData){
            isPasswordSaved
        }
    }
`;