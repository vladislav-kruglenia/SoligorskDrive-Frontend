import React, {useMemo} from "react";
import style from "./TableBody.module.scss"
import {ColumnsTitles} from "./Components/ColumnsTitles/ColumnsTitles";
import {TravelInfo} from "./Components/TravelInfo/TravelInfo";
import {Divider} from "@material-ui/core";
import {TravelInfoType, TravelsInfo} from "./TableBody.types";
import {
    getDirectionSelector,
    getIndexActiveTravelSelector
} from "../../../../../../../../../../../../../../Redux/OrderForm/OrderForm.selectors";
import {useSelector} from "react-redux";
import {DirectionsEnum} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";

export const TableBody = () => {
    const indexActiveTravel = useSelector(getIndexActiveTravelSelector);
    const currentDirection = useSelector(getDirectionSelector);
    const isNotCurrentDirection = currentDirection === DirectionsEnum.none;

    const Travels = useMemo(() => (
            travelsInfo.map((travel: TravelInfoType, index) => (
                <TravelInfo
                    key={travel.startHourTravel}
                    isNotCurrentDirection={isNotCurrentDirection}
                    indexTravel={index}
                    indexActiveTravel={indexActiveTravel}
                    priceTravel={travel.priceTravel}
                    startHourTravel={travel.startHourTravel}
                    remainingNumberSeats={travel.remainingNumberSeats}
                />))
        ), [indexActiveTravel, isNotCurrentDirection]);

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