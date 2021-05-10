import {ApolloError, FetchResult, MutationFunctionOptions} from "@apollo/client";
import {DirectionsEnum} from "../../../AppGlobal/AppGlobalTypes/Enums";

export interface MainOrderData {
    direction: DirectionsEnum;
    date: string;
    startHour: number;
}

export type MutationTypes<TData> = {
    data: TData | null | undefined,
    loading: boolean,
    error: ApolloError | undefined,
}

export type MutationFunc<R, A> = (options?: MutationFunctionOptions<R, A>) => Promise<FetchResult<R>>

export type UseMutationHookReturn<R, A> = {
    mutationCallback: MutationFunc<R, A>,
    mutationData: MutationTypes<R>
}