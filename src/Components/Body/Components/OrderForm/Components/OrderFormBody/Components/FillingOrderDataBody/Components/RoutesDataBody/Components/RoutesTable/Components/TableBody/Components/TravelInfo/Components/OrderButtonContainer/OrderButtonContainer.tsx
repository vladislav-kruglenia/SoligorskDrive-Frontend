import React from "react";
import style from "./OrderButtonContainer.module.scss"
import {OrderButton} from "../../../../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/MaterialButtons/MaterialButtons";
import {Typography} from "@material-ui/core";

export const OrderButtonContainer = () => {
    return <div className={style.OrderButtonContainer}>

        <Typography component={'div'} className={style.numberSeats}>12 мест</Typography>
        <OrderButton
            onClickFunc={() => {}}
            buttonText={"Заказать"}
            size={"small"}
            disabled={false} // Todo: Error - дизаблить если не выбрано направление
        />
    </div>
};

//Todo: не работает Badge
