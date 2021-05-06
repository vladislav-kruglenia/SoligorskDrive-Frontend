import {OrderFormType} from "../../../../OrderForm.types";
import {CreateOrderResType} from "../../../../../../../../../GraphQLServer/Mutations/CreateOrder/Types/CreateOrderRes.types";
import {ApolloError} from "@apollo/client";
import {ReactNode} from "react";

export type OrderConfirmationProps = {
    typeComponent: OrderFormType,
    createOrderMutationData: {
        data: CreateOrderResType | null | undefined,
        loading: boolean,
        error: ApolloError | undefined
    }
}

export type OrderConfirmationWrapperProps = {
    StatusComponent: ReactNode,
    LinkButton: ReactNode,
    isLinkButton?: boolean,
}