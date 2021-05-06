import React, {FC} from "react";
import style from "./UserProfileDataDisplay.module.scss"
import {DisplayUserProfileDataProps, UserValueProps} from "./UserProfileDataDisplay.types";
import {Typography} from "@material-ui/core";

export const DisplayUserProfileData:FC<DisplayUserProfileDataProps> = (props) => {
    const {userName, userLogin, userPhone} = props.userData;

    return <div className={style.UserProfileDataDisplay}>
        <UserValue labelText={'Имя'} dataValue={userName}/>
        <UserValue labelText={'Логин'} dataValue={userLogin}/>
        <UserValue labelText={'Телефон'} dataValue={userPhone}/>
    </div>
};


export const UserValue:FC<UserValueProps> = (props) => {
    const {labelText, dataValue} = props;

    return <div className={style.UserValue}>
        <Typography variant={"overline"} className={style.label}>{labelText}:</Typography>
        <Typography className={style.value}>{dataValue}</Typography>
    </div>
};
