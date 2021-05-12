import React, {FC, useMemo} from "react";
import style from "./DispatcherOrdersTable.module.scss"
import {OrdersTableTitles} from "./Components/OrdersTableTitles/OrdersTableTitles";
import {OrdersTableDisplay} from "./Components/OrdersTableDisplay/OrdersTableDisplay";
import {DispatcherOrdersTableProps, DispatcherOrdersTablesProps} from "./DispatcherOrdersTable.types";
import {DispatcherOrdersData} from "../../DisplayOrdersInfo.types";


export const DispatcherOrdersTables: FC<DispatcherOrdersTablesProps> = (props) => {
    const {dispatcherOrders} = props;

    const ordersComponents = useMemo(() => (dispatcherOrders.map((orders: DispatcherOrdersData) => (
            <DispatcherOrdersTable
                key={orders.date}
                dispatcherOrders={orders}
            />
        ))
    ), [dispatcherOrders]);

    return <>
        {ordersComponents}
    </>
};

export const DispatcherOrdersTable: FC<DispatcherOrdersTableProps> = (props) => {
    const {date, time, orders} = props.dispatcherOrders;
    return <div className={style.DispatcherOrdersTableWrapper}>
        <OrdersTableTitles
            date={date}
            time={time}
        />
        <OrdersTableDisplay
            orders={orders}
            startTime={time}
            date={date}
        />
    </div>
};








