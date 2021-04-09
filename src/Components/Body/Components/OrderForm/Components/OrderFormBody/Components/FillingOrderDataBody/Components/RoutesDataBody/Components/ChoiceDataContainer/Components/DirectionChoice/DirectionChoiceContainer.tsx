import React, {useCallback} from "react";
import style from "./DirectionChoice.module.scss"
import {DirectionsEnum} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {useDispatch, useSelector} from "react-redux";
import {getDirectionSelector} from "../../../../../../../../../../../../../../Redux/OrderForm/OrderForm.selectors";
import {EditDirectionPayload} from "../../../../../../../../../../../../../../Redux/OrderForm/Types/Actions.types";
import {editDirection} from "../../../../../../../../../../../../../../Redux/OrderForm/OrderForm.reducer";
import {DirectionChoice} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/Selectors/DirectionChoice/DirectionChoice";

export const DirectionChoiceContainer = () => {
    const currentDirection = useSelector(getDirectionSelector);

    const dispatch = useDispatch();
    const editDirectionAction = useCallback((direction: DirectionsEnum) => {
        const action: EditDirectionPayload = {direction};
        return dispatch(editDirection(action))
    }, [dispatch]);


    return <div className={style.DirectionChoice}>
        <DirectionChoice
            currentDirection={currentDirection}
            editDirectionAction={editDirectionAction}
        />
    </div>
};





