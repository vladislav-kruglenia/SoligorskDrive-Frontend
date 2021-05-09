import React from "react";
import style from "./Preloader.module.scss"
import {CircularProgress} from "@material-ui/core";

export const Preloader = () => {
    return <div className={style.Preloader}>
        <CircularProgress />
    </div>
};
