import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {AppLinks} from "../../AppGlobal/AppGlobalTypes/Links";
import {OrderForm} from "./Components/OrderForm";

export const Body = () => {
    return <div>
        <Switch>
            <Route exact path='/'
                   render={() => <Redirect to={AppLinks.OrderForm}/>}/>
            <Route path={AppLinks.OrderForm} render={()=><OrderForm/>}/>
        </Switch>
    </div>
};
