import React from "react";
import style from "./TravelInfo.module.scss"
import {FinishTravelTime, StartTravelTime} from "./Components/TraverTime/TravelTime";
import {TravelPrice} from "./Components/TravelPrice/TravelPrice";
import {OrderButtonContainer} from "./Components/OrderButtonContainer/OrderButtonContainer";
import {Divider} from "@material-ui/core";

export const TravelInfo = () => {
    return <div className={style.TravelInfo}>
        <div className={style.travelInfoElement}>
            <StartTravelTime/>
        </div>
        <div className={style.travelInfoElement}>
            <FinishTravelTime/>
        </div>
        <div className={style.travelInfoElement}>
            <TravelPrice/>
        </div>
        <div className={style.travelInfoElement}>
            <OrderButtonContainer/>
        </div>
        <Divider/>
    </div>
};
