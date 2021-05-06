import React, {FC} from "react";
import style from "./OrdersTableTitles.module.scss"
import {Paper, Typography} from "@material-ui/core";
import {OrdersTableTitlesProps} from "./OrdersTableTitles.types";

export const OrdersTableTitles:FC<OrdersTableTitlesProps> = (props) => {
    const {date, time} = props;

    return <Paper variant={"outlined"} className={style.OrdersTableTitles}>
        <Typography className={style.title}>Дата: {date}</Typography>
        <Typography className={style.title}>Время отправления: {time}:00</Typography>
    </Paper>
};