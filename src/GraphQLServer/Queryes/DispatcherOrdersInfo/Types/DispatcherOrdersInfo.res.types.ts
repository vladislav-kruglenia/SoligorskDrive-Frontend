import {DirectionsEnum} from "../../../../AppGlobal/AppGlobalTypes/Enums";

export type DispatcherOrdersInfoRes = {
    DispatcherOrdersInfo: DispatcherOrdersModel[]
}

export type DispatcherOrdersModel = {
    date: string,
    time: number,
    orders: DispatcherOrder[]
}

export type DispatcherOrder = {
    direction: DirectionsEnum,
    clientName: string,
    clientPhone: string,
    idOrder: string,
}