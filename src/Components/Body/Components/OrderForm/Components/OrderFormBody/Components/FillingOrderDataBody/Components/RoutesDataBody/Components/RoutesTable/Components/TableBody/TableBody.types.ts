import {ReactNodeArray} from "react";

export type TravelsInfo = TravelInfoType[]

export type TravelInfoType = {
    startHourTravel: number,
    priceTravel: number,
    remainingNumberSeats: number,
}

export type TravelsInfoTableProps = {
    travelsInfo: TravelInfoType[],
}

export type TravelsInfoTableBodyProps = {
    TableRows: ReactNodeArray
}

export type TableRowTravelsInfoProps = {
    tableRowStyle: string,
    startHourTravel: number,
    priceTravel: number,
    remainingNumberSeats: number,
    indexRow: number,
    indexActiveTravel: number | null,
    isNotCurrentDirection: boolean,
}