import {DirectionsEnum} from "../../../AppGlobal/AppGlobalTypes/Enums";
import {UserOrderData} from "../../../Components/Body/Components/OrderForm/Components/OrderFormBody/Components/FillingOrderDataBody/Components/FillingPersonalData/Components/UserData/Components/UserDataForm/UserDataForm.types";
import {SelectedHaltData} from "./StartState.types";

export type EditDatePayload = {
    date: string
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

export type EditStartHourPayload = {
    startHour: number,
}

