import React from "react";
import {Typography} from "@material-ui/core";
import {LoginForm} from "../LoginForm/LoginForm";

export const LogInFragment = () => {
    return <React.Fragment>
        <Typography variant={'h4'}>Вход в приложение</Typography>
        <LoginForm/>
    </React.Fragment>
};