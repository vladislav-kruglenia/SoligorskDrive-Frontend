import React from "react";
import style from "./Body.module.scss"
import {Redirect, Route, Switch} from "react-router-dom";
import {AppLinks} from "../../AppGlobal/AppGlobalTypes/Links";
import {OrderForm} from "./Components/OrderForm/OrderForm";

export const Body = () => {
    return <div className={style.Body}>
        <Switch>
        <Route exact path='/'
               render={() => <Redirect to={AppLinks.OrderForm}/>}/>
        <Route path={AppLinks.OrderForm} render={()=><OrderForm/>}/>
    </Switch>
    </div>
};
