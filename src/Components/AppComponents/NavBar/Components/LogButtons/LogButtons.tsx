import React, {FC} from "react";
import style from "./LogButtons.module.scss"
import {NavBarButton} from "../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {AppLinks} from "../../../../../AppGlobal/AppGlobalTypes/Links";
import {LogButtonsProps} from "./LogButtons.types";

export const LogOutButtonContainer:FC<LogButtonsProps> = (props) => {
    return <div className={style.LogButtonContainer}>
        <NavBarButton
            link={AppLinks.LoginPage}
            buttonText={'Выйти'}
            color={"secondary"}
            onClickFunc={() => {
                props.editCurrentPage()
            }}
        />
    </div>
};
export const LogInButtonContainer:FC<LogButtonsProps> = (props) => {
    return <div className={style.LogButtonContainer}>
        <NavBarButton
            link={AppLinks.LoginPage}
            buttonText={'Войти'}
            color={"primary"}
            onClickFunc={() => {
                props.editCurrentPage()
            }}
        />
    </div>
};