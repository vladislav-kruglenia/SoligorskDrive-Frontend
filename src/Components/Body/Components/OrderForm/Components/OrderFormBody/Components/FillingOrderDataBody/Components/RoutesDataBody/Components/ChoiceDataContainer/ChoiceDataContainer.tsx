import React from "react";
import style from "./ChoiceDataContainer.module.scss";
import {DirectionChoice} from "./Components/DirectionChoice/DirectionChoice";
import {DateChoice} from "./Components/DateChoice/DateChoice";
import {Typography} from "@material-ui/core";

export const ChoiceDataContainer = () => {
    return <div className={style.ChoiceDataContainer}>
        <Typography variant={"h5"}>Выбор данных</Typography>
        <div className={style.choiceDataWrapper}>
            <div className={style.formContainer}>
                <DirectionChoice/>
            </div>
            <div className={style.formContainer}>
                <DateChoice/>
            </div>
        </div>

    </div>
};
