import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import style from "../../DispatcherOrdersTable.module.scss";
import React, {FC, useMemo} from "react";
import {OrdersTableDisplayProps} from "./OrdersTableDisplay.types";
import {DispatcherOrderData} from "../../../../DisplayOrdersInfo.types";
import {DeleteOrderButtonContainer} from "../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/DeleteOrderButtonContainer/DeleteOrderButtonContainer";

export const OrdersTableDisplay: FC<OrdersTableDisplayProps> = (props) => {
    const {orders, startTime} = props;

    const ordersTableRows = useMemo(() => (
        orders.map((order: DispatcherOrderData) => (
            <TableRow key={order.idOrder}>
                <TableCell>{order.direction}</TableCell>
                <TableCell>{startTime}:00</TableCell>
                <TableCell>{order.clientName}</TableCell>
                <TableCell>{order.clientPhone}</TableCell>
                <TableCell><DeleteOrderButtonContainer orderId={order.idOrder}/></TableCell>
            </TableRow>
        ))
    ), [orders, startTime]);


    return <TableContainer className={style.DispatcherOrdersTable} component={Paper}>
        <Table className={style.table} aria-label="simple table">
            <TableHead className={style.tableHead}>
                <TableRow>
                    <TableCell>Направление маршрута</TableCell>
                    <TableCell>Время отправления</TableCell>
                    <TableCell>Имя клиента</TableCell>
                    <TableCell>Телефон клиента</TableCell>
                    <TableCell/>
                </TableRow>
            </TableHead>
            <TableBody>
                {ordersTableRows}
            </TableBody>
        </Table>
    </TableContainer>
};