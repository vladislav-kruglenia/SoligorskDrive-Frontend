import React from "react";
import {Typography} from "@material-ui/core";
import {SignUpForm} from "../SignUpForm/SignUpForm";
import {useMutation} from "@apollo/client";
import {SignUp} from "../../../../../../../GraphQLServer/Mutations/SignUp/SignUp.gql";
import {SignUpRes} from "../../../../../../../GraphQLServer/Mutations/SignUp/Types/SignUpRes.types";
import {SignUpVars} from "../../../../../../../GraphQLServer/Mutations/SignUp/Types/SignUpVar.types";
import {Redirect} from "react-router";
import {AppLinks} from "../../../../../../../AppGlobal/AppGlobalTypes/Links";
import {Preloader} from "../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/Preloader/Preloader";

export const SignUpFragment = () => {
    const [signUpMutation, {data, loading, error}] = useMutation<SignUpRes, SignUpVars>(SignUp);

    const PreloaderComponent = loading && <Preloader/>;
    if(data) return <Redirect to={AppLinks.LoginPage}/>;

    return <React.Fragment>
        <Typography variant={'h4'}>Регистрация</Typography>
        <SignUpForm
            signUpMutation={signUpMutation}
            serverError={error}
        />
        {PreloaderComponent}
    </React.Fragment>
};