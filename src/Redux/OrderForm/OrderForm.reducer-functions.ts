import {format} from "date-fns";

export const getDate = (date: Date): string => {
    return format(date, 'dd/MM/yyyy')
};

export const getOrderPrice = (numberSeats: number, tariffPrice: number): number => {
    return numberSeats * tariffPrice
};