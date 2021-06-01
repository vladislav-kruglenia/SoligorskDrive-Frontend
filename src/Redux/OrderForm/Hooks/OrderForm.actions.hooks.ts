import {useDispatch} from "react-redux";
import {useCommonAction} from "../../../AppGlobal/AppGlobalHooks/GlobalHooks";
import {editDate, editDirection, editUserOrderData,
    editSelectedHaltData, editTravelInfo, editIndexActiveStage,
    editIndexActiveTravel, restartOrderForm,} from "../OrderForm.reducer"
import {
    EditDatePayload,
    EditDirectionPayload, EditIndexActiveTravelPayload, EditOrderingStagesPayload,
    EditSelectedHaltDataPayload, EditTravelInfoPayload,
    EditUserOrderDataPayload
} from "../Types/Actions.types";

export const useOrderFormReducerActions = () => {
    const dispatch = useDispatch();

    const editDateAction = useCommonAction<EditDatePayload>(editDate, dispatch);
    const editDirectionAction = useCommonAction<EditDirectionPayload>(editDirection, dispatch);
    const editUserOrderDataAction = useCommonAction<EditUserOrderDataPayload>(editUserOrderData, dispatch);
    const editSelectedHaltDataAction = useCommonAction<EditSelectedHaltDataPayload>(editSelectedHaltData, dispatch);
    const editTravelInfoAction = useCommonAction<EditTravelInfoPayload>(editTravelInfo, dispatch);
    const editIndexActiveStageAction = useCommonAction<EditOrderingStagesPayload>(editIndexActiveStage, dispatch);
    const editIndexActiveTravelAction = useCommonAction<EditIndexActiveTravelPayload>(editIndexActiveTravel, dispatch);
    const restartOrderFormAction = useCommonAction(restartOrderForm, dispatch);

    return {
        editDateAction, editDirectionAction, editUserOrderDataAction,
        editSelectedHaltDataAction, editTravelInfoAction, editIndexActiveStageAction,
        editIndexActiveTravelAction, restartOrderFormAction,
    }
};

