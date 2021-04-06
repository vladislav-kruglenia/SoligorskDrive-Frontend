import React, {FC, useCallback} from "react";
import style from "./SendOrderButtonContainer.module.scss"
import {SendOrderButton} from "../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {SendOrderButtonContainerProps} from "./SendOrderButtonContainer.types";
import {useDispatch} from "react-redux";
import {EditOrderingStagesPayload} from "../../../../../../../../../../../../Redux/OrderForm/Types/Actions.types";
import {editIndexActiveStage} from "../../../../../../../../../../../../Redux/OrderForm/OrderForm.reducer";
import {StepsIndexesEnum} from "../../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";

export const SendOrderButtonContainer:FC<SendOrderButtonContainerProps> = (props) => {
    const dispatch = useDispatch();
    const editIndexActiveStageAction = useCallback((indexActiveStep: number) => {
        const action: EditOrderingStagesPayload = {indexActiveStep};

        return dispatch(editIndexActiveStage(action))
    }, [dispatch]);

    const onSendOrder = () => {
        editIndexActiveStageAction(StepsIndexesEnum.OrderConfirmation)
    };

    return <div className={style.SendOrderButtonContainer}>
        <SendOrderButton
            buttonText={'Заказать'}
            disabled={props.isDisabledSendOrderButton}
            size={"large"}
            onClickFunc={()=> onSendOrder()}
        />
    </div>
};
