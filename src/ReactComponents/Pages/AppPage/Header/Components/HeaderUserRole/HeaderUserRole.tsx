import React from "react";
import style from "./HeaderUserRole.module.scss"
import {useSelector} from "react-redux";
import {getUserNameSelector, getUserRoleSelector} from "../../../../../../Redux/App/App.selectors";
import {RolesTitles} from "../../../../../../AppGlobal/AppGlobalTypes/Enums";

export const HeaderUserRole = () => {
    const userName = useSelector(getUserNameSelector);
    const userRole = useSelector(getUserRoleSelector);
    const userRoleTitle = RolesTitles[userRole];

    return <div className={style.HeaderUserRole}>
        <div className={style.userName}>{userName}</div>
        <div className={style.userRole}>{userRoleTitle}</div>
    </div>

};