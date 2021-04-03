import React from "react";
import style from "./OrderForm.module.scss"
import {OrderingStages} from "./Components/OrderingStages/OrderingStages";
import {OrderFormBody} from "./Components/OrderFormBody/OrderFormBody";

export const OrderForm = () => {
    return <div className={style.OrderForm}>

        <OrderingStages/>

        <OrderFormBody/>

    </div>
};

