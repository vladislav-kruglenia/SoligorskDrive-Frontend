import React from "react";
import style from "./LandingOrderForm.module.scss"
import {ElementsId} from "../../../../AppGlobal/AppGlobalTypes/ElementsId";
import {OrderForm} from "../../../Body/Components/OrderForm/OrderForm";
import {OrderFormType} from "../../../Body/Components/OrderForm/OrderForm.types";

export const LandingOrderForm = () => {
    return <div id={ElementsId.LandingOrderForm} className={style.LandingOrderForm}>
        <OrderForm typeComponent={OrderFormType.Landing}/>
    </div>
};