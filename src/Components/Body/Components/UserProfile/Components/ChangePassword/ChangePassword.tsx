import React, {useState} from "react";
import style from "./ChangePassword.module.scss"
import {ChangePasswordForm} from "./Components/ChangePasswordForm/ChangePasswordForm";
import {Divider, Typography} from "@material-ui/core";
import {StatusChangePassword} from "./Components/StatusChangePassword/StatusChangePassword";

export const ChangePassword = () => {
    const [editMode, setEditMode] = useState(false);

    const componentDisplay = editMode
        ? <ChangePasswordForm
            exitEditMode={()=>setEditMode(false)}
            updatePassword={newPassword => {}}
        />
        : <StatusChangePassword
            enterEditMode={()=>setEditMode(true)}
        />;

    return <div className={style.ChangePassword}>
        <Typography variant={'h4'}>Изменение пароля</Typography>
        <Divider/>
        <div className={style.changePasswordWrapper}>
            {componentDisplay}
        </div>
    </div>
};

