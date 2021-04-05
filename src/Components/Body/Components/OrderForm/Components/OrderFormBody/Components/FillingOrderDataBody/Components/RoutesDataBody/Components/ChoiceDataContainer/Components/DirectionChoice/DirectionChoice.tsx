import React, {FC, useCallback} from "react";
import style from "./DirectionChoice.module.scss"
import {DirectionsEnum} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {DirectionChoiceProps} from "./DirectionChoice.types";
import {NativeSelectComponent} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/NativeSelect/NativeSelectComponent";
import {useDispatch, useSelector} from "react-redux";
import {getDirectionSelector} from "../../../../../../../../../../../../../../Redux/OrderForm/OrderForm.selectors";
import {EditDirectionPayload} from "../../../../../../../../../../../../../../Redux/OrderForm/Types/Actions.types";
import {editDirection} from "../../../../../../../../../../../../../../Redux/OrderForm/OrderForm.reducer";

export const DirectionChoice:FC<DirectionChoiceProps> = () => {
    const currentDirection = useSelector(getDirectionSelector);

    const dispatch = useDispatch();
    const editDirectionAction = useCallback((direction: DirectionsEnum) => {
        const action: EditDirectionPayload = {direction};
        return dispatch(editDirection(action))
    }, [dispatch]);

    const OptionsArray = [
        <option key={DirectionsEnum.toSoligorsk} value={DirectionsEnum.toSoligorsk}>Минск - Солигорск</option>,
        <option key={DirectionsEnum.toMinsk} value={DirectionsEnum.toMinsk}>Солигорск - Минск</option>,
    ];

    return <div className={style.DirectionChoice}>
        <NativeSelectComponent
            labelText={"Направление рейса"}
            errorText={"Направление рейса не выбрано"}
            OptionsArray={OptionsArray}
            editOptionValue={value => editDirectionAction(value as DirectionsEnum)}
            optionValue={currentDirection}
        />
    </div>
};


