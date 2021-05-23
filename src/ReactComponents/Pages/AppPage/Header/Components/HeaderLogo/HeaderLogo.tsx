import {useDispatch} from "react-redux";
import React, {useCallback} from "react";
import {EditCurrentPagePayload} from "../../../../../../Redux/App/Types/Actions.types";
import {editCurrentPage} from "../../../../../../Redux/App/App.reducer";
import {NavLink} from "react-router-dom";
import {AppLinks} from "../../../../../../AppGlobal/AppGlobalTypes/Links";
import {Logo} from "../../../../../../AppGlobal/AppGlobalComponents/Logo/Logo";

export const HeaderLogo = () => {
    const dispatch = useDispatch();
    const editCurrentPageAction = useCallback((payload: EditCurrentPagePayload) => {
        dispatch(editCurrentPage(payload))
    }, [dispatch]);

    const onEditCurrentPage = () => editCurrentPageAction({
        indexCurrentPage: 0,
        currentPageName: 'Мой профиль'
    });

    return <React.Fragment>
        <NavLink to={AppLinks.UserProfile} onClick={() => {
            onEditCurrentPage();
        }}>
            <Logo/>
        </NavLink>
    </React.Fragment>
};