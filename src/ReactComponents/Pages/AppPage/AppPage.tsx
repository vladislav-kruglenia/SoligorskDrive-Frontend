import React from "react";
import style from "./AppPage.module.scss"
import HeaderDrawer from "./HeaderDrawer/HeaderDrawer";
import {Body} from "./Body/Body";
import {useSelector} from "react-redux";
import {getIsAuthSelector} from "../../../Redux/App/App.selectors";
import {Redirect} from "react-router";
import {AppLinks} from "../../../AppGlobal/AppGlobalTypes/Links";
import {NavBar} from "./NavBar/NavBar";
import {Paper} from "@material-ui/core";

export const AppPage = () => {
    const isAuth = useSelector(getIsAuthSelector);

    if(!isAuth) return <Redirect to={AppLinks.LandingPage}/>;
    
    return <div className={style.AppPage}>
        <HeaderDrawer/>
        <div className={style.appBodyContainer}>
            <div className={style.appBodyWidthWrapper}>
                <Paper className={style.AppBodyNavbar}>
                    <NavBar/>
                </Paper>
                <Body/>
            </div>
        </div>
    </div>
};