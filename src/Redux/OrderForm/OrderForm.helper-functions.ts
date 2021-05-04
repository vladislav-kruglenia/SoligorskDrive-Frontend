import {format} from "date-fns";
import {DatesFormats} from "../../AppGlobal/AppGlobalTypes/Enums";

export const getDate = (date: Date, stringFormat: DatesFormats): string => {
    return format(date, stringFormat)
};



export const getOrderPrice = (numberSeats: number, tariffPrice: number): number => {
    return numberSeats * tariffPrice
};