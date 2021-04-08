import React, {FC} from "react";
import {StatusLabel} from "./Components/StatusLabel/StatusLabel";
import {OutlinedButton} from "../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {StatusChangePasswordProps} from "./StatusChangePassword.types";

export const StatusChangePassword :FC<StatusChangePasswordProps> = (props) => {

    return <div>
        <StatusLabel status={"none"}/>
        <OutlinedButton
            buttonText={"Изменить пароль"}
            onClickFunc={() => props.enterEditMode()}
        />
    </div>
};




