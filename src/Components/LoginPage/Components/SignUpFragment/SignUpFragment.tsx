import React from "react";
import {Typography} from "@material-ui/core";
import {SignUpForm} from "../SignUpForm/SignUpForm";

export const SignUpFragment = () => {
    return <React.Fragment>
        <Typography variant={'h4'}>Регистрация</Typography>
        <SignUpForm/>
    </React.Fragment>
};