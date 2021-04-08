import React from "react";
import {Link} from "react-router-dom";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {AppLinks} from "../../AppGlobal/AppGlobalTypes/Links";
import {LogInButtonContainer, LogOutButtonContainer} from "./Components/LogButtons/LogButtons";

export const NavBar = () => {
    return <div>
        <List>
            <ListItem button component={Link} to={AppLinks.OrderForm}>
                <ListItemIcon> <SupervisorAccountIcon/> </ListItemIcon>
                <ListItemText primary={'Оформление заказа'}/>
            </ListItem>
            <ListItem button component={Link} to={AppLinks.OrdersHistory}>
                <ListItemIcon> <SupervisorAccountIcon/> </ListItemIcon>
                <ListItemText primary={'История заказов'}/>
            </ListItem>
            <ListItem button component={Link} to={AppLinks.UserProfile}>
                <ListItemIcon> <SupervisorAccountIcon/> </ListItemIcon>
                <ListItemText primary={'Мой профиль'}/>
            </ListItem>

        </List>
        <LogInButtonContainer/>
        <LogOutButtonContainer/>
    </div>
};

