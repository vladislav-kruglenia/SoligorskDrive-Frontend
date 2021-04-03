import React from "react";
import style from "../../../../../../../../../../OrderForm.module.scss";
import {Typography} from "@material-ui/core";

export const TableTitle = () => {
    return <Typography variant={"h5"} className={style.TableTitle}>
        Список рейсов
    </Typography>
};
