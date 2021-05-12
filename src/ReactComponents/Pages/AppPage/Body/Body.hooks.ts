import {RemoveOrder} from "../../../../GraphQLServer/Mutations/RemoveOrder/RemoveOrder.gql";
import {RemoveOrderRes} from "../../../../GraphQLServer/Mutations/RemoveOrder/Types/RemoveOrder.res.types";
import {RemoveOrderVar} from "../../../../GraphQLServer/Mutations/RemoveOrder/Types/RemoveOrder.var.types";
import {useMutationCommonHook} from "../../../../GraphQLServer/ApolloClientCommon/Hooks/UseMutation.hook";
import {UseMutationHookReturn} from "../../../../GraphQLServer/ApolloClientCommon/Types/Types";

export const useMutationRemoveOrder = (): UseMutationHookReturn<RemoveOrderRes, RemoveOrderVar> => {
    return useMutationCommonHook<RemoveOrderRes, RemoveOrderVar>(RemoveOrder);
};

