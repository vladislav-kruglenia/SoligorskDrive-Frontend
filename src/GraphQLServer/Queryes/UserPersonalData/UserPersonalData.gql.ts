import {gql} from "@apollo/client/core";

export const UserPersonalData = gql`
    query UserPersonalData{
        UserPersonalData{
            userLogin, userName, userNumberPhone 
        }
    }
`;
