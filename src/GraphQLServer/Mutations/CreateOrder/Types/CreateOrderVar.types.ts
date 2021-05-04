export type CreateOrderVarType = {
    createOrderData: Order
}


export interface Order {
    orderId: string;
    secondaryOrderData: SecondaryOrderData;
    mainOrderData: MainOrderData;
    clientData: ClientData;
}


export interface MainOrderData {
    direction: string;
    date: string;
    startHour: number;
}


export interface ClientData {
    clientName: string;
    clientNumberPhone: string;
    clientId?: string;
}


export interface SecondaryOrderData {
    haltName: string;
    haltTime: string;
    orderPrice: number;
    numberSeatsOrdered: number;
}
