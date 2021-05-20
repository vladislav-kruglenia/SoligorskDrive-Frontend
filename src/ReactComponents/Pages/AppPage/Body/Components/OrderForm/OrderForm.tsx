import React, {FC} from "react";
import style from "./OrderForm.module.scss"
import {OrderingStages} from "./Components/OrderingStages/OrderingStages";
import {OrderFormBody} from "./Components/OrderFormBody/OrderFormBody";
import {OrderFormProps, OrderFormType} from "./OrderForm.types";
import {DesignerTitle} from "./Components/DesignerTitle/DesignerTitle";

export const OrderForm:FC<OrderFormProps> = (props) => {
    const {typeComponent} = props;
    const DesignerTitleComponent = typeComponent === OrderFormType.Landing && <DesignerTitle/>;

    return <div className={style.OrderForm}>
        {DesignerTitleComponent}

        <OrderingStages/>

        <OrderFormBody typeComponent={typeComponent}/>

    </div>
};


