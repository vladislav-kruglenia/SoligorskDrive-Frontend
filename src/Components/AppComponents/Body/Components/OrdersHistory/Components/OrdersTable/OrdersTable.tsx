import React, {FC, useMemo} from "react";
import style from "./CurrentOrdersTable.module.scss";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {OrdersTableProps, OrderTableType} from "./OrdersTable.types";
import {DirectionsNamesEnum} from "../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {MainOrderData} from "../../../../../../../GraphQLServer/ApolloClientCommon/Types/Types";
import {DeleteButtonTableCell} from "./Components/DeleteButtonTableCell/DeleteButtonTableCell";


export const OrdersTable: FC<OrdersTableProps> = (props) => {
    const {orders, isCurrentOrdersTable} = props;

    const TableRows = useMemo(() => (
        orders.map((order: OrderTableType) => {
            const {date, direction, startHour, orderId} = order;
            const mainOrderData: MainOrderData = {date, direction, startHour};

            return (
                <TableRow key={orderId}>
                    <TableCell>{date}</TableCell>
                    <TableCell>{DirectionsNamesEnum[direction]}</TableCell>
                    <TableCell>{order.haltName}</TableCell>
                    <TableCell>{startHour}:{order.haltTime}</TableCell>
                    <TableCell>{startHour + 1}:45</TableCell>
                    <TableCell>{order.orderPrice} р.</TableCell>
                    <TableCell>{order.numberSeats}</TableCell>
                    {<DeleteButtonTableCell
                        orderId={orderId}
                        isCurrentOrdersTable={isCurrentOrdersTable}
                        mainOrderData={mainOrderData}
                    />}
                </TableRow>
            )
        })
    ), [orders, isCurrentOrdersTable]);

    return <TableContainer component={Paper} className={style.CurrentOrdersTable} style={{overflowX: "auto"}}>
        <Table className={style.table} aria-label="simple table">
            <TableHead className={style.tableHead}>
                <TableRow>
                    <TableCell variant={"head"}>Дата</TableCell>
                    <TableCell>Направление маршрута</TableCell>
                    <TableCell>Название остановки</TableCell>
                    <TableCell>Время отправления</TableCell>
                    <TableCell>Время прибытия</TableCell>
                    <TableCell>Стоимость заказа</TableCell>
                    <TableCell>Заказано мест</TableCell>
                    {isCurrentOrdersTable && <TableCell/>}
                </TableRow>
            </TableHead>
            <TableBody>
                {TableRows}
            </TableBody>
        </Table>
    </TableContainer>
};






