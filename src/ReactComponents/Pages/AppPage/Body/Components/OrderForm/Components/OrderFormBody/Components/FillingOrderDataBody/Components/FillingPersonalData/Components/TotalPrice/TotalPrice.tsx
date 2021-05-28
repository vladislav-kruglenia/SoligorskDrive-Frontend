import React from "react";
import style from "./TotalPrice.module.scss"
import {Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {getTariffPriceSelector} from "../../../../../../../../../../../../../../Redux/OrderForm/Selectors/OrderForm.selectors";

export const TotalPrice = () => {
    const orderPrice = useSelector(getTariffPriceSelector);

    return <div className={style.TotalPrice}>
        <Typography className={style.totalPriceTitle} variant={"h4"} style={{fontWeight: "bold"}}>Стоимость заказа:</Typography>
        <Typography className={style.priceValue}>{orderPrice} р.</Typography>
    </div>
};
