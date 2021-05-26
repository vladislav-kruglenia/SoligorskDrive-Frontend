import React from "react";
import style from "./LoginHeaderLogo.module.scss"
import {NavLink} from "react-router-dom";
import {AppLinks} from "../../../../../AppGlobal/AppGlobalTypes/Links";
import {Logo} from "../../../../../AppGlobal/AppGlobalComponents/Logo/Logo";

export const LoginHeaderLogo = () => {
    return (
        <NavLink to={AppLinks.LandingPage} className={style.LoginHeaderLogo}>
            <Logo size={"large"}/>
        </NavLink>
    )
};