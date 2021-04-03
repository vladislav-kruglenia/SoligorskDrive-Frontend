import React from "react";
import style from "./FillingPersonalData.module.scss"
import {HaltContainer} from "./Components/HaltContainer/HaltContainer";
import {UserData} from "./Components/UserData/UserData";
import {TotalPrice} from "./Components/TotalPrice/TotalPrice";
import {Divider, Paper} from "@material-ui/core";

export const FillingPersonalData = () => {
    return <Paper className={style.FillingPersonalData}>
        <HaltContainer/>
        <UserData/>
        <Divider/>
        <TotalPrice/>
    </Paper>
};

