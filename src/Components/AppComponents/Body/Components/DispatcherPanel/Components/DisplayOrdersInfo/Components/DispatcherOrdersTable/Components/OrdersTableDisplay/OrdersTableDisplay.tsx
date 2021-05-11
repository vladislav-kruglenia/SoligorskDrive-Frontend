import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import style from "../../DispatcherOrdersTable.module.scss";
import React, {FC, useMemo} from "react";
import {OrdersTableDisplayProps} from "./OrdersTableDisplay.types";
import {DispatcherOrderData} from "../../../../DisplayOrdersInfo.types";
import {DeleteOrderButtonContainer} from "../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/DeleteOrderButtonContainer/DeleteOrderButtonContainer";
import {DirectionsNamesEnum} from "../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {useMutationRemoveOrder} from "../../../../../../../../Body.hooks";
import {MainOrderData} from "../../../../../../../../../../../GraphQLServer/ApolloClientCommon/Types/Types";
import {RemoveOrderCacheType} from "../../../../../../../../../../../GraphQLServer/Mutations/RemoveOrder/Cache/RemoveOrder.cache.types";
import {useSelector} from "react-redux";
import {getDispatcherOrdersArgsSelector} from "../../../../../../../../../../../Redux/DispatcherPanel/Selectors/DispatcherOrdersArgs";

export const OrdersTableDisplay: FC<OrdersTableDisplayProps> = (props) => {
    const {orders, startTime, date} = props;
    const {mutationData, mutationCallback} = useMutationRemoveOrder();
    const dispatcherOrdersInfoData = useSelector(getDispatcherOrdersArgsSelector);

    const ordersTableRows = useMemo(() => (
        orders.map((order: DispatcherOrderData) => {
            const {idOrder, direction} = order;
            const mainOrderData: MainOrderData = {direction, date, startHour: startTime};
            return (
                <TableRow key={order.idOrder}>
                    <TableCell>{DirectionsNamesEnum[order.direction]}</TableCell>
                    <TableCell>{startTime}:00</TableCell>
                    <TableCell>{order.clientName}</TableCell>
                    <TableCell>{order.clientPhone}</TableCell>
                    <TableCell>
                        <DeleteOrderButtonContainer
                            orderId={idOrder}
                            dispatcherOrdersArgs={dispatcherOrdersInfoData}
                            mutationType={RemoveOrderCacheType.Dispatcher}
                            mutationData={mutationData}
                            removeOrderMutation={mutationCallback}
                            mainOrderData={mainOrderData}
                        />
                    </TableCell>
                </TableRow>
            )
        })
    ), [orders, startTime, date, mutationCallback, mutationData, dispatcherOrdersInfoData]);


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