import React, {FC} from "react";
import style from "./FillingOrderDataBody.module.scss"
import {FillingPersonalData} from "./Components/FillingPersonalData/FillingPersonalData";
import {RoutesDataBody} from "./Components/RoutesDataBody/RoutesDataBody";
import {useSelector} from "react-redux";
import {
    getIndexActiveTravelSelector,
    getOrderStepsSelector
} from "../../../../../../../../../../Redux/OrderForm/Selectors/OrderForm.selectors";
import {FillingOrderDataBodyProps} from "./FillingOrderDataBody.types";
import {StepsIndexesEnum} from "../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {Redirect} from "react-router";
import {useOrderFormLinks} from "../../../../OrderForm.hooks";

export const FillingOrderDataBody:FC<FillingOrderDataBodyProps> = (props) => {
    const {typeComponent} = props;
    const {OrderConfirmationLink} = useOrderFormLinks(typeComponent);
    const {indexActiveStep} = useSelector(getOrderStepsSelector);
    const indexActiveTravel = useSelector(getIndexActiveTravelSelector);

    if(indexActiveStep === StepsIndexesEnum.OrderConfirmation) {
        return <Redirect to={OrderConfirmationLink}/>
    }

    const isFillingPersonalData = indexActiveTravel !== null && <FillingPersonalData
        typeComponent={typeComponent}
        createOrderMutation={props.createOrderMutation}
    />;

    return <div className={style.FillingOrderDataBody}>
        <RoutesDataBody/>

        {isFillingPersonalData}
    </div>
};

