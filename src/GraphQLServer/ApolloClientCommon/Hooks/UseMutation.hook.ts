import {useMutation} from "@apollo/client";
import {DocumentNode} from "graphql";
import {UseMutationHookReturn} from "../Types/Types";

export function useMutationCommonHook<Res, Var = {}>(GqlDocument: DocumentNode): UseMutationHookReturn<Res, Var> {
    const [removeOrderMutation, {data, loading, error}] = useMutation<Res, Var>(GqlDocument);

    return {
        mutationCallback: removeOrderMutation,
        mutationData: {data, loading, error}
    }
}