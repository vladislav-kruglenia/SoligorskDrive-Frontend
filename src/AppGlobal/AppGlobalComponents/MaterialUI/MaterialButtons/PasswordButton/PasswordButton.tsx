import React, {FC} from "react";
import {IconButton, InputAdornment} from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {PasswordButtonProps} from "./PasswordButton.types";

export const PasswordButton:FC<PasswordButtonProps> = (props) => {
    const {passwordWriteMode, setPasswordWriteMode} = props;
    const handleClickShowPassword = () => setPasswordWriteMode(!passwordWriteMode);

    return (
        <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
            >
                {passwordWriteMode ? <Visibility /> : <VisibilityOff />}
            </IconButton>
        </InputAdornment>
    )
};
