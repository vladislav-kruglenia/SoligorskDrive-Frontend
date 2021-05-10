import {MainOrderData} from "../../../ApolloClientCommon/Types/Types";

export type RemoveOrderVar = {
    removeOrderData: RemoveOrderArgs,
}

export type RemoveOrderArgs = {
    mainOrderData: MainOrderData,
    orderId: string,
    userId?: string
}