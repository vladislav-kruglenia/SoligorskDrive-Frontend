import React from "react";
import {Typography} from "@material-ui/core";
import {LoginForm} from "../LoginForm/LoginForm";
import {useMutation} from "@apollo/client";
import {LogIn} from "../../../../GraphQLServer/Mutations/LogIn/LogIn.gql";
import {LogInVars} from "../../../../GraphQLServer/Mutations/LogIn/Types/LogInVar.types";
import {LogInResType} from "../../../../GraphQLServer/Mutations/LogIn/Types/LogInRes.types";
import {Preloader} from "../../../../AppGlobal/AppGlobalComponents/MaterialUI/Preloader/Preloader";
import {Redirect} from "react-router";
import {AppLinks} from "../../../../AppGlobal/AppGlobalTypes/Links";

export const LogInFragment = () => {
    const [logInMutation, {data, loading, error}] = useMutation<LogInResType, LogInVars>(LogIn);

    const preloader = loading && <Preloader/>;
    if(data?.login.isAuth) return <Redirect to={AppLinks.AppRedirect}/>;

    return <React.Fragment>
        <Typography variant={'h4'}>Вход в приложение</Typography>
        <LoginForm
            loginMutation={logInMutation}
            serverError={error}
        />
        {preloader}
    </React.Fragment>
};