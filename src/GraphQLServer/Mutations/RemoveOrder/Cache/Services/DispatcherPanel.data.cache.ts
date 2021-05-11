import produce, {Draft} from "immer";
import {ApolloCache} from "@apollo/client";
import {RemoveOrderRes} from "../../Types/RemoveOrder.res.types";
import {
    DispatcherOrder,
    DispatcherOrdersInfoRes,
    DispatcherOrdersModel
} from "../../../../Queryes/DispatcherOrdersInfo/Types/DispatcherOrdersInfo.res.types";
import {DispatcherOrdersInfo} from "../../../../Queryes/DispatcherOrdersInfo/DispatcherOrdersInfo.gql";
import {
    DispatcherOrdersInfoArgs,
    DispatcherOrdersInfoVar
} from "../../../../Queryes/DispatcherOrdersInfo/Types/DispatcherOrdersInfo.var.types";

export class DispatcherPanelDataCache {
    private readonly cache: ApolloCache<RemoveOrderRes>;
    private readonly args: DispatcherOrdersInfoArgs;

    constructor(cache: ApolloCache<RemoveOrderRes>, args: DispatcherOrdersInfoArgs) {
        this.cache = cache;
        this.args = args;
    }

    getNewDataCache(orderId: string): DispatcherOrdersInfoRes | null {
        const ordersData = this._getOrderData();
        if (!ordersData) return null;

        const ordersIdIndex = this._getIndexDispatcherOrders(ordersData.DispatcherOrdersInfo, orderId);
        const dispatcherOrders = ordersData.DispatcherOrdersInfo[ordersIdIndex].orders;
        const orderIdIndex = this._getIndexDispatcherOrder(dispatcherOrders, orderId);

        const newDispatcherOrdersArr = this._getDispatcherOrdersArr(orderIdIndex, dispatcherOrders);

        return this._getNewData(ordersData, newDispatcherOrdersArr, ordersIdIndex);

    }

    private _getOrderData() {
        return this.cache.readQuery<DispatcherOrdersInfoRes, DispatcherOrdersInfoVar>({
            query: DispatcherOrdersInfo,
            variables:{dispatcherOrdersInfoData: this.args}
        });
    }

    private _getIndexDispatcherOrders(arr: DispatcherOrdersModel[], orderId: string): number {
        return arr.findIndex(orders => this._getIndexDispatcherOrder(orders.orders, orderId) > -1);
    }

    private _getIndexDispatcherOrder(arr: DispatcherOrder[], orderId: string): number {
        return arr.findIndex(order => order.idOrder === orderId);
    }

    private _getDispatcherOrdersArr(orderIdIndex: number, ordersData: DispatcherOrder[]): DispatcherOrder[] {
        let ordersArr = [...ordersData];

        if (orderIdIndex > -1) {
            ordersArr.splice(orderIdIndex, 1)
        }
        return ordersArr
    }

    private _getNewData(ordersData: DispatcherOrdersInfoRes, dispatcherOrdersArr: DispatcherOrder[], ordersIdIndex: number) {
        return produce(ordersData, (draft: Draft<DispatcherOrdersInfoRes>) => {
            draft.DispatcherOrdersInfo[ordersIdIndex].orders = dispatcherOrdersArr
        });
    }

}