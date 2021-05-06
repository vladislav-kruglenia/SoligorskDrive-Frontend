import {DirectionsNamesEnum} from "../../../../../../../AppGlobal/AppGlobalTypes/Enums";

export type OrdersTableProps = {
    orders: OrderTableType[],
    isCurrentOrdersTable?: boolean,
}


export type OrderTableType = {
    orderId: string,
    direction: DirectionsNamesEnum,
    haltName: string,
    haltTime: string,
    orderPrice: number,
    numberSeats: number,
    date: string,
    startHour: number,
}