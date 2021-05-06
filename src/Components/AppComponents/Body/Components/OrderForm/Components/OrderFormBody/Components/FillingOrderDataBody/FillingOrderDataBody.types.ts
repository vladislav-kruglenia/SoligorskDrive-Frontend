import {OrderFormType} from "../../../../OrderForm.types";
import {CreateOrderResType} from "../../../../../../../../../GraphQLServer/Mutations/CreateOrder/Types/CreateOrderRes.types";
import {FetchResult, MutationFunctionOptions} from "@apollo/client";
import {CreateOrderVarType} from "../../../../../../../../../GraphQLServer/Mutations/CreateOrder/Types/CreateOrderVar.types";

export type FillingOrderDataBodyProps = {
    typeComponent: OrderFormType,
    createOrderMutation: (options?: MutationFunctionOptions<CreateOrderResType, CreateOrderVarType>) => Promise<FetchResult<CreateOrderResType>>
}