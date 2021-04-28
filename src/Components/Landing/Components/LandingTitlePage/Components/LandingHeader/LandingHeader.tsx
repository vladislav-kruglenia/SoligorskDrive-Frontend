import React, {useCallback} from "react";
import style from "./LandingHeader.module.scss"
import {useDispatch} from "react-redux";
import {EditCurrentPagePayload} from "../../../../../../Redux/App/Types/Actions.types";
import {editCurrentPage} from "../../../../../../Redux/App/App.reducer";
import {LinkButton} from "../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {AppLinks} from "../../../../../../AppGlobal/AppGlobalTypes/Links";

export const LandingHeader = () => {
    const dispatch = useDispatch();
    const editCurrentPageAction = useCallback((indexCurrentPage: number, currentPageName: string) => {
        const payload: EditCurrentPagePayload = {indexCurrentPage, currentPageName};
        dispatch(editCurrentPage(payload))
    }, [dispatch]);

    return <div className={style.LandingHeader}>
        <div className={style.headerButtons}>
            <LinkButton
                size={"large"}
                buttonText={'Вход'}
                onClickFunc={() => {
                    editCurrentPageAction(-1, "Вход на сайт")
                }}
                link={AppLinks.LoginPage}
                color={"secondary"}
            />
            <LinkButton
                size={"large"}
                buttonText={'Регистрация'}
                onClickFunc={() => {
                }}
                link={AppLinks.LandingPage}
                color={"secondary"}
            />
        </div>
    </div>
};