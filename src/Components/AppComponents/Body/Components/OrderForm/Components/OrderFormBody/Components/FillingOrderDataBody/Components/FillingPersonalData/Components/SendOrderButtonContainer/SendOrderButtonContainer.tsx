import React, {FC, useCallback} from "react";
import style from "./SendOrderButtonContainer.module.scss"
import {SendOrderButton} from "../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {SendOrderButtonContainerProps} from "./SendOrderButtonContainer.types";
import {useDispatch, useSelector} from "react-redux";
import {EditOrderingStagesPayload} from "../../../../../../../../../../../../../Redux/OrderForm/Types/Actions.types";
import {editIndexActiveStage} from "../../../../../../../../../../../../../Redux/OrderForm/OrderForm.reducer";
import {StepsIndexesEnum} from "../../../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {useOrderFormLinks} from "../../../../../../../../OrderForm.hooks";
import {getCreateOrderDataSelector} from "../../../../../../../../../../../../../Redux/OrderForm/Selectors/CreateOrderData.selector";

export const SendOrderButtonContainer:FC<SendOrderButtonContainerProps> = (props) => {
    const {OrderConfirmationLink} = useOrderFormLinks(props.typeComponent);
    const createOrderData = useSelector(getCreateOrderDataSelector);

    const dispatch = useDispatch();
    const editIndexActiveStageAction = useCallback((indexActiveStep: number) => {
        const action: EditOrderingStagesPayload = {indexActiveStep};

        return dispatch(editIndexActiveStage(action))
    }, [dispatch]);

    const onSendOrder = async () => {
        editIndexActiveStageAction(StepsIndexesEnum.OrderConfirmation);
        await props.createOrderMutation({variables: {createOrderData}})
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
