import React, {FC} from "react";
import style from "./OrdersArchive.module.scss"
import OrdersHistoryStyle from "../../OrdersHistory.module.scss";
import {Paper, Typography} from "@material-ui/core";
import {OrdersArchiveProps} from "./OrdersArchive.types";

export const OrdersArchive:FC<OrdersArchiveProps> = (props) => {
    return <Paper className={style.OrdersArchive}>
        <Typography variant={'h4'} className={OrdersHistoryStyle.tableTitle}>
            Архив заказанных рейсов
        </Typography>
        {props.RenderDataComponent}
    </Paper>
};

/*
const orders: OrderTableType[] = [
    {
        orderId: '342342342342342342342',
        direction: DirectionsEnum.toMinsk,
        date: '2021-04-06',
        haltName: "Остановка 1",
        haltTime: '45',
        startHour: 5,
        orderPrice: 9,
        numberSeats: 1,
    },
    {
        orderId: '34234234234234cdscsdcsdscs2342342',
        direction: DirectionsEnum.toMinsk,
        date: '2021-04-02',
        haltName: "Остановка 2",
        haltTime: '37',
        startHour: 18,
        orderPrice: 9,
        numberSeats: 1,
    },
    {
        orderId: 'frefeg4tbybrbtr',
        direction: DirectionsEnum.toMinsk,
        date: '2021-04-09',
        haltName: "Остановка 3",
        haltTime: '40',
        startHour: 23,
        orderPrice: 9,
        numberSeats: 1,
    },
    {
        orderId: 'vsvadvasvervr',
        direction: DirectionsEnum.toMinsk,
        date: '2021-04-16',
        haltName: "Остановка 4",
        haltTime: '57',
        startHour: 22,
        orderPrice: 9,
        numberSeats: 1,
    },

];*/
