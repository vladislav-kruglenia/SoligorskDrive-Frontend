import {DirectionsEnum} from "../../../../AppGlobal/AppGlobalTypes/Enums";

export type DispatcherOrdersInfoVar = {
    dispatcherOrdersInfoData: DispatcherOrdersInfoArgs
}

export type DispatcherOrdersInfoArgs = {
    date?: string,
    direction?: DirectionsEnum,
    startHour?: number,
}