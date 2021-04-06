import {DirectionsEnum} from "../../../AppGlobal/AppGlobalTypes/Enums";
import {TravelInfoType} from "../../../Components/Body/Components/OrderForm/Components/OrderFormBody/Components/FillingOrderDataBody/Components/RoutesDataBody/Components/RoutesTable/Components/TableBody/TableBody.types";

export type EditDatePayload = {
    date: Date,
}

export type EditDirectionPayload = {
    direction: DirectionsEnum,
}

export interface EditUserOrderDataPayload extends UserOrderData{}

export interface EditSelectedHaltDataPayload {
    selectedHaltLabel: string,
}

export interface EditOrderingStagesPayload {
    indexActiveStep: number,
}

export interface EditTravelInfoPayload extends TravelInfoType {}

export type EditIndexActiveTravelPayload = {
    indexActiveTravel: number,
}

export type UserOrderData = {
    userName: string,
    userPhone: string,
    userNumberSeats: number,
}

