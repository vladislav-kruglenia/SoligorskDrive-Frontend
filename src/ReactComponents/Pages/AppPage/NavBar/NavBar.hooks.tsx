import React, {ReactNode, ReactNodeArray, useMemo} from "react";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {AppPage} from "../../../../Redux/App/Types/App.types";
import {ListItemFragmentMemo} from "./Components/ListItemFragment/ListItemFragment";
import {useSelector} from "react-redux";
import {getCurrentPageDataSelector, getNavBarPagesSelector} from "../../../../Redux/App/App.selectors";
import {useAppReducerActions} from "../../../../Redux/App/Hooks/Actions.hooks";

export const useLinksIconsNavbar = () => {
    return useMemo(() => [
        <SupervisorAccountIcon/>,
        <ListAltIcon/>,
        <DashboardIcon/>
    ], []);
};

export const useNavBarPagesItems = () => {
    const navBarPages = useSelector(getNavBarPagesSelector);
    const {indexCurrentPage} = useSelector(getCurrentPageDataSelector);
    const itemsIcons = useLinksIconsNavbar();
    const {editCurrentPageAction} = useAppReducerActions();

    return useMemo<ReactNodeArray>(() => {
        return navBarPages.map<ReactNode>((page: AppPage, index) => (
            <ListItemFragmentMemo
                index={index}
                page={page}
                indexCurrentPage={indexCurrentPage}
                itemsIcons={itemsIcons}
                editCurrentPageAction={dto => editCurrentPageAction(dto)}
            />
        ))
    }, [indexCurrentPage, editCurrentPageAction, itemsIcons, navBarPages]);
};