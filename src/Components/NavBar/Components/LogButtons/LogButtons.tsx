import React from "react";
import style from "./LogButtons.module.scss"
import {NavBarButton} from "../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {AppLinks} from "../../../../AppGlobal/AppGlobalTypes/Links";

export const LogOutButtonContainer = () => {
    return <div className={style.LogButtonContainer}>
        <NavBarButton
            link={AppLinks.LoginPage}
            buttonText={'Выйти'}
            color={"secondary"}
            onClickFunc={() => {
            }}
        />
    </div>
};
export const LogInButtonContainer = () => {
    return <div className={style.LogButtonContainer}>
        <NavBarButton
            link={AppLinks.LoginPage}
            buttonText={'Войти'}
            color={"primary"}
            onClickFunc={() => {
            }}
        />
    </div>
};