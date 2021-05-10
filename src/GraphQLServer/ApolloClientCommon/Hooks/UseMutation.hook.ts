import {DocumentNode} from "graphql";
import {UseMutationHookReturn} from "../Types/Types";
import {useMutation} from "@apollo/client";
import {RemoveOrder} from "../../Mutations/RemoveOrder/RemoveOrder.gql";

export function useMutationCommonHook<Res, Args>(GqlDocument: DocumentNode): UseMutationHookReturn<Res, Args> {
    const [removeOrderMutation, {data, loading, error}] = useMutation<Res, Args>(GqlDocument);

    return {
        mutationCallback: removeOrderMutation,
        mutationData: {data, loading, error}
    }
}