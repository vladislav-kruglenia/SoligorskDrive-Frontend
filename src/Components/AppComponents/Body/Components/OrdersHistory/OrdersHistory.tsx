import React from "react";
import style from "./OrdersHistory.module.scss"
import {CurrentOrders} from "./Components/CurrentOrders/CurrentOrders";
import {OrdersArchive} from "./Components/OrdersArchive/OrdersArchive";
import {useQueryCurrentAndArchiveOrders} from "./OrdersHistory.hooks";

export const OrdersHistory = () => {
    const {ArchiveRenderComponent, CurrentRenderComponent} = useQueryCurrentAndArchiveOrders();

    const CurrentOrdersRender = CurrentRenderComponent !== null ? <CurrentOrders RenderDataComponent={CurrentRenderComponent}/> : null;
    const OrdersArchiveRender = ArchiveRenderComponent !== null ? <OrdersArchive RenderDataComponent={ArchiveRenderComponent}/> : null;


    return <div className={style.OrdersHistory}>
        {CurrentOrdersRender}
        {OrdersArchiveRender}
    </div>
};




