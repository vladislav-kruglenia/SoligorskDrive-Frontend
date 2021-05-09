import React from "react";
import style from "./UserProfileData.module.scss"
import {Divider, Paper, Typography} from "@material-ui/core";
import {MainUserProfileData} from "./UserProfileData.types";
import {useQueryUserProfileData} from "./UserProfileData.hooks";

export const UserProfileData = () => {
    const {RenderDataComponent} = useQueryUserProfileData();

    return <Paper className={style.UserProfileData}>
        <Typography variant={'h4'}>Мои данные</Typography>
        <Divider/>
        {RenderDataComponent}
    </Paper>
};


const userProfileData: MainUserProfileData = {
    userName: "Антон Петрович",
    userLogin: "32334309anton@gmail.com",
    userNumberPhone: "+375293817500",
};

