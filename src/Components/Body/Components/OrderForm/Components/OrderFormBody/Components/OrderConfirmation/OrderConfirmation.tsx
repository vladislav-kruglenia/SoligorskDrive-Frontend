import React, {FC} from "react";
import style from "./OrderConfirmation.module.scss"
import {Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {restartOrderForm} from "../../../../../../../../Redux/OrderForm/OrderForm.reducer";
import {LinkButton} from "../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {useOrderFormLinks} from "../../../../OrderForm.hooks";
import {OrderConfirmationProps} from "./OrderConfirmation.types";

export const OrderConfirmation:FC<OrderConfirmationProps> = (props) => {
    const {FillingOrderDataLink} = useOrderFormLinks(props.typeComponent);

    const dispatch = useDispatch();
    const restartOrderFormAction = () => {
        dispatch(restartOrderForm())
    };

    return <div className={style.OrderConfirmation}>
        <Typography variant={"h2"} className={style.text}>Ваш заказ успешно оформлен!</Typography>
        <LinkButton
            size={"large"}
            disabled={false}
            link={FillingOrderDataLink}
            buttonText={'Оформить новый заказ'}
            onClickFunc={()=> restartOrderFormAction()}
        />
    </div>
};
