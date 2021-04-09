import {DispatcherOrderData} from "../../../../DisplayOrdersInfo.types";

export type OrdersTableDisplayProps = {
    orders:  DispatcherOrderData[],
    startTime: number | null,
}