import React, {FC} from "react";
import style from './OrderFormBody.module.scss'
import {OrderConfirmation} from "./Components/OrderConfirmation/OrderConfirmation";
import {FillingOrderDataBody} from "./Components/FillingOrderDataBody/FillingOrderDataBody";
import {Redirect, Route, Switch} from "react-router";
import {AppLinks} from "../../../../../../../AppGlobal/AppGlobalTypes/Links";
import {OrderFormBodyProps} from "./OrderFormBody.types";
import {useOrderFormLinks} from "../../OrderForm.hooks";
import {OrderFormType} from "../../OrderForm.types";
import {useMutationCreateOrder} from "./OrderFormBody.hooks";

export const OrderFormBody: FC<OrderFormBodyProps> = (props) => {
    const {typeComponent} = props;
    const {FillingOrderDataLink, OrderConfirmationLink} = useOrderFormLinks(typeComponent);
    const defaultPage = typeComponent === OrderFormType.App ? AppLinks.OrderForm : AppLinks.LandingPage;

    const {createOrder, mutationData} = useMutationCreateOrder();


    return <div className={style.OrderFormBody}>
        <Switch>
            <Route exact path={`${defaultPage}`}
                   render={() => <Redirect to={FillingOrderDataLink}/>}/>
            <Route path={FillingOrderDataLink} render={() => (
                <FillingOrderDataBody
                    typeComponent={typeComponent}
                    createOrderMutation={createOrder}
                />
            )}/>
            <Route path={OrderConfirmationLink} render={() => (
                <OrderConfirmation
                    createOrderMutationData={mutationData}
                    typeComponent={typeComponent}/>
            )}/>
        </Switch>
    </div>
};

