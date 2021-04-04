export interface UserDataFormProps extends UserOrderData {
    exitEditMode: () => void,
    remainingNumberSeats: number,
}


export type UserOrderData = {
    userName: string,
    userPhone: string,
    userNumberSeats: number,
}