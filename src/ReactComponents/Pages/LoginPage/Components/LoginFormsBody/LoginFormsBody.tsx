import React from "react";
import style from "./LoginFormsBody.module.scss"
import {Paper} from "@material-ui/core";
import {Redirect, Route, Switch} from "react-router";
import {AppLinks, LoginPageLinks} from "../../../../../AppGlobal/AppGlobalTypes/Links";
import {LogInFragment} from "./Components/LogInFragment/LogInFragment";
import {SignUpFragment} from "./Components/SignUpFragment/SignUpFragment";

export const LoginFormsBody = () => {
    return <Paper className={style.LoginFormsBody}>
        <Switch>
            <Route exact path={AppLinks.LoginPage}
                   render={() => <Redirect to={LoginPageLinks.LogIn}/>}/>
            <Route path={LoginPageLinks.LogIn} render={() => <LogInFragment/>}/>
            <Route path={LoginPageLinks.SignUp} render={() => <SignUpFragment/>}/>
        </Switch>
    </Paper>
};