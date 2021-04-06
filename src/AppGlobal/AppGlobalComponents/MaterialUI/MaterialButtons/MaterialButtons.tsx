import React, {FC} from "react";
import {Badge, Button, Typography} from "@material-ui/core";
import {LinkButtonPropsType, OrderButtonPropsType, SendOrderButtonPropsType} from "./MaterialButtons.types";
import {OrderFormLinks} from "../../../AppGlobalTypes/Links";
import {Link} from "react-router-dom";

export const OrderButton: FC<OrderButtonPropsType> = (props) => {
    return <>
        <Badge color="secondary" badgeContent={0}>
            <Button variant={"outlined"}
                    color={"primary"}
                    size={props.size}
                    disabled={props.disabled}
                    onClick={() => {
                        props.onClickFunc()
                    }}>
                {props.buttonText}
            </Button>
        </Badge>
    </>
};

export const SendOrderButton: FC<SendOrderButtonPropsType> = (props) => {
    return <Button variant={"contained"}
                   component={Link}
                   to={OrderFormLinks.OrderConfirmation}
                   color={"primary"}
                   size={props.size}
                   disabled={props.disabled}
                   onClick={() => {
                       props.onClickFunc()
                   }}>
        {props.buttonText}
    </Button>
};

export const LinkButton: FC<LinkButtonPropsType> = (props) => {
    return <Button variant={"outlined"}
                   color={"primary"}
                   component={Link}
                   to={props.link}
                   size={props.size}
                   disabled={props.disabled}
                   onClick={() => {
                       props.onClickFunc()
                   }}>
        {props.buttonText}
    </Button>
};


export const OrderButtonText = () => {
    return <Badge color="secondary" badgeContent={0}>
        <Typography>Текст</Typography>
    </Badge>
};

