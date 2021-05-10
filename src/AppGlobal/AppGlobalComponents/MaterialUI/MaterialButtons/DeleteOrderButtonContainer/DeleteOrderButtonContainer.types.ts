import {MainOrderData, MutationFunc, MutationTypes} from "../../../../../GraphQLServer/ApolloClientCommon/Types/Types";
import {RemoveOrderRes} from "../../../../../GraphQLServer/Mutations/RemoveOrder/Types/RemoveOrder.res.types";
import {RemoveOrderVar} from "../../../../../GraphQLServer/Mutations/RemoveOrder/Types/RemoveOrder.var.types";

export type DeleteOrderButtonContainerProps = {
    orderId: string,
    mainOrderData: MainOrderData,
    removeOrderMutation: MutationFunc<RemoveOrderRes, RemoveOrderVar>,
    mutationData: MutationTypes<RemoveOrderRes>,
}