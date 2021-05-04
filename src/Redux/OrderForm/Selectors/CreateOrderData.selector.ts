import {AppStateType} from "../../../AppGlobal/AppGlobalTypes/Types";
import {
    MainOrderData,
    Order,
    SecondaryOrderData,
    ClientData
} from "../../../GraphQLServer/Mutations/CreateOrder/Types/CreateOrderVar.types";
import {getDate} from "../OrderForm.helper-functions";
import {DatesFormats} from "../../../AppGlobal/AppGlobalTypes/Enums";
import {createSelector} from "reselect";

const getCreateOrderData = (state: AppStateType): Order => {
    const startHour = state.orderForm.startHour;
    const direction = state.orderForm.selectedDirection;
    const date = getDate(state.orderForm.selectedDate as Date, DatesFormats.Server);
    const orderPrice = state.orderForm.prices.orderPrice;
    const numberSeatsOrdered = state.orderForm.seats.userNumberSeats;
    const {haltTime, selectedHaltLabel} = state.orderForm.haltData;
    const {userPhone, userName} = state.orderForm.userContacts;




    const mainOrderData: MainOrderData = {
        startHour, direction, date
    };

    const secondaryOrderData: SecondaryOrderData = {
        orderPrice, numberSeatsOrdered, haltTime, haltName: selectedHaltLabel
    };

    const clientData: ClientData = {
        clientNumberPhone: userPhone, clientName: userName
    };

    return {
        orderId: state.orderForm.orderId,
        mainOrderData, secondaryOrderData, clientData
    }
};

export const getCreateOrderDataSelector = createSelector(getCreateOrderData, data => data);