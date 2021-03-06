import {AppStateType} from "../../../AppGlobal/AppGlobalTypes/Types";
import {
    ClientData,
    Order,
    SecondaryOrderData
} from "../../../GraphQLServer/Mutations/CreateOrder/Types/CreateOrderVar.types";
import {createSelector} from "reselect";
import {DateAndHourService} from "../../../AppGlobal/AppGlobalClasses/DateService";
import {MainOrderData} from "../../../GraphQLServer/ApolloClientCommon/Types/Types";

const getCreateOrderData = (state: AppStateType): Order => {
    const clientId = state.app.userId || undefined;
    const startHour = state.orderForm.startHour;
    const direction = state.orderForm.selectedDirection;
    const {date} = new DateAndHourService(state.orderForm.selectedDate as Date);
    const orderPrice = state.orderForm.prices.orderPrice;
    const numberSeatsOrdered = state.orderForm.seats.userNumberSeats;
    const {haltTime, selectedHaltLabel} = state.orderForm.haltData;
    const {userPhone, userName} = state.orderForm.userContacts;

    const mainOrderData: MainOrderData = {startHour, direction, date};
    const secondaryOrderData: SecondaryOrderData = {orderPrice, numberSeatsOrdered, haltTime, haltName: selectedHaltLabel};
    const clientData: ClientData = {clientNumberPhone: userPhone, clientName: userName, clientId};

    return {orderId: state.orderForm.orderId, mainOrderData, secondaryOrderData, clientData}
};

export const getCreateOrderDataSelector = createSelector(getCreateOrderData, data => data);