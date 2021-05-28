import React from "react";
import {Typography} from "@material-ui/core";
import {LoginForm} from "../LoginForm/LoginForm";
import {useMutation} from "@apollo/client";
import {LogIn} from "../../../../../../../GraphQLServer/Mutations/LogIn/LogIn.gql";
import {LogInVars} from "../../../../../../../GraphQLServer/Mutations/LogIn/Types/LogInVar.types";
import {LogInResType} from "../../../../../../../GraphQLServer/Mutations/LogIn/Types/LogInRes.types";
import {Preloader} from "../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/Preloader/Preloader";
import {useAppReducerActions} from "../../../../../../../Redux/App/Hooks/Actions.hooks";

export const LogInFragment = () => {
    const [logInMutation, {data, loading, error}] = useMutation<LogInResType, LogInVars>(LogIn);
    const {loginAction} = useAppReducerActions();

    const preloader = loading && <Preloader/>;
    if(data?.login.isAuth) {
        const {login} = data;
        loginAction({...login})
    }

    return <React.Fragment>
        <Typography variant={'h4'}>Авторизация</Typography>
        <LoginForm
            loginMutation={logInMutation}
            serverError={error}
        />
        {preloader}
    </React.Fragment>
};