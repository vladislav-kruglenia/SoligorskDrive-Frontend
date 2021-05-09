export type DispatcherOrdersInfoRes = {
    DispatcherOrdersInfo: DispatcherOrdersModel[]
}

export type DispatcherOrdersModel = {
    date: string,
    time: number,
    orders: DispatcherOrder[]
}

export type DispatcherOrder = {
    clientName: string,
    clientPhone: string,
    direction: string,
    idOrder: string,
}