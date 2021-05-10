export type RemoveOrderRes = {
    removeOrder: RemoveOrderData
}

export type RemoveOrderData = {
    orderId: string,
    userId?: string,
}