import {DirectionsEnum, StepsEnum} from "../../../AppGlobal/AppGlobalTypes/Enums";

export type StartStateType = {
    orderSteps: Steps,
    selectedDirection: DirectionsEnum,
    selectedDate: string | Date,
    startHour: number,
    haltData: SelectedHaltData,
    userContacts: UserContacts,
    seats: Seats,
    prices: Prices,

}

export type Steps = {
    indexActiveStep: number,
    stepsArr: StepType[]
}

export type StepType = {
    stepId: StepsEnum,
    stepLabel: string,
}

export type UserContacts = {
    isFilledUp: boolean,
    userPhone: string,
    userName: string,
}

export type Seats = {
    remainingNumberSeats: number,
    userNumberSeats: number,
}

export type Prices = {
    orderPrice: number,
    tariffPrice: number,
}

export type SelectedHaltData = {
    selectedHaltLabel: string,
    haltTime: string,
}

