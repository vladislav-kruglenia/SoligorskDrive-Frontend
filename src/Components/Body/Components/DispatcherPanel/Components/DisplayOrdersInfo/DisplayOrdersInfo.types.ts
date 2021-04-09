export type DispatcherOrdersData = {
    date: string,
    time: number | null,
    orders: DispatcherOrderData[],
}

export type DispatcherOrderData = {
    idOrder: string,
    direction: string,
    clientName: string,
    clientPhone: string,
}