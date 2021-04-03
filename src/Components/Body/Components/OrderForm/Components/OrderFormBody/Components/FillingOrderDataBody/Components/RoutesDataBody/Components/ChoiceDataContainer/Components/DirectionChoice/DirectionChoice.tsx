import React, {FC} from "react";
import style from "../../../../../../../../../../OrderForm.module.scss";
import {Directions} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {DirectionChoiceProps} from "./DirectionChoice.types";
import {NativeSelectComponent} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/NativeSelect/NativeSelectComponent";

export const DirectionChoice:FC<DirectionChoiceProps> = () => {
    const OptionsArray = [
        <option value={Directions.toSoligorsk}>Минск - Солигорск</option>,
        <option value={Directions.toMinsk}>Солигорск - Минск</option>
    ];

    return <div className={style.DirectionChoice}>
        <NativeSelectComponent
            labelText={"Направление рейса"}
            errorText={"Направление рейса не выбрано"}
            OptionsArray={OptionsArray}
            editOptionValue={value => {}}
        />
    </div>
};


