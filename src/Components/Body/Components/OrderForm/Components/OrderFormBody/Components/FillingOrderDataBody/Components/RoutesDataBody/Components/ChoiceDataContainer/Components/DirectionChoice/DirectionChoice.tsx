import React, {FC} from "react";
import style from "./DirectionChoice.module.scss"
import {Directions} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {DirectionChoiceProps} from "./DirectionChoice.types";
import {NativeSelectComponent} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/NativeSelect/NativeSelectComponent";

export const DirectionChoice:FC<DirectionChoiceProps> = () => {
    const OptionsArray = [
        <option key={Directions.toSoligorsk} value={Directions.toSoligorsk}>Минск - Солигорск</option>,
        <option key={Directions.toMinsk} value={Directions.toMinsk}>Солигорск - Минск</option>,
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


