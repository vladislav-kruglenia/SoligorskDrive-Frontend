import {gql} from "@apollo/client/core";

export const ClientCurrentAndArchiveOrdersGQL = gql`
    query ClientCurrentAndArchiveOrders{
        ClientCurrentOrders{
            ...OrdersData 
        }
        ClientArchiveOrders{
            ...OrdersData
        }
    }
    
    fragment OrdersData on ClientCurrentOrdersModel{
        date, direction, haltName, haltTime,
        numberSeats, orderPrice, startHour, orderId   
    }
`;