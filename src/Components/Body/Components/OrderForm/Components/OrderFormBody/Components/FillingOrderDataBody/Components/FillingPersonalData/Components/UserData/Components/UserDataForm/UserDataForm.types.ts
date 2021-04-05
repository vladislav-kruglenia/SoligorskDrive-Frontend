import {UserOrderData} from "../../../../../../../../../../../../../../Redux/OrderForm/Types/Actions.types";

export interface UserDataFormProps {
    userOrderData: UserOrderData,
    exitEditMode: () => void,
    remainingNumberSeats: number,
}


