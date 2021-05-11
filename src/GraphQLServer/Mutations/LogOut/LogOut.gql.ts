import {gql} from "@apollo/client/core";

export const LogOut = gql`
    mutation LogOut{
        logout{
            isAuth, userRole
        }
    }
`;