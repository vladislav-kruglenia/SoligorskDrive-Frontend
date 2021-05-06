import {useMutation} from "@apollo/client";
import {CreateOrderMutation} from "../../../../../../../GraphQLServer/Mutations/CreateOrder/CreateOrder.gql";
import {CreateOrderResType} from "../../../../../../../GraphQLServer/Mutations/CreateOrder/Types/CreateOrderRes.types";
import {CreateOrderVarType} from "../../../../../../../GraphQLServer/Mutations/CreateOrder/Types/CreateOrderVar.types";

export const useMutationCreateOrder = () => {
    const [createOrder, {data, loading, error}] = useMutation<CreateOrderResType, CreateOrderVarType>(CreateOrderMutation);
    return {createOrder, mutationData: {data, loading, error}}
};