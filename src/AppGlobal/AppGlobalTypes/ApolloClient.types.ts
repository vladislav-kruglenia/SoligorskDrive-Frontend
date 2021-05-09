import {ApolloError} from "@apollo/client";

export type MutationTypes<TData> = {
    data: TData | null | undefined,
    loading: boolean,
    error: ApolloError | undefined,
}