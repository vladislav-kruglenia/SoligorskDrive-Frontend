import React, {FC} from "react";
import style from "./SendOrderButtonContainer.module.scss"
import {SendOrderButton} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {SendOrderButtonContainerProps} from "./SendOrderButtonContainer.types";
import {useSelector} from "react-redux";
import {StepsIndexesEnum} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {useOrderFormLinks} from "../../../../../../../../OrderForm.hooks";
import {getCreateOrderDataSelector} from "../../../../../../../../../../../../../../Redux/OrderForm/Selectors/CreateOrderData.selector";
import {useOrderFormReducerActions} from "../../../../../../../../../../../../../../Redux/OrderForm/Hooks/OrderForm.actions.hooks";

export const SendOrderButtonContainer:FC<SendOrderButtonContainerProps> = (props) => {
    const {OrderConfirmationLink} = useOrderFormLinks(props.typeComponent);
    const createOrderData = useSelector(getCreateOrderDataSelector);
    const {editIndexActiveStageAction} = useOrderFormReducerActions();


    const onSendOrder = async () => {
        await props.createOrderMutation({variables: {createOrderData}});
        console.log(createOrderData);
        editIndexActiveStageAction({indexActiveStep: StepsIndexesEnum.OrderConfirmation});
    };

    return <div className={style.SendOrderButtonContainer}>
        <SendOrderButton
            link={OrderConfirmationLink}
            buttonText={'Заказать'}
            disabled={props.isDisabledSendOrderButton}
            size={"large"}
            onClickFunc={() => onSendOrder()}
        />
    </div>
};
