import {DirectionsEnum} from "../../../AppGlobal/AppGlobalTypes/Enums";

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

export type EditStartHourPayload = {
    startHour: number,
}

export type UserOrderData = {
    userName: string,
    userPhone: string,
    userNumberSeats: number,
}

