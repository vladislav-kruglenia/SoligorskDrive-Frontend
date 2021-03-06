import {DirectionsEnum, StepsEnum, StepsIndexesEnum} from "../../../AppGlobal/AppGlobalTypes/Enums";

export type StartStateType = {
    orderId: string,
    orderSteps: Steps,
    selectedDirection: DirectionsEnum,
    selectedDate: string | Date,
    startHour: number,
    haltData: SelectedHaltData,
    userContacts: UserContacts,
    seats: Seats,
    prices: Prices,
    indexActiveTravel: number | null,
}

export type Steps = {
    indexActiveStep: StepsIndexesEnum,
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

