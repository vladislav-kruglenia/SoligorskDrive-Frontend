import {useState} from "react";
import {TextFieldPasswordTypes} from "../../../../AppGlobalTypes/Enums";

export const usePasswordButtonProp = () => {
    const [passwordWriteMode, setPasswordWriteMode] = useState(false);
    const typePasswordField = passwordWriteMode ? TextFieldPasswordTypes.Text : TextFieldPasswordTypes.Password;

    return {passwordWriteMode, setPasswordWriteMode, typePasswordField,}
};