import React, {FC} from "react";
import style from "./SuccessFulOrderData.module.scss"
import {SuccessfulOrderDataElementProps} from "./SuccessfulOrderData.types";
import {useSuccessfulOrderDataArr} from "./SuccessfulOrderData.hooks";

export const SuccessfulOrderData = () => {

    const SuccessfulOrderDataElementsArr = useSuccessfulOrderDataArr();

    return <div className={style.SuccessfulOrderData}>
        {SuccessfulOrderDataElementsArr}
    </div>
};



export const SuccessfulOrderDataElement:FC<SuccessfulOrderDataElementProps> = (props) => {
    return <div className={style.SuccessfulOrderDataElement}>
        <div className={style.container}>{props.title}:</div>
        <div className={`${style.container} ${style.value}`}>{props.value}</div>
    </div>
};