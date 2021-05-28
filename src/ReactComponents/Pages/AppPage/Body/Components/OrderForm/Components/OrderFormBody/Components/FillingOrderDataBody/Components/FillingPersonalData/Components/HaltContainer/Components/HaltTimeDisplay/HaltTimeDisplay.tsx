import React, {FC} from "react";
import style from "./HaltTimeDisplay.module.scss"
import {Typography} from "@material-ui/core";
import {HaltTimeDisplayProps} from "./HaltTimeDisplay.types";

export const HaltTimeDisplay:FC<HaltTimeDisplayProps> = (props) => {
    return <Typography className={style.HaltTimeDisplay}>
        Время: {props.startHour - 1}:{props.haltTime}
    </Typography>
};
