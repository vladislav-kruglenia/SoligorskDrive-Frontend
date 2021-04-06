import {OutlinedButton} from "../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import React, {FC} from "react";
import {DeleteOrderButtonContainerProps} from "./DeleteOrderButtonContainer.types";

export const DeleteOrderButtonContainer:FC<DeleteOrderButtonContainerProps> = () => {
    return <OutlinedButton
        buttonText={'Отменить заказ'}
        disabled={false}
        size={"small"}
        onClickFunc={() => {}}
    />
};