import React, {FC} from "react";
import {StatusLabel} from "./Components/StatusLabel/StatusLabel";
import {OutlinedButton} from "../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {StatusChangePasswordProps} from "./StatusChangePassword.types";
import {StatusChangePasswordEnum} from "./Components/StatusLabel/StatusLabel.types";

export const StatusChangePassword :FC<StatusChangePasswordProps> = (props) => {
    const {apolloProps} = props;
    const {data, loading, error} = apolloProps;

    let status = StatusChangePasswordEnum.none;
    if(data) status = StatusChangePasswordEnum.successful;
    if(error) status = StatusChangePasswordEnum.error;

    return <div>
        <StatusLabel status={status}/>
        <OutlinedButton
            disabled={loading}
            buttonText={"Изменить пароль"}
            onClickFunc={() => props.enterEditMode()}
        />
    </div>
};




