import {ApolloCache} from "@apollo/client";
import {RemoveOrderRes} from "../Types/RemoveOrder.res.types";
import {OrdersHistoryDataCache} from "./Services/OrdersHistory.data.cache";
import {ClientCurrentAndArchiveOrdersRes} from "../../../Queryes/ClientCurrentOrders/Types/ClientCurrentOrdersRes.types";
import {ClientCurrentAndArchiveOrdersGQL} from "../../../Queryes/ClientCurrentOrders/ClientCurrentOrders.gql";

export class RemoveOrderCache {

    updateCache(cache: ApolloCache<RemoveOrderRes>, orderId: string){
        const newData = new OrdersHistoryDataCache(cache).getNewDataCache(orderId);
        if(!newData) return;

        cache.writeQuery<ClientCurrentAndArchiveOrdersRes>({
            query: ClientCurrentAndArchiveOrdersGQL,
            data: newData
        });
    }
}