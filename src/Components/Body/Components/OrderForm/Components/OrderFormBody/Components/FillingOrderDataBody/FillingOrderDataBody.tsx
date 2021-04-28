import React, {FC} from "react";
import style from "./FillingOrderDataBody.module.scss"
import {FillingPersonalData} from "./Components/FillingPersonalData/FillingPersonalData";
import {RoutesDataBody} from "./Components/RoutesDataBody/RoutesDataBody";
import {useSelector} from "react-redux";
import {getIndexActiveTravelSelector} from "../../../../../../../../Redux/OrderForm/OrderForm.selectors";
import {FillingOrderDataBodyProps} from "./FillingOrderDataBody.types";

export const FillingOrderDataBody:FC<FillingOrderDataBodyProps> = (props) => {
    const indexActiveTravel = useSelector(getIndexActiveTravelSelector);
    const isFillingPersonalData = indexActiveTravel !== null && <FillingPersonalData typeComponent={props.typeComponent}/>;

    return <div className={style.FillingOrderDataBody}>
        <RoutesDataBody/>

        {isFillingPersonalData}
    </div>
};

