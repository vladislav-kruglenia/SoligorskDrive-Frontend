import React from "react";
import style from "./RoutesDataBody.module.scss"
import {ChoiceDataContainer} from "./Components/ChoiceDataContainer/ChoiceDataContainer";
import {RoutesTable} from "./Components/RoutesTable/RoutesTable";

export const RoutesDataBody = () => {
    return <div className={style.RoutesDataBody}>
        <ChoiceDataContainer/>

        <RoutesTable/>
    </div>
};