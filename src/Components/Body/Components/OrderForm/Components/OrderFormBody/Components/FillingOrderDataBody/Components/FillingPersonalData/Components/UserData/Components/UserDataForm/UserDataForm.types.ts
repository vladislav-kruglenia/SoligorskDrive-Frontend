export interface UserDataFormProps extends ValuesFormType {
    exitEditMode: () => void,
    remainingNumberSeats: number,
}


export type ValuesFormType = {
    userName: string,
    userPhone: string,
    userNumberSeats: number,
}