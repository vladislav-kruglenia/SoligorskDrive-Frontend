import React from "react";
import style from "./HaltTimeDisplay.module.scss"
import {Typography} from "@material-ui/core";

export const HaltTimeDisplay = () => {
    return <Typography className={style.HaltTimeDisplay}>
        Время на остановке: 16:37
    </Typography>
};
