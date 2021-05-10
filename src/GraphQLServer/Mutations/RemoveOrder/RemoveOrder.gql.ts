import {gql} from "@apollo/client/core";

export const RemoveOrder = gql`
    mutation RemoveOrder($removeOrderData: RemoveOrderArgs!){
        removeOrder(removeOrderData: $removeOrderData){
            orderId, userId
        }
    }
`;