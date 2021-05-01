import React from "react";
import style from "./TableTitle.module.scss"
import {Typography} from "@material-ui/core";

export const TableTitle = () => {
    return <Typography className={style.TableTitle} variant={"h5"}>
        Список рейсов
    </Typography>
};
