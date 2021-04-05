import React, {FC} from "react";
import style from "./DisplayUserData.module.scss"
import {DisplayUserDataProps, UserDataElementProps} from "./DisplayUserData.types";
import {Typography} from "@material-ui/core";

export const DisplayUserData:FC<DisplayUserDataProps> = (props) => {
    const {userName, userPhone, userNumberSeats} = props.userOrderData;

    return <div className={style.DisplayUserData}>
        <UserDataElement labelText={'Ваше имя:'} elementValue={userName}/>
        <UserDataElement labelText={'Ваш телефон:'} elementValue={userPhone}/>
        <UserDataElement labelText={'Количество мест:'} elementValue={userNumberSeats}/>
    </div>
};

export const UserDataElement:FC<UserDataElementProps> = (props) => {
    return <div className={style.UserDataElement}>
        <Typography variant={"caption"} className={style.elementLabel}>{props.labelText}</Typography>
        <Typography className={style.elementValue}>{props.elementValue}</Typography>
    </div>
};