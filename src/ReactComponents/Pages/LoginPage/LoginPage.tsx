import React from "react";
import style from "./LoginPage.module.scss"
import {Redirect} from "react-router";
import {AppLinks} from "../../../AppGlobal/AppGlobalTypes/Links";
import {useSelector} from "react-redux";
import {getIsAuthSelector} from "../../../Redux/App/App.selectors";
import {LoginHeaderLogo} from "./Components/LoginHeaderLogo/LoginHeaderLogo";
import {LoginFormsBody} from "./Components/LoginFormsBody/LoginFormsBody";
import {useAppReducerActions} from "../../../Redux/App/Hooks/Actions.hooks";


export const LoginPage = () => {
    const isAuth = useSelector(getIsAuthSelector);
    const {editCurrentPageAction} = useAppReducerActions();

    if (isAuth) {
        editCurrentPageAction({currentPageName: "Профиль пользователя", indexCurrentPage: 0});
        return <Redirect to={AppLinks.AppRedirect}/>
    }

    return <div className={style.LoginPage}>
        <LoginHeaderLogo/>
        <LoginFormsBody/>
    </div>
};






