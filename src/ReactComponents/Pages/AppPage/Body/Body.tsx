import React from "react";
import style from "./Body.module.scss"
import {Redirect, Route, Switch} from "react-router-dom";
import {AppLinks} from "../../../../AppGlobal/AppGlobalTypes/Links";
import {OrderForm} from "./Components/OrderForm/OrderForm";
import {OrdersHistory} from "./Components/OrdersHistory/OrdersHistory";
import {LoginPage} from "../../LoginPage/LoginPage";
import {UserProfile} from "./Components/UserProfile/UserProfile";
import {DispatcherPanel} from "./Components/DispatcherPanel/DispatcherPanel";
import {OrderFormType} from "./Components/OrderForm/OrderForm.types";

export const Body = () => {
    return <div className={style.Body}>
        <Switch>
            <Route exact path={AppLinks.AppRedirect}
                   render={() => <Redirect to={AppLinks.OrderForm}/>}/>
            <Route path={AppLinks.OrderForm} render={() => <OrderForm typeComponent={OrderFormType.App}/>}/>
            <Route path={AppLinks.OrdersHistory} render={() => <OrdersHistory/>}/>
            <Route path={AppLinks.LoginPage} render={() => <LoginPage/>}/>
            <Route path={AppLinks.UserProfile} render={() => <UserProfile/>}/>
            <Route path={AppLinks.DispatcherPanel} render={() => <DispatcherPanel/>}/>
        </Switch>
    </div>
};


