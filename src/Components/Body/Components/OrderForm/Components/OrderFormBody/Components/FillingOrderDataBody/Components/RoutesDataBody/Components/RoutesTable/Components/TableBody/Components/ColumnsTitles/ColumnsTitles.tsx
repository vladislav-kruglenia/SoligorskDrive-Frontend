import React, {FC, useMemo} from "react";
import style from "./ColumnsTitles.module.scss"
import {ColumnTitleProps} from "./ColumnsTitles.types";
import {Typography} from "@material-ui/core";

export const ColumnsTitles = () => {
    const titlesArray = useMemo(() => [
        "Время отправки", "Время прибытия", "Цена", "Количество мест"
    ], []);

    const titles = useMemo(() => titlesArray.map(title => <ColumnTitle
            key={title}
            title={title}/>),
        [titlesArray]);

    return <div className={style.ColumnsTitles}>
        {titles}
    </div>
};

export const ColumnTitle: FC<ColumnTitleProps> = ({title}) => {
    return <Typography className={style.ColumnTitle}>{title}</Typography>
};

