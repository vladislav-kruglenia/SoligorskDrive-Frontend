import React from "react";
import {List} from "@material-ui/core";
import {LogOutButtonContainer} from "./Components/LogButtons/LogButtons";
import {useNavBarPagesItems} from "./NavBar.hooks";


export const NavBar = () => {
    // const {editCurrentPageAction} = useAppReducerActions();
    const navBarPagesItems = useNavBarPagesItems();

    return <div>
        <List>{navBarPagesItems}</List>

        <LogOutButtonContainer editCurrentPage={() => {}}/>
    </div>
};


