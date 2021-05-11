import {ApolloError, FetchResult, MutationFunctionOptions} from "@apollo/client";
import {DirectionsEnum} from "../../../AppGlobal/AppGlobalTypes/Enums";

export interface MainOrderData {
    direction: DirectionsEnum;
    date: string;
    startHour: number;
}

export type MutationTypes<Res> = {
    data: Res | null | undefined,
    loading: boolean,
    error: ApolloError | undefined,
}

export type MutationFunc<Res, Var> = (options?: MutationFunctionOptions<Res, Var>) => Promise<FetchResult<Res>>

export type UseMutationHookReturn<R, A> = {
    mutationCallback: MutationFunc<R, A>,
    mutationData: MutationTypes<R>
}