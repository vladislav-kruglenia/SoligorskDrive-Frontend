import React from "react";
import style from "./UserHeader.module.scss"
import Typography from "@material-ui/core/Typography";
import logo from "../../img/logo.png";
import {useSelector} from "react-redux";
import {getCurrentPageDataSelector} from "../../Redux/App/App.selectors";

export const UserHeader = () => {
    const {currentPageName} = useSelector(getCurrentPageDataSelector);

    return <div className={style.UserHeader}>
        <Logo/>
        <Typography variant="h6" noWrap>
            {currentPageName}
        </Typography>
    </div>
};

export const Logo = () => {
    return <div className={style.Logo}>
        <img src={logo} alt=""/>
    </div>
};

