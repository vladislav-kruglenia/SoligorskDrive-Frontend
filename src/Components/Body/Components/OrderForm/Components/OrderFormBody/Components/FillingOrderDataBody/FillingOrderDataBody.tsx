import React from "react";
import style from "./FillingOrderDataBody.module.scss"
import {FillingPersonalData} from "./Components/FillingPersonalData/FillingPersonalData";
import {RoutesDataBody} from "./Components/RoutesDataBody/RoutesDataBody";

export const FillingOrderDataBody = () => {
    return <div className={style.FillingOrderDataBody}>
        <RoutesDataBody/>

        <FillingPersonalData/>
    </div>
};

