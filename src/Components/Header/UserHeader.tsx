import React from "react";
import style from "./UserHeader.module.scss"
import Typography from "@material-ui/core/Typography";
import logo from "../../img/logo.png";
import {useSelector} from "react-redux";
import {getCurrentPageDataSelector} from "../../Redux/App/App.selectors";
import {Logo} from "../../AppGlobal/AppGlobalComponents/Logo/Logo";
import {NavLink} from "react-router-dom";
import {AppLinks} from "../../AppGlobal/AppGlobalTypes/Links";

export const UserHeader = () => {
    const {currentPageName} = useSelector(getCurrentPageDataSelector);

    return <div className={style.UserHeader}>
        <NavLink to={AppLinks.UserProfile}>
            <Logo/>
        </NavLink>

        <Typography variant="h6" noWrap className={style.headerTitle}>
            {currentPageName}
        </Typography>
    </div>
};

export const LogoImg = () => {
    return <div className={style.Logo}>
        <img src={logo} alt=""/>
    </div>
};

