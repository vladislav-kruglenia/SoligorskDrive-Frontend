import {useDispatch, useSelector} from "react-redux";
import {
    getDateSelector,
    getDirectionSelector,
    getSortOrdersSelector
} from "../../../../../../../Redux/DispatcherPanel/DispatcherPanel.selectors";
import {useCallback} from "react";
import {SortOrdersEnum} from "../../../../../../../Redux/DispatcherPanel/Types/DispatcherPanel.types";
import {
    EditCurrentDatePayload,
    EditCurrentDirectionPayload,
    EditSortByValuePayload
} from "../../../../../../../Redux/DispatcherPanel/Types/Actions.types";
import {
    editCurrentDate,
    editCurrentDirection,
    editSortByValue
} from "../../../../../../../Redux/DispatcherPanel/DispatcherPanel.reducer";
import {DirectionsEnum} from "../../../../../../../AppGlobal/AppGlobalTypes/Enums";

export const useSearchParametersState = () => {
    const currentDirection = useSelector(getDirectionSelector);
    const currentDate = useSelector(getDateSelector);
    const sortOrders = useSelector(getSortOrdersSelector);

    return {currentDirection, currentDate, sortOrders}
};


export const useSearchParametersActions = () => {
    const dispatch = useDispatch();

    const editSortByValueAction = useCallback((sortType: SortOrdersEnum) => {
        const action: EditSortByValuePayload = {sortType};
        dispatch(editSortByValue(action))
    }, [dispatch]);
    const editCurrentDirectionAction = useCallback((direction: DirectionsEnum) => {
        const action: EditCurrentDirectionPayload = {direction};
        dispatch(editCurrentDirection(action))
    }, [dispatch]);

    const editCurrentDateAction = useCallback((date: Date) => {
        const action: EditCurrentDatePayload = {date};
        dispatch(editCurrentDate(action))
    }, [dispatch]);

    return {editSortByValueAction, editCurrentDirectionAction, editCurrentDateAction}
};

