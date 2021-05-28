import React from "react";
import style from "./ChoiceDataContainer.module.scss";
import {DirectionChoiceContainer} from "./Components/DirectionChoice/DirectionChoiceContainer";
import {DateChoiceContainer} from "./Components/DateChoice/DateChoiceContainer";
import {Typography} from "@material-ui/core";

export const ChoiceDataContainer = () => {
    return <div className={style.ChoiceDataContainer}>
        <Typography variant={"h5"} style={{fontWeight: "bold"}}>Выберите дату и направление</Typography>
        <div className={style.choiceDataWrapper}>
            <div className={style.formContainer}>
                <DirectionChoiceContainer/>
            </div>
            <div className={style.formContainer}>
                <DateChoiceContainer/>
            </div>
        </div>

    </div>
};
