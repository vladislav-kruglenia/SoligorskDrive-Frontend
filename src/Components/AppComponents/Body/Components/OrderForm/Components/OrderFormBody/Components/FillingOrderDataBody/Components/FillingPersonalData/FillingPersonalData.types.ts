import {OrderFormType} from "../../../../../../OrderForm.types";
import {FetchResult, MutationFunctionOptions} from "@apollo/client";
import {CreateOrderResType} from "../../../../../../../../../../../GraphQLServer/Mutations/CreateOrder/Types/CreateOrderRes.types";
import {CreateOrderVarType} from "../../../../../../../../../../../GraphQLServer/Mutations/CreateOrder/Types/CreateOrderVar.types";

export type FillingPersonalDataProps = {
    typeComponent: OrderFormType,
    createOrderMutation: (options?: MutationFunctionOptions<CreateOrderResType, CreateOrderVarType>) => Promise<FetchResult<CreateOrderResType>>

}