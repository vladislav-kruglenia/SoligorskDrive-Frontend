import React, {FC} from "react";
import style from "./OrderForm.module.scss"
import {OrderingStages} from "./Components/OrderingStages/OrderingStages";
import {OrderFormBody} from "./Components/OrderFormBody/OrderFormBody";
import {OrderFormProps} from "./OrderForm.types";

export const OrderForm:FC<OrderFormProps> = (props) => {
    return <div className={style.OrderForm}>

        <OrderingStages/>

        <OrderFormBody typeComponent={props.typeComponent}/>

    </div>
};

