import {TravelInfoType} from "../../TableBody.types";

export interface TravelInfoProps extends TravelInfoType {
    indexTravel: number,
    indexActiveTravel: number | null,
    isNotCurrentDirection: boolean,
}

export type StartTravelTimeProps = {
    startHourTravel: number,
}
export interface FinishTravelTimeProps extends StartTravelTimeProps {}

export type TravelPriceProps = {
    priceTravel: number,
}

export interface OrderButtonContainerProps extends TravelInfoProps {
}