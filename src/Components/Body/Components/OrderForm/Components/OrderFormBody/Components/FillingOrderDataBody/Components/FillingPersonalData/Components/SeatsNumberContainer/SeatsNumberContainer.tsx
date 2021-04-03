import React from "react";
import style from "../../../../../../../../OrderForm.module.scss";
import {SeatsNumber} from "./Components/SeatsNumber/SeatsNumber";
import {TotalPrice} from "./Components/TotalPrice/TotalPrice";

export const SeatsNumberContainer = () => {
    return <div className={style.SeatsNumberContainer}>
        <SeatsNumber/>
        <TotalPrice/>
    </div>
};
