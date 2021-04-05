import React, {FC} from "react";
import style from "../../../../../../../../../../../../../../OrderForm.module.scss";
import {TravelPriceProps} from "../../TravelInfo.types";

export const TravelPrice:FC<TravelPriceProps> = (props) => {
    return <div className={style.Price}>{props.priceTravel} р.</div>
};
