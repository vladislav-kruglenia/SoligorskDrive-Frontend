import React from 'react';
import style from './HeaderDrawer.module.scss'
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from "@material-ui/core";
import {NavBar} from "../NavBar/NavBar";
import {UserHeader} from "../Header/UserHeader";

let HeaderDrawer = () => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor: 'left', open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({[anchor]: open});
    };

    const list = (anchor: 'left') => (
        <div
            className={style.list}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <NavBar/>
        </div>
    );

    return <div className={style.headerContainer}>
        <IconButton color={"default"} onClick={toggleDrawer('left', true)} className={style.navBarButton}>
            <MenuIcon htmlColor={"#ffffff"}/>
        </IconButton>

        <UserHeader/>

        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
        </Drawer>
    </div>;
};

export default HeaderDrawer



