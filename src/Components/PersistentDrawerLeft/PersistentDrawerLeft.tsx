import React, { FC } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useStyles} from "./MaterialStyles";
import {AppBarComponent} from "./Components/AppBarComponent/AppBarComponent";
import {DrawerComponent} from "./Components/DrawerComponent/DrawerComponent";
import {PersistentDrawerLeftProps} from "./PersistentDrawerLeft.types";

/*
    Компонента была скопирована из официальной документации MaterialUI и раздроблена на более мелкие части
    для лучшей читаемости.
*/


const PersistentDrawerLeft:FC<PersistentDrawerLeftProps> = (props) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/*HEADER*/}
            <AppBarComponent setOpen={setOpen} isOpen={open} classes={classes}/>

            {/*NAVBAR*/}
            <DrawerComponent NavBar={props.NavBar} setOpen={setOpen} classes={classes} isOpen={open}/>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {props.Body}
            </main>
        </div>
    );
};

export default PersistentDrawerLeft




/*
import React from 'react'
import style from './PersistentDrawerLeft.module.scss'

export const PersistentDrawerLeft = () => {
    return <div className={style.PersistentDrawerLeft}/>
};
*/
