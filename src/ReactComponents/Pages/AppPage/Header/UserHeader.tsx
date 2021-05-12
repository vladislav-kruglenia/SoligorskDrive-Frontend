import React, {useCallback} from "react";
import style from "./UserHeader.module.scss"
import Typography from "@material-ui/core/Typography";
import logo from "../../../../Img/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPageDataSelector} from "../../../../Redux/App/App.selectors";
import {Logo} from "../../../../AppGlobal/AppGlobalComponents/Logo/Logo";
import {NavLink} from "react-router-dom";
import {AppLinks} from "../../../../AppGlobal/AppGlobalTypes/Links";
import {EditCurrentPagePayload} from "../../../../Redux/App/Types/Actions.types";
import {editCurrentPage} from "../../../../Redux/App/App.reducer";

export const UserHeader = () => {
    const {currentPageName} = useSelector(getCurrentPageDataSelector);
    const dispatch = useDispatch();
    const editCurrentPageAction = useCallback((indexCurrentPage: number, currentPageName: string) => {
        const payload: EditCurrentPagePayload = {indexCurrentPage, currentPageName};
        dispatch(editCurrentPage(payload))
    }, [dispatch]);

    return <div className={style.UserHeader}>
        <NavLink to={AppLinks.UserProfile} onClick={() => editCurrentPageAction(2, 'Настройки профиля')}>
            <Logo/>
        </NavLink>

        <Typography variant="h6" noWrap className={style.headerTitle}>
            {currentPageName}
        </Typography>
    </div>
};

export const LogoImg = () => {
    return <div className={style.Logo}>
        <img src={logo} alt=""/>
    </div>
};

