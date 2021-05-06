import {UserOrderData} from "../../../../../../../../../../../../../../../Redux/OrderForm/Types/Actions.types";

export interface UserDataFormProps {
    userOrderData: UserOrderData,
    remainingNumberSeats: number,
    editUserOrderData: (userOrderData: UserOrderData) => void,
    exitEditMode: () => void,
}


