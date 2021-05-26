import React, {FC} from "react";
import style from "./MaterialButtons.module.scss"
import {Badge, Button, Typography} from "@material-ui/core";
import {
    LinkButtonPropsType,
    NavBarButtonPropsType,
    OrderButtonPropsType,
    OutlinedButtonPropsType,
    SendOrderButtonPropsType,
    TextOrOutlinedButtonPropsType
} from "./MaterialButtons.types";
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
                   to={props.link}
                   color={props.color || "primary"}
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
                   color={props.color || "primary"}
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

export const OutlinedButton: FC<OutlinedButtonPropsType> = (props) => {
    return <Button variant={"outlined"}
                   color={props.color || "primary"}
                   size={props.size}
                   disabled={props.disabled}
                   onClick={() => {
                       props.onClickFunc()
                   }}>
        {props.buttonText}
    </Button>
};

export const TextOrOutlinedButton: FC<TextOrOutlinedButtonPropsType> = (props) => {
    return <Button variant={props.variant}
                   color={"primary"}
                   size={props.size}
                   disabled={props.disabled}
                   onClick={() => {
                       props.onClickFunc()
                   }}>
        {props.buttonText}
    </Button>
};



export const NavBarButton: FC<NavBarButtonPropsType> = (props) => {
    return <Button variant={"text"}
                   className={style.NavBarButton}
                   color={props.color}
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

