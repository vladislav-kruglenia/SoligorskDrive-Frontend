import React, {FC} from "react";
import {OrderConfirmationProps} from "./OrderConfirmation.types";
import {FormNewOrderButton} from "./Components/FormNewOrderButton/FormNewOrderButton";
import {OrderConfirmationWrapper} from "./Components/OrderConfirmationWrapper/OrderConfirmationWrapper";
import {ErrorStatus, LoadingResponse} from "./Components/ConfirmationStatuses/ConfirmationStatuses";
import {SuccessfulStatus} from "./Components/ConfirmationStatuses/Components/AccessStatus/SuccessfulStatus";

export const OrderConfirmation: FC<OrderConfirmationProps> = (props) => {
    const LinkButtonComponent = <FormNewOrderButton typeComponent={props.typeComponent}/>;
    const {data, loading, error} = props.createOrderMutationData;

    if (loading) return <OrderConfirmationWrapper
        StatusComponent={<LoadingResponse/>}
        LinkButton={LinkButtonComponent}
    />;

    if (error) return <OrderConfirmationWrapper
        StatusComponent={<ErrorStatus/>}
        LinkButton={LinkButtonComponent}
        isLinkButton={true}
    />;

    if (data) return <OrderConfirmationWrapper
        StatusComponent={<SuccessfulStatus/>}
        LinkButton={LinkButtonComponent}
        isLinkButton={true}
    />;

    return <OrderConfirmationWrapper StatusComponent={<LoadingResponse/>} LinkButton={LinkButtonComponent}/>;
};





