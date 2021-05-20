import React, {FC} from "react";
import style from "../../OrderConfirmation.module.scss"
import {OrderConfirmationWrapperProps} from "../../OrderConfirmation.types";
import {Paper} from "@material-ui/core";

export const OrderConfirmationWrapper: FC<OrderConfirmationWrapperProps> = (props) => {
    const {StatusComponent, LinkButton, isLinkButton} = props;
    const LinkButtonRender = isLinkButton && LinkButton;

    return <Paper className={style.OrderConfirmation}>
        {StatusComponent}
        {LinkButtonRender}
    </Paper>
};