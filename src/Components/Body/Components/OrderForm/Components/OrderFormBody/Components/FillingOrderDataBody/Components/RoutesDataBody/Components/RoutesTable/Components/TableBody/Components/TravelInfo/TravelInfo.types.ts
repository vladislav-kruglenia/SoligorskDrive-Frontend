import {TravelInfoType} from "../../TableBody.types";

export interface TravelInfoProps extends TravelInfoType {}

export type StartTravelTimeProps = {
    startHourTravel: number,
}
export interface FinishTravelTimeProps extends StartTravelTimeProps {}

export type TravelPriceProps = {
    priceTravel: number,
}

export interface OrderButtonContainerProps extends TravelInfoProps {}