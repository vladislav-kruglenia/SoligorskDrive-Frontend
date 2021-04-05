import React, {useMemo} from "react";
import style from "./TableBody.module.scss"
import {ColumnsTitles} from "./Components/ColumnsTitles/ColumnsTitles";
import {TravelInfo} from "./Components/TravelInfo/TravelInfo";
import {Divider} from "@material-ui/core";
import {TravelInfoType, TravelsInfo} from "./TableBody.types";

export const TableBody = () => {
    const Travels = useMemo(() => (
            travelsInfo.map((travel: TravelInfoType) => (
                <TravelInfo
                    priceTravel={travel.priceTravel}
                    startHourTravel={travel.startHourTravel}
                    remainingNumberSeats={travel.remainingNumberSeats}
                />))
        ), []);

    return <div className={style.TableBody}>
        <ColumnsTitles/>

        <Divider/>

        {Travels}
    </div>
};

const travelsInfo: TravelsInfo = [
    {startHourTravel: 10, priceTravel: 9, remainingNumberSeats: 13},
    {startHourTravel: 11, priceTravel: 9, remainingNumberSeats: 13},
    {startHourTravel: 12, priceTravel: 9, remainingNumberSeats: 13},
    {startHourTravel: 13, priceTravel: 9, remainingNumberSeats: 13},
];