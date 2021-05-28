import React from "react";
import style from "./TableTitle.module.scss"
import {Typography} from "@material-ui/core";

export const TableTitle = () => {
    return <Typography className={style.TableTitle} style={{fontWeight: "bold"}} variant={"h5"}>
        Доступные рейсы
    </Typography>
};
