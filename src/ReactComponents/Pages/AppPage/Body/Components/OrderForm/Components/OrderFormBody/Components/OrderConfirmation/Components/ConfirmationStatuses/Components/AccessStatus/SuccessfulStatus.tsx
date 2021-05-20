import React from "react";
import style from "./SuccessfulStatus.module.scss"
import {Typography} from "@material-ui/core";
import {SuccessfulOrderData} from "./Components/SuccessFulOrderData/SuccessfulOrderData";

export const SuccessfulStatus = () => {
    return <div className={style.SuccessfulStatus}>
        <div className={style.successfulTitle}>
            <Typography variant={"h4"} className={style.title}>
                Ваш заказ успешно
                оформлен!
            </Typography>
        </div>
        <SuccessfulOrderData/>
    </div>
};


