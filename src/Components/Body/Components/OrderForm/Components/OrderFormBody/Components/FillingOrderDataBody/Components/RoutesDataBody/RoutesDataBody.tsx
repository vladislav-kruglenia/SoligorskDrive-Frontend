import React from "react";
import style from "./RoutesDataBody.module.scss"
import {ChoiceDataContainer} from "./Components/ChoiceDataContainer/ChoiceDataContainer";
import {RoutesTable} from "./Components/RoutesTable/RoutesTable";
import {Paper} from "@material-ui/core";

export const RoutesDataBody = () => {
    return <Paper className={style.RoutesDataBody}>
        <ChoiceDataContainer/>

        <RoutesTable/>
    </Paper>
};