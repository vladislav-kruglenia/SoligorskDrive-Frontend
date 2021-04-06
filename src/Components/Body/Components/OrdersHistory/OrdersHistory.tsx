import React from "react";
import {CurrentOrders} from "./Components/CurrentOrders/CurrentOrders";
import {OrdersArchive} from "./Components/OrdersArchive/OrdersArchive";

export const OrdersHistory = () => {
    return <div>
        <CurrentOrders/>
        <OrdersArchive/>
    </div>
};


