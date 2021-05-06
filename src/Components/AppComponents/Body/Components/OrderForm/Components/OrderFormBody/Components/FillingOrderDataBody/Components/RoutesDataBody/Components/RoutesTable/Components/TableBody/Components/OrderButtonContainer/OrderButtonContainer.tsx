import React, {FC, useCallback} from "react";
import style from "./OrderButtonContainer.module.scss"
import {OrderButton} from "../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {useDispatch} from "react-redux";
import {
    EditIndexActiveTravelPayload,
    EditOrderingStagesPayload,
    EditTravelInfoPayload
} from "../../../../../../../../../../../../../../../../../Redux/OrderForm/Types/Actions.types";
import {
    editIndexActiveStage,
    editIndexActiveTravel,
    editTravelInfo
} from "../../../../../../../../../../../../../../../../../Redux/OrderForm/OrderForm.reducer";
import {TravelInfoType} from "../../TableBody.types";
import {OrderButtonContainerProps} from "./OrderButtonContainer.types";

export const OrderButtonContainer:FC<OrderButtonContainerProps> = (props) => {
    const {startHourTravel, remainingNumberSeats, priceTravel, indexTravel, isNotCurrentDirection} = props;
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

    const editIndexActiveTravelAction = useCallback((indexActiveTravel: number) => {
        const action: EditIndexActiveTravelPayload = {indexActiveTravel};

        return dispatch(editIndexActiveTravel(action))
    }, [dispatch]);





    return <div className={style.OrderButtonContainer}>

        {/*<Typography component={'div'} className={style.numberSeats}>{props.remainingNumberSeats} мест</Typography>*/}
        <OrderButton
            onClickFunc={() => {
                editTravelInfoAction(travelInfoProps);
                editIndexActiveStageAction(1);
                editIndexActiveTravelAction(indexTravel);
            }}
            buttonText={"Выбрать"}
            size={"small"}
            disabled={isNotCurrentDirection} // Todo: Error - дизаблить если не выбрано направление
        />
    </div>
};

//Todo: не работает Badge
