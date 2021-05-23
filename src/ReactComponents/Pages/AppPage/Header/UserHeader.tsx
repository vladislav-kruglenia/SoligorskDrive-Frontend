import React from "react";
import style from "./UserHeader.module.scss"
import {HeaderLogo} from "./Components/HeaderLogo/HeaderLogo";
import {HeaderUserRole} from "./Components/HeaderUserRole/HeaderUserRole";
import {CurrentPageName} from "./Components/CurrentPageName/CurrentPageName";

export const UserHeader = () => {
    return <div className={style.UserHeader}>
        <HeaderLogo/>

        <CurrentPageName/>

        <HeaderUserRole/>
    </div>
};



