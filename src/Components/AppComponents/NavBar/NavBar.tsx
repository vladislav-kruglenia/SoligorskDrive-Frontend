import React, {ReactNode, ReactNodeArray, useCallback, useMemo} from "react";
import {Link} from "react-router-dom";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {LogOutButtonContainer} from "./Components/LogButtons/LogButtons";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPageDataSelector, getNavBarPagesSelector} from "../../../Redux/App/App.selectors";
import {AppPage} from "../../../Redux/App/Types/App.types";
import {EditCurrentPagePayload} from "../../../Redux/App/Types/Actions.types";
import {editCurrentPage} from "../../../Redux/App/App.reducer";

export const NavBar = () => {
    const navBarPages = useSelector(getNavBarPagesSelector);
    const {indexCurrentPage} = useSelector(getCurrentPageDataSelector);

    const dispatch = useDispatch();
    const editCurrentPageAction = useCallback((indexCurrentPage: number, currentPageName: string) => {
        const payload: EditCurrentPagePayload = {indexCurrentPage, currentPageName};
        dispatch(editCurrentPage(payload))
    }, [dispatch]);

    const navBarPagesItems = useMemo<ReactNodeArray>(() => {
        return navBarPages.map<ReactNode>((page: AppPage, index) => (
            <ListItem key={page.pageName} button component={Link} to={page.pageLink}
                      selected={index === indexCurrentPage}
                      onClick={() => editCurrentPageAction(index, page.pageName)}
            >
                <ListItemIcon> <SupervisorAccountIcon/> </ListItemIcon>
                <ListItemText primary={page.pageName}/>
            </ListItem>
        ))
    }, [navBarPages, indexCurrentPage, editCurrentPageAction]);

    return <div>
        <List>
            {navBarPagesItems}
        </List>

        <LogOutButtonContainer editCurrentPage={() => editCurrentPageAction(-1, "Вход на сайт")}/>
        <div><img src="../../../img/logo.png" alt=""/></div>
    </div>
};

