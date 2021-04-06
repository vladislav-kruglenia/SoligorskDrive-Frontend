import React from "react";
import style from "./FillingOrderDataBody.module.scss"
import {FillingPersonalData} from "./Components/FillingPersonalData/FillingPersonalData";
import {RoutesDataBody} from "./Components/RoutesDataBody/RoutesDataBody";
import {useSelector} from "react-redux";
import {getIndexActiveTravelSelector} from "../../../../../../../../Redux/OrderForm/OrderForm.selectors";

export const FillingOrderDataBody = () => {
    const indexActiveTravel = useSelector(getIndexActiveTravelSelector);
    const isFillingPersonalData = indexActiveTravel !== null && <FillingPersonalData/>;

    return <div className={style.FillingOrderDataBody}>
        <RoutesDataBody/>

        {isFillingPersonalData}
    </div>
};

