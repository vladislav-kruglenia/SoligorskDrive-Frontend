import React from "react";
import {Redirect, Route, Switch} from "react-router";
import {AppLinks} from "../../AppGlobal/AppGlobalTypes/Links";
import {AppPage} from "../Pages/AppPage/AppPage";
import {LandingPage} from "../Pages/LandingPage/LandingPage";
import {LoginPage} from "../Pages/LoginPage/LoginPage";

export function AppRouter() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/'
                       render={() => <Redirect to={AppLinks.AppRedirect}/>}/>

                <Route path={AppLinks.AppRedirect} render={() => <AppPage/>}/>
                <Route path={AppLinks.LandingPage} render={() => <LandingPage/>}/>
                <Route path={AppLinks.LandingPage} render={() => <LandingPage/>}/>
                <Route path={AppLinks.LoginPage} render={() => <LoginPage/>}/>
            </Switch>
        </div>
    );
}