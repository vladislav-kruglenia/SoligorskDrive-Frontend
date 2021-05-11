import {ApolloCache} from "@apollo/client";
import {RemoveOrderRes} from "../Types/RemoveOrder.res.types";
import {OrdersHistoryDataCache} from "./Services/OrdersHistory.data.cache";
import {ClientCurrentAndArchiveOrdersRes} from "../../../Queryes/ClientCurrentOrders/Types/ClientCurrentOrdersRes.types";
import {ClientCurrentAndArchiveOrdersGQL} from "../../../Queryes/ClientCurrentOrders/ClientCurrentOrders.gql";
import {DispatcherPanelDataCache} from "./Services/DispatcherPanel.data.cache";
import {DispatcherOrdersInfoRes} from "../../../Queryes/DispatcherOrdersInfo/Types/DispatcherOrdersInfo.res.types";
import {RemoveOrderCacheType} from "./RemoveOrder.cache.types";
import {
    DispatcherOrdersInfoArgs,
    DispatcherOrdersInfoVar
} from "../../../Queryes/DispatcherOrdersInfo/Types/DispatcherOrdersInfo.var.types";
import {DispatcherOrdersInfo} from "../../../Queryes/DispatcherOrdersInfo/DispatcherOrdersInfo.gql";

export class RemoveOrderCache {
    private readonly removeOrderCacheType: RemoveOrderCacheType;
    private readonly args: DispatcherOrdersInfoArgs;

    constructor(removeOrderCacheType: RemoveOrderCacheType, args: DispatcherOrdersInfoArgs = {}) {
        this.removeOrderCacheType = removeOrderCacheType;
        this.args = args
    }

    updateCache(cache: ApolloCache<RemoveOrderRes>, orderId: string) {
        switch (this.removeOrderCacheType) {
            case RemoveOrderCacheType.Dispatcher:
                this._updateCacheDispatcherOrders(cache, orderId);
                break;
            case RemoveOrderCacheType.Client:
                this._updateCacheOrdersHistory(cache, orderId);
                break;
        }
    }

    private _updateCacheOrdersHistory(cache: ApolloCache<RemoveOrderRes>, orderId: string) {
        const newData = new OrdersHistoryDataCache(cache).getNewDataCache(orderId);
        if (!newData) return;

        cache.writeQuery<ClientCurrentAndArchiveOrdersRes>({
            query: ClientCurrentAndArchiveOrdersGQL,
            data: newData
        });
    }

    private _updateCacheDispatcherOrders(cache: ApolloCache<RemoveOrderRes>, orderId: string) {
        const newData = new DispatcherPanelDataCache(cache, this.args).getNewDataCache(orderId);
        if (!newData) return;

        cache.writeQuery<DispatcherOrdersInfoRes, DispatcherOrdersInfoVar>({
            query: DispatcherOrdersInfo,
            data: newData,
            variables: {dispatcherOrdersInfoData: this.args}
        });
        //Todo: убрать запросы write и read query в отдельные классы
    }

}

/*private _dispatcherOrdersWriteQuery(cache: ApolloCache<RemoveOrderRes>, newData: DispatcherOrdersInfoRes){
        this._writeQuery<RemoveOrderRes, DispatcherOrdersInfoRes, DispatcherOrdersInfoArgs>(cache, newData, this.args)
    }

    private _ordersHistoryWriteQuery(cache: ApolloCache<RemoveOrderRes>, newData: ClientCurrentAndArchiveOrdersRes){
        cache.writeQuery<ClientCurrentAndArchiveOrdersRes>({
            query: ClientCurrentAndArchiveOrdersGQL,
            data: newData,
        });
    }

    private _writeQuery<C, Res, Var = {}>(cache: ApolloCache<C>, newData: Res, vars?: Var){
        cache.writeQuery<Res, Var>({
            query: DispatcherOrdersInfo,
            data: newData,
            variables: vars
        });
    }*/
