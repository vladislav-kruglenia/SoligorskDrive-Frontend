import React from "react";
import style from "./CurrentOrders.module.scss"
import {Typography} from "@material-ui/core";
import {OrdersTable} from "../OrdersTable/OrdersTable";
import {OrderTableType} from "../OrdersTable/OrdersTable.types";
import {DirectionsNamesEnum} from "../../../../../../AppGlobal/AppGlobalTypes/Enums";

export const CurrentOrders = () => {
    return <div className={style.CurrentOrders}>
        <Typography variant={'h4'} className={style.title}>Список текущих заказанных рейсов</Typography>
        <OrdersTable orders={orders} isCurrentOrdersTable={true}/>
    </div>
};

const orders: OrderTableType[] = [
    {
        orderId: '342342342342342342342',
        direction: DirectionsNamesEnum.toMinsk,
        date: '2021-04-06',
        haltName: "Остановка 1",
        haltTime: '45',
        startHour: 5,
        orderPrice: 9,
        numberSeats: 1,
    },
    {
        orderId: '34234234234234cdscsdcsdscs2342342',
        direction: DirectionsNamesEnum.toMinsk,
        date: '2021-04-02',
        haltName: "Остановка 2",
        haltTime: '37',
        startHour: 18,
        orderPrice: 9,
        numberSeats: 1,
    },
    {
        orderId: 'frefeg4tbybrbtr',
        direction: DirectionsNamesEnum.toMinsk,
        date: '2021-04-09',
        haltName: "Остановка 3",
        haltTime: '40',
        startHour: 23,
        orderPrice: 9,
        numberSeats: 1,
    },
    {
        orderId: 'vsvadvasvervr',
        direction: DirectionsNamesEnum.toMinsk,
        date: '2021-04-16',
        haltName: "Остановка 4",
        haltTime: '57',
        startHour: 22,
        orderPrice: 9,
        numberSeats: 1,
    },

];

