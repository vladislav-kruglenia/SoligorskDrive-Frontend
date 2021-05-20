import {useOrderFormLinks} from "../../../../../../OrderForm.hooks";
import {useDispatch} from "react-redux";
import {restartOrderForm} from "../../../../../../../../../../../../Redux/OrderForm/OrderForm.reducer";
import {LinkButton} from "../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import React, {FC} from "react";
import {FormNewOrderButtonProps} from "./FormNewOrderButton.types";

export const FormNewOrderButton:FC<FormNewOrderButtonProps> = (props) => {
    const {FillingOrderDataLink} = useOrderFormLinks(props.typeComponent);

    const dispatch = useDispatch();
    const restartOrderFormAction = () => {
        dispatch(restartOrderForm())
    };

    return <LinkButton
        size={"large"}
        disabled={false}
        link={FillingOrderDataLink}
        buttonText={'Оформить новый заказ'}
        onClickFunc={() => restartOrderFormAction()}
    />;
};