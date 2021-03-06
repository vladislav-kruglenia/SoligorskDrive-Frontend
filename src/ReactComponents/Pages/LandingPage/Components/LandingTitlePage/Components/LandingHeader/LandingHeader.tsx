import React, {useCallback} from "react";
import style from "./LandingHeader.module.scss"
import {useDispatch} from "react-redux";
import {EditCurrentPagePayload} from "../../../../../../../Redux/App/Types/Actions.types";
import {editCurrentPage} from "../../../../../../../Redux/App/App.reducer";
import {LinkButton} from "../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {AppLinks, LoginPageLinks} from "../../../../../../../AppGlobal/AppGlobalTypes/Links";

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
                color={"primary"}
                buttonText={'Вход'}
                onClickFunc={() => {
                    editCurrentPageAction(-1, "Вход на сайт")
                }}
                link={AppLinks.LoginPage}
            />
            <LinkButton
                size={"large"}
                color={"primary"}
                buttonText={'Регистрация'}
                onClickFunc={() => {
                }}
                link={LoginPageLinks.SignUp}
            />
        </div>
    </div>
};