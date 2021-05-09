import {gql} from "@apollo/client/core";

export const DispatcherOrdersInfo = gql`
    query DispatcherOrdersInfo($dispatcherOrdersInfoData: DispatcherOrdersInfoArgs!){
        DispatcherOrdersInfo(dispatcherOrdersInfoData: $dispatcherOrdersInfoData){
            date, time,
            orders{
                idOrder,
                clientName,
                clientPhone,
                direction,
            }
        }
    }
`;