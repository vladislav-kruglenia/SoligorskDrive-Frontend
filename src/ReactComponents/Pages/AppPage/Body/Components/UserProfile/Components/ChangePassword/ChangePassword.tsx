import React, {useState} from "react";
import style from "./ChangePassword.module.scss"
import {ChangePasswordForm} from "./Components/ChangePasswordForm/ChangePasswordForm";
import {Divider, Paper, Typography} from "@material-ui/core";
import {StatusChangePassword} from "./Components/StatusChangePassword/StatusChangePassword";
import {useMutation} from "@apollo/client";
import {UpdateUserPassword} from "../../../../../../../../GraphQLServer/Mutations/UpdateUserPassword/UpdateUserPassword.gql";
import {UpdateUserPasswordRes} from "../../../../../../../../GraphQLServer/Mutations/UpdateUserPassword/Types/UpdateUserPassword.res.types";
import {UpdateUserPasswordVar} from "../../../../../../../../GraphQLServer/Mutations/UpdateUserPassword/Types/UpdateUserPassword.var.types";

export const ChangePassword = () => {
    const [editMode, setEditMode] = useState(false);
    const [updatePassword, {data, loading, error}] = useMutation<UpdateUserPasswordRes, UpdateUserPasswordVar>(UpdateUserPassword);


    const componentDisplay = editMode
        ? <ChangePasswordForm
            exitEditMode={()=>setEditMode(false)}
            updatePassword={updatePassword}
        />
        : <StatusChangePassword
            enterEditMode={()=>setEditMode(true)}
            apolloProps={{data, loading, error}}
        />;

    return <Paper className={style.ChangePassword}>
        <Typography variant={'h4'}>Изменение пароля</Typography>
        <Divider/>
        <div className={style.changePasswordWrapper}>
            {componentDisplay}
        </div>
    </Paper>
};

