import React, {FC} from "react";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import {AppBarComponentProps} from "./AppBarComponent.types";

export const AppBarComponent: FC<AppBarComponentProps> = ({classes, ...props}) => {
    const handleDrawerOpen = () => {
        props.setOpen(true);
    };

    return <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
            [classes.appBarShift]: props.isOpen,
        })}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, props.isOpen && classes.hide)}
            >
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" noWrap>
                Persistent drawer
            </Typography>
        </Toolbar>
    </AppBar>
};