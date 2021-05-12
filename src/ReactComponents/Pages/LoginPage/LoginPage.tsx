import React from "react";
import style from "./LoginPage.module.scss"
import {Paper} from "@material-ui/core";
import {Logo} from "../../../AppGlobal/AppGlobalComponents/Logo/Logo";
import {Redirect, Route, Switch} from "react-router";
import {AppLinks, LoginPageLinks} from "../../../AppGlobal/AppGlobalTypes/Links";
import {LogInFragment} from "./Components/LogInFragment/LogInFragment";
import {SignUpFragment} from "./Components/SignUpFragment/SignUpFragment";
import {useSelector} from "react-redux";
import {getIsAuthSelector} from "../../../Redux/App/App.selectors";


export const LoginPage = () => {
    const isAuth = useSelector(getIsAuthSelector);

    if(isAuth) return <Redirect to={AppLinks.AppRedirect}/>;

    return <div className={style.LoginPage}>
        <div className={style.logoWrapper}><Logo/></div>
        <Paper className={style.loginPageContainer}>
            <Switch>
                <Route exact path={AppLinks.LoginPage}
                       render={() => <Redirect to={LoginPageLinks.LogIn}/>}/>
                <Route path={LoginPageLinks.LogIn} render={() => <LogInFragment/>}/>
                <Route path={LoginPageLinks.SignUp} render={() => <SignUpFragment/>}/>
            </Switch>
        </Paper>
    </div>
};


