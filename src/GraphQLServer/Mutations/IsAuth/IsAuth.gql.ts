import {gql} from "@apollo/client/core";

export const IsAuth = gql`
    query IsAuth{
        IsAuth{
            isAuth, userId, userRole, userName
        }
    }
`;