import React from "react";
import style from "./DesignerTitle.module.scss"
import {Typography} from "@material-ui/core";

export const DesignerTitle = () => {
    return <div className={style.DesignerTitle}>
        <div className={style.titlesContainer}>
            <Typography variant={'h3'} component={'div'}>Выбери свой маршрут</Typography>
            <Typography variant={'h5'} component={'div'}>Стоимость поездки от 7 рублей</Typography>
        </div>
    </div>
};