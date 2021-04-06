import React from "react";
import style from './OrderFormBody.module.scss'
import {OrderConfirmation} from "./Components/OrderConfirmation/OrderConfirmation";
import {FillingOrderDataBody} from "./Components/FillingOrderDataBody/FillingOrderDataBody";
import {Redirect, Route, Switch} from "react-router";
import {AppLinks, OrderFormLinks} from "../../../../../../AppGlobal/AppGlobalTypes/Links";
import {useSelector} from "react-redux";
import {getOrderStepsSelector} from "../../../../../../Redux/OrderForm/OrderForm.selectors";
import {StepsIndexesEnum} from "../../../../../../AppGlobal/AppGlobalTypes/Enums";

export const OrderFormBody = () => {

    const {indexActiveStep} = useSelector(getOrderStepsSelector);

    if(indexActiveStep === StepsIndexesEnum.OrderConfirmation) return <OrderConfirmation/>;


    return <div className={style.OrderFormBody}>
        <Switch>
            <Route exact path={`${AppLinks.OrderForm}`}
                   render={() => <Redirect to={OrderFormLinks.FillingOrderData}/>}/>
            <Route path={`${OrderFormLinks.FillingOrderData}`} render={() => <FillingOrderDataBody/>}/>
            <Route path={`${OrderFormLinks.OrderConfirmation}`} render={() => <OrderConfirmation/>}/>
        </Switch>
    </div>
};

// StepsIndexesEnum

