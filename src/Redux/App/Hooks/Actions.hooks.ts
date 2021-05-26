import {useDispatch} from "react-redux";
import {EditCurrentPagePayload, EditUserNamePayload, InitializePayload, LoginPayload} from "../Types/Actions.types";
import {initializeApp, logIn, logOut, editUserName, editCurrentPage} from "../App.reducer";
import {useCommonAction} from "../../../AppGlobal/AppGlobalHooks/GlobalHooks";

export const useAppReducerActions = () => {
    const dispatch = useDispatch();

    const initializeAppAction = useCommonAction<InitializePayload>(initializeApp, dispatch);
    const loginAction = useCommonAction<LoginPayload>(logIn, dispatch);
    const logOutAction = useCommonAction(logOut, dispatch);
    const editUserNameAction = useCommonAction<EditUserNamePayload>(editUserName, dispatch);
    const editCurrentPageAction = useCommonAction<EditCurrentPagePayload>(editCurrentPage, dispatch);

    return {initializeAppAction, loginAction, logOutAction, editUserNameAction, editCurrentPageAction}
};

