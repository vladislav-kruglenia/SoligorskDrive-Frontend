import React from "react";
import HeaderDrawer from "./HeaderDrawer/HeaderDrawer";
import {Body} from "./Body/Body";
import {useSelector} from "react-redux";
import {getIsAuthSelector} from "../../../Redux/App/App.selectors";
import {Redirect} from "react-router";
import {AppLinks} from "../../../AppGlobal/AppGlobalTypes/Links";

export const AppPage = () => {
    const isAuth = useSelector(getIsAuthSelector);

    if(!isAuth) return <Redirect to={AppLinks.LandingPage}/>;
    
    return <>
        <HeaderDrawer/>
        <Body/>
    </>
};