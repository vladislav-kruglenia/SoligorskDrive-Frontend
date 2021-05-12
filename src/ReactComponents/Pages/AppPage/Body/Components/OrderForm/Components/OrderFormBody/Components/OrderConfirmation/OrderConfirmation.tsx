import React, {FC} from "react";
import style from "./OrderConfirmation.module.scss"
import {Paper, Typography} from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';
import {useDispatch} from "react-redux";
import {restartOrderForm} from "../../../../../../../../../../Redux/OrderForm/OrderForm.reducer";
import {LinkButton} from "../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {useOrderFormLinks} from "../../../../OrderForm.hooks";
import {OrderConfirmationProps, OrderConfirmationWrapperProps} from "./OrderConfirmation.types";

export const OrderConfirmation: FC<OrderConfirmationProps> = (props) => {
    const {FillingOrderDataLink} = useOrderFormLinks(props.typeComponent);
    const {data, loading, error} = props.createOrderMutationData;

    const dispatch = useDispatch();
    const restartOrderFormAction = () => {
        dispatch(restartOrderForm())
    };

    const LinkButtonComponent = <LinkButton
        size={"large"}
        disabled={false}
        link={FillingOrderDataLink}
        buttonText={'Оформить новый заказ'}
        onClickFunc={() => restartOrderFormAction()}
    />;


    if(loading) return <OrderConfirmationWrapper StatusComponent={<LoadingResponse/>} LinkButton={LinkButtonComponent}/>;
    if(data) return  <OrderConfirmationWrapper
        StatusComponent={<AccessStatus/>}
        LinkButton={LinkButtonComponent}
        isLinkButton={true}
    />;

    if(error) return <OrderConfirmationWrapper
        StatusComponent={<ErrorStatus/>}
        LinkButton={LinkButtonComponent}
        isLinkButton={true}
    />;

    return <OrderConfirmationWrapper StatusComponent={<LoadingResponse/>} LinkButton={LinkButtonComponent}/>;


};

export const OrderConfirmationWrapper: FC<OrderConfirmationWrapperProps> = (props) => {
    const {StatusComponent, LinkButton, isLinkButton} = props;
    const LinkButtonRender = isLinkButton && LinkButton;

    return <Paper className={style.OrderConfirmation}>
        {StatusComponent}
        {LinkButtonRender}
    </Paper>
};


export const LoadingResponse = () => {
    return <div className={style.LoadingResponse}>
        <Skeleton variant={"text"}/>
    </div>
};

export const ErrorStatus = () => {
    return <Typography variant={"h2"} className={`${style.text} ${style.error}`}>Ошибка заполнения данных</Typography>
};

export const AccessStatus = () => {
    return <Typography variant={"h2"} className={`${style.text} ${style.access}`}>Ваш заказ успешно
        оформлен!</Typography>
};





