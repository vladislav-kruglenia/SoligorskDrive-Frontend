import React, {FC, useCallback} from "react";
import style from "./OrderButtonContainer.module.scss"
import {OrderButton} from "../../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {Typography} from "@material-ui/core";
import {OrderButtonContainerProps} from "../../TravelInfo.types";
import {useDispatch} from "react-redux";
import {
    EditOrderingStagesPayload,
    EditTravelInfoPayload
} from "../../../../../../../../../../../../../../../../../../Redux/OrderForm/Types/Actions.types";
import {editTravelInfo, editIndexActiveStage} from "../../../../../../../../../../../../../../../../../../Redux/OrderForm/OrderForm.reducer";
import {TravelInfoType} from "../../../../TableBody.types";

export const OrderButtonContainer:FC<OrderButtonContainerProps> = (props) => {
    const {startHourTravel, remainingNumberSeats, priceTravel} = props;
    const travelInfoProps: TravelInfoType = {startHourTravel, remainingNumberSeats, priceTravel};

    const dispatch = useDispatch();
    const editTravelInfoAction = useCallback((travelInfo: TravelInfoType) => {
        const action: EditTravelInfoPayload = travelInfo;

        return dispatch(editTravelInfo(action))
    }, [dispatch]);

    const editIndexActiveStageAction = useCallback((indexActiveStep: number) => {
        const action: EditOrderingStagesPayload = {indexActiveStep};

        return dispatch(editIndexActiveStage(action))
    }, [dispatch]);



    return <div className={style.OrderButtonContainer}>

        <Typography component={'div'} className={style.numberSeats}>{props.remainingNumberSeats} мест</Typography>
        <OrderButton
            onClickFunc={() => {
                editTravelInfoAction(travelInfoProps);
                editIndexActiveStageAction(1)
            }}
            buttonText={"Выбрать"}
            size={"small"}
            disabled={false} // Todo: Error - дизаблить если не выбрано направление
        />
    </div>
};

//Todo: не работает Badge
