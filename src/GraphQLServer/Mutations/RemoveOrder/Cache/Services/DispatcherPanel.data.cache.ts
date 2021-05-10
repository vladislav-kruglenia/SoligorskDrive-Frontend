import {
    ClientCurrentAndArchiveOrdersRes,
    ClientCurrentOrdersResModel
} from "../../../../Queryes/ClientCurrentOrders/Types/ClientCurrentOrdersRes.types";
import {ClientCurrentAndArchiveOrdersGQL} from "../../../../Queryes/ClientCurrentOrders/ClientCurrentOrders.gql";
import produce, {Draft} from "immer";
import {ApolloCache} from "@apollo/client";
import {RemoveOrderRes} from "../../Types/RemoveOrder.res.types";

export class OrdersHistoryDataCache {
    cache: ApolloCache<RemoveOrderRes>;

    constructor(cache: ApolloCache<RemoveOrderRes>) {
        this.cache = cache;
    }

    getNewDataCache(orderId: string): ClientCurrentAndArchiveOrdersRes | null {
        const ordersData = this._getOrderData();
        if (!ordersData) return null;

        const orderIdIndex = this._getIndexClientsCurrentOrders(ordersData.ClientCurrentOrders, orderId);
        const clientCurrentOrdersArr = this._getClientOrdersArr(orderIdIndex, ordersData);

        return this._getNewData(ordersData, clientCurrentOrdersArr);

    }

    private _getOrderData() {
        return this.cache.readQuery<ClientCurrentAndArchiveOrdersRes>({
            query: ClientCurrentAndArchiveOrdersGQL,
        });
    }

    private _getIndexClientsCurrentOrders(arr: ClientCurrentOrdersResModel[], orderId: string): number {
        return arr.findIndex(order => order.orderId === orderId);
    }

    private _getClientOrdersArr(orderIdIndex: number, ordersData: ClientCurrentAndArchiveOrdersRes): ClientCurrentOrdersResModel[] {
        let clientCurrentOrdersArr = [...ordersData.ClientCurrentOrders];

        if (orderIdIndex > -1) {
            clientCurrentOrdersArr.splice(orderIdIndex, 1)
        }
        return clientCurrentOrdersArr
    }

    private _getNewData(ordersData: ClientCurrentAndArchiveOrdersRes, clientCurrentOrdersArr: ClientCurrentOrdersResModel[]) {
        return produce(ordersData, (draft: Draft<ClientCurrentAndArchiveOrdersRes>) => {
            draft.ClientCurrentOrders = clientCurrentOrdersArr
        });
    }

}