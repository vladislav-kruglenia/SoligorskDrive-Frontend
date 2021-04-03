import React from "react";
import style from './OrderFormBody.module.scss'
import {OrderConfirmation} from "./Components/OrderConfirmation/OrderConfirmation";
import {FillingOrderDataBody} from "./Components/FillingOrderDataBody/FillingOrderDataBody";

export const OrderFormBody = () => {
    return <div className={style.OrderFormBody}>

        <FillingOrderDataBody/>

        <OrderConfirmation/>
    </div>
};

