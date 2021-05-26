import React, {ReactNode, ReactNodeArray, useMemo} from "react";
import {Link} from "react-router-dom";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {LogOutButtonContainer} from "./Components/LogButtons/LogButtons";
import {useSelector} from "react-redux";
import {getCurrentPageDataSelector, getNavBarPagesSelector} from "../../../../Redux/App/App.selectors";
import {AppPage} from "../../../../Redux/App/Types/App.types";
import {useAppReducerActions} from "../../../../Redux/App/Hooks/Actions.hooks";

export const NavBar = () => {
    const navBarPages = useSelector(getNavBarPagesSelector);
    const {indexCurrentPage} = useSelector(getCurrentPageDataSelector);
    const {editCurrentPageAction} = useAppReducerActions();

    const navBarPagesItems = useMemo<ReactNodeArray>(() => {
        return navBarPages.map<ReactNode>((page: AppPage, index) => (
            <ListItem key={page.pageName} button component={Link} to={page.pageLink}
                      selected={index === indexCurrentPage}
                      onClick={() => editCurrentPageAction({currentPageName: page.pageName, indexCurrentPage: index })}
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

        <LogOutButtonContainer
            editCurrentPage={() => editCurrentPageAction({indexCurrentPage: -1, currentPageName: "Вход на сайт"})}
        />
    </div>
};

