import {DirectionsEnum} from "../../../../AppGlobal/AppGlobalTypes/Enums";

export type ClientCurrentAndArchiveOrdersRes = {
    ClientCurrentOrders: ClientCurrentOrdersResModel[],
    ClientArchiveOrders: ClientCurrentOrdersResModel[],
}

export type ClientCurrentOrdersResModel = {
    orderId: string,
    date: string,
    direction: DirectionsEnum,
    haltName: string,
    haltTime: string,
    numberSeats: number,
    orderPrice: number,
    startHour: number,
}