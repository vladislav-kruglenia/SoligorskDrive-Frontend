import React, {FC} from "react";
import {useTheme} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from "@material-ui/core/Divider";
import {DrawerComponentProps} from "./DrawerComponent.types";

export const DrawerComponent: FC<DrawerComponentProps> = ({classes, ...props}) => {
    const theme = useTheme();
    const handleDrawerClose = () => {
        props.setOpen(false);
    };

    return <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.isOpen}
        classes={{
            paper: classes.drawerPaper,
        }}
    >
        <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </IconButton>
        </div>
        <Divider/>
        {props.NavBar}
    </Drawer>
};