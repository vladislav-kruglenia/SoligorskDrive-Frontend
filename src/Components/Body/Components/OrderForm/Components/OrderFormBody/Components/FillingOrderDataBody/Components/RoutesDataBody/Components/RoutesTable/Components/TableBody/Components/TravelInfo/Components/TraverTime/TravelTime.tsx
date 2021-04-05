import React, {FC} from "react";
import style from "../../../../../../../../../../../../../../OrderForm.module.scss";
import {FinishTravelTimeProps, StartTravelTimeProps} from "../../TravelInfo.types";

export const StartTravelTime: FC<StartTravelTimeProps> = (props) => {
    return <div className={style.StartTime}>{props.startHourTravel}:00</div>
};

export const FinishTravelTime: FC<FinishTravelTimeProps> = (props) => {
    return <div className={style.FinishTime}>{props.startHourTravel + 1}:45</div>
};
