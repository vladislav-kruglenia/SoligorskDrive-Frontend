import {gql} from "@apollo/client";

export const CreateOrderMutation = gql`
    mutation CreateOrderMutation($createOrderData: Order!) {
        createOrder(createOrderData: $createOrderData){
            orderId, userId
        }
    }
`;