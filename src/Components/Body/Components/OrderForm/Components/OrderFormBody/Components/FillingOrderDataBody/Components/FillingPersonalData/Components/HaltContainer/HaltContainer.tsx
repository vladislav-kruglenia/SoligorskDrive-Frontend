import React from "react";
import style from "./HaltContainer.module.scss"
import {HaltChoice} from "./Components/HaltChoice/HaltChoice";
import {HaltTimeDisplay} from "./Components/HaltTimeDisplay/HaltTimeDisplay";
import {Typography} from "@material-ui/core";

export const HaltContainer = () => {
    return <div className={style.HaltContainer}>
        <Typography variant={"h5"}>Остановка и время отправления</Typography>

        <div className={style.haltWrapper}>
            <HaltChoice haltName={'none'}/>
            <HaltTimeDisplay/>
        </div>
    </div>
};
