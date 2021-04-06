import React, {FC} from "react";
import style from "./TravelInfo.module.scss"
import {FinishTravelTime, StartTravelTime} from "./Components/TraverTime/TravelTime";
import {TravelPrice} from "./Components/TravelPrice/TravelPrice";
import {OrderButtonContainer} from "./Components/OrderButtonContainer/OrderButtonContainer";
import {Divider} from "@material-ui/core";
import {TravelInfoProps} from "./TravelInfo.types";

export const TravelInfo:FC<TravelInfoProps> = (props) => {
    const {startHourTravel, priceTravel, indexTravel, indexActiveTravel, isNotCurrentDirection} = props;

    const isActiveField = indexTravel === indexActiveTravel;

    return <div className={`${style.TravelInfo} ${isActiveField && style.activeTravelField}`}>
        <div className={style.travelInfoElement}>
            <StartTravelTime startHourTravel={startHourTravel}/>
        </div>
        <div className={style.travelInfoElement}>
            <FinishTravelTime startHourTravel={startHourTravel}/>
        </div>
        <div className={style.travelInfoElement}>
            <TravelPrice priceTravel={priceTravel}/>
        </div>
        <div className={style.travelInfoElement}>
            <OrderButtonContainer
                startHourTravel={startHourTravel}
                priceTravel={priceTravel}
                indexTravel={indexTravel}
                indexActiveTravel={indexActiveTravel}
                remainingNumberSeats={props.remainingNumberSeats}
                isNotCurrentDirection={isNotCurrentDirection}
            />
        </div>
        <Divider/>
    </div>
};
