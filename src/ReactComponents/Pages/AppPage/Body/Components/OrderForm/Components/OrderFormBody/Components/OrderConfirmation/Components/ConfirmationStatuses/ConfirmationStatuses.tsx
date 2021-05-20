import style from "../../OrderConfirmation.module.scss";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import {Typography} from "@material-ui/core";

export const LoadingResponse = () => {
    return <div className={style.LoadingResponse}>
        <Skeleton variant={"text"}/>
    </div>
};

export const ErrorStatus = () => {
    return <Typography variant={"h2"} className={`${style.text} ${style.error}`}>Ошибка заполнения данных</Typography>
};

