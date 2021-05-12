import {UserOrderData} from "../../../../../../../../../../../../../../../../Redux/OrderForm/Types/Actions.types";

export interface DisplayUserDataProps {
    userOrderData: UserOrderData,
}

export type UserDataElementProps = {
    labelText: string,
    elementValue: string | number,
}