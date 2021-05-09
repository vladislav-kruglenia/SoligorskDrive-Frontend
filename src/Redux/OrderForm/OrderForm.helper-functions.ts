export const getOrderPrice = (numberSeats: number, tariffPrice: number): number => {
    return numberSeats * tariffPrice
};