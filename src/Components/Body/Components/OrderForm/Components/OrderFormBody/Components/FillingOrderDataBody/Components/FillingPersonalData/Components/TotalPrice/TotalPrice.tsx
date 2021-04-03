import React from "react";
import style from "./TotalPrice.module.scss"
import {Typography} from "@material-ui/core";

export const TotalPrice = () => {
    return <div className={style.TotalPrice}>
        <Typography className={style.totalPriceTitle}>Стоимость заказа:</Typography>
        <Typography className={style.priceValue}>{9} р.</Typography>
    </div>
};
