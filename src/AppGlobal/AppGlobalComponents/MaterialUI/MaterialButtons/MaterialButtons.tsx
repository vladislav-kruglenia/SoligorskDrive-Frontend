import React, {FC} from "react";
import {Badge, Button, Typography} from "@material-ui/core";
import {OrderButtonPropsType} from "./MaterialButtons.types";

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
                {/*<OrderButtonText/>*/}
            </Button>
        </Badge>
    </>
};

export const OrderButtonText = () => {
    return <Badge color="secondary" badgeContent={0}>
        <Typography>Текст</Typography>
    </Badge>
};

