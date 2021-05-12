import {MainOrderData, MutationFunc, MutationTypes} from "../../../../../GraphQLServer/ApolloClientCommon/Types/Types";
import {RemoveOrderRes} from "../../../../../GraphQLServer/Mutations/RemoveOrder/Types/RemoveOrder.res.types";
import {RemoveOrderVar} from "../../../../../GraphQLServer/Mutations/RemoveOrder/Types/RemoveOrder.var.types";
import {RemoveOrderCacheType} from "../../../../../GraphQLServer/Mutations/RemoveOrder/Cache/RemoveOrder.cache.types";
import {DispatcherOrdersInfoArgs} from "../../../../../GraphQLServer/Queryes/DispatcherOrdersInfo/Types/DispatcherOrdersInfo.var.types";

export type DeleteOrderButtonContainerProps = {
    orderId: string,
    userId?: string,
    dispatcherOrdersArgs?: DispatcherOrdersInfoArgs,
    mainOrderData: MainOrderData,
    mutationType: RemoveOrderCacheType,
    removeOrderMutation: MutationFunc<RemoveOrderRes, RemoveOrderVar>,
    mutationData: MutationTypes<RemoveOrderRes>,
}