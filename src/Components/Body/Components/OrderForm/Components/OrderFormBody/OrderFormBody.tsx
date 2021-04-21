import React from "react";
import style from './OrderFormBody.module.scss'
import {OrderConfirmation} from "./Components/OrderConfirmation/OrderConfirmation";
import {FillingOrderDataBody} from "./Components/FillingOrderDataBody/FillingOrderDataBody";
import {Redirect, Route, Switch} from "react-router";
import {AppLinks, OrderFormLinks} from "../../../../../../AppGlobal/AppGlobalTypes/Links";

export const OrderFormBody = () => {
    return <div className={style.OrderFormBody}>
        <Switch>
            <Route exact path={`${AppLinks.OrderForm}`}
                   render={() => <Redirect to={OrderFormLinks.FillingOrderData}/>}/>
            <Route path={`${OrderFormLinks.FillingOrderData}`} render={() => <FillingOrderDataBody/>}/>
            <Route path={`${OrderFormLinks.OrderConfirmation}`} render={() => <OrderConfirmation/>}/>
        </Switch>
            {/*<div>Преимущества</div>*/}
    </div>
};

// StepsIndexesEnum

