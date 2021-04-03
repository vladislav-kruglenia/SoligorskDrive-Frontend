import React, {FC} from "react";
import style from "./DisplayUserData.module.scss"
import {UserDataElementProps} from "./DisplayUserData.types";
import {Typography} from "@material-ui/core";

export const DisplayUserData = () => {
    return <div className={style.DisplayUserData}>
        <UserDataElement labelText={'Ваше имя:'} elementValue={'Владислав'}/>
        <UserDataElement labelText={'Ваш телефон:'} elementValue={'+375293817501'}/>
        <UserDataElement labelText={'Количесво мест:'} elementValue={`${1}`}/>
    </div>
};

export const UserDataElement:FC<UserDataElementProps> = (props) => {
    return <div className={style.UserDataElement}>
        <Typography variant={"caption"} className={style.elementLabel}>{props.labelText}</Typography>
        <Typography className={style.elementValue}>{props.elementValue}</Typography>
    </div>
};