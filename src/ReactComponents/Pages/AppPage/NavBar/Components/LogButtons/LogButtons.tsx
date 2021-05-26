import React, {FC} from "react";
import style from "./LogButtons.module.scss"
import {NavBarButton} from "../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {LogButtonsProps} from "./LogButtons.types";
import {useMutationLogOut} from "./LogButtons.hooks";
import {useAppReducerActions} from "../../../../../../Redux/App/Hooks/Actions.hooks";

export const LogOutButtonContainer:FC<LogButtonsProps> = (props) => {
    const {mutationCallback} = useMutationLogOut();
    //Todo: добавить всплывающие уведомления о успешно выполненной мутации

    const {logOutAction} = useAppReducerActions();

    return <div className={style.LogButtonContainer}>
        <NavBarButton
            buttonText={'Выйти'}
            color={"secondary"}
            size={"large"}
            onClickFunc={async () => {
                await mutationCallback();
                props.editCurrentPage();
                logOutAction({})
            }}
        />
    </div>
};
