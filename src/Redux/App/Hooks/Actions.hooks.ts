import {useDispatch} from "react-redux";
import {InitializePayload, LoginPayload} from "../Types/Actions.types";
import {initializeApp, logIn, logOut} from "../App.reducer";
import {useCommonAction} from "../../../AppGlobal/AppGlobalHooks/GlobalHooks";

export const useAppReducerActions = () => {
    const dispatch = useDispatch();

    const initializeAppAction = useCommonAction<InitializePayload>(initializeApp, dispatch);
    const loginAction = useCommonAction<LoginPayload>(logIn, dispatch);
    const logOutAction = useCommonAction(logOut, dispatch);

    return {initializeAppAction, loginAction, logOutAction}
};

