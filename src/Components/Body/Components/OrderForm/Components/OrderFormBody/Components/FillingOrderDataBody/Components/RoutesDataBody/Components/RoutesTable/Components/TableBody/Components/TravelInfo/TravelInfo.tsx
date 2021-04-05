import React, {FC} from "react";
import style from "./TravelInfo.module.scss"
import {FinishTravelTime, StartTravelTime} from "./Components/TraverTime/TravelTime";
import {TravelPrice} from "./Components/TravelPrice/TravelPrice";
import {OrderButtonContainer} from "./Components/OrderButtonContainer/OrderButtonContainer";
import {Divider} from "@material-ui/core";
import {TravelInfoProps} from "./TravelInfo.types";

export const TravelInfo:FC<TravelInfoProps> = (props) => {
    const {startHourTravel, priceTravel} = props;

    return <div className={style.TravelInfo}>
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
                remainingNumberSeats={props.remainingNumberSeats}
            />
        </div>
        <Divider/>
    </div>
};
