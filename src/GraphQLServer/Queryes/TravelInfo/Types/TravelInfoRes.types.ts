export type TravelInfoResType = {
    TravelInfo: TravelInfoModel[]
}

export interface TravelInfoModel {
    startHourTravel: number,
    priceTravel: number,
    remainingNumberSeats: number,
}