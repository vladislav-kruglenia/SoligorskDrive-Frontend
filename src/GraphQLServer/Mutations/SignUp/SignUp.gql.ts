import {gql} from "@apollo/client/core";

export const SignUp = gql`
    mutation SignUp($createUserAccountData: CreateUserAccountArgs!){
        createUserAccount(createUserAccountData: $createUserAccountData){
            message
        }
    }
`;