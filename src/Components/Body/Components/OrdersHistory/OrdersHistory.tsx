import React from "react";
import style from "./OrdersHistory.module.scss"
import {CurrentOrders} from "./Components/CurrentOrders/CurrentOrders";
import {OrdersArchive} from "./Components/OrdersArchive/OrdersArchive";

export const OrdersHistory = () => {
    return <div className={style.OrdersHistory}>
        <CurrentOrders/>
        <OrdersArchive/>

    </div>
};




