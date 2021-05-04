export interface CreateOrderResType extends OrderCreationModel{}

export interface OrderCreationModel {
    userId?: string;
    orderId: string;
}