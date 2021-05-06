import {gql} from "@apollo/client/core";

export const LogIn = gql`
    mutation LogIn($loginData: LoginArgs!){
        login(loginData: $loginData){
            isAuth
        }
    }
`;