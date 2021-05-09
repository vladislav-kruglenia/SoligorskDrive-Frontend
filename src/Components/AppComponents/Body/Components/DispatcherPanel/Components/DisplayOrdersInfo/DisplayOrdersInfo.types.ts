import {DirectionsEnum} from "../../../../../../../AppGlobal/AppGlobalTypes/Enums";

export type DispatcherOrdersData = {
    date: string,
    time: number | null,
    orders: DispatcherOrderData[],
}

export type DispatcherOrderData = {
    idOrder: string,
    direction: DirectionsEnum,
    clientName: string,
    clientPhone: string,
}