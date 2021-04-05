import React, {FC} from "react";
import style from "./DirectionChoice.module.scss"
import {DirectionsEnum} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {DirectionChoiceProps} from "./DirectionChoice.types";
import {NativeSelectComponent} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/NativeSelect/NativeSelectComponent";
import {useSelector} from "react-redux";
import {getDirectionSelector} from "../../../../../../../../../../../../../../Redux/OrderForm/OrderForm.selectors";

export const DirectionChoice:FC<DirectionChoiceProps> = () => {
    const currentDirection = useSelector(getDirectionSelector);

    const OptionsArray = [
        <option key={DirectionsEnum.toSoligorsk} value={DirectionsEnum.toSoligorsk}>Минск - Солигорск</option>,
        <option key={DirectionsEnum.toMinsk} value={DirectionsEnum.toMinsk}>Солигорск - Минск</option>,
    ];

    return <div className={style.DirectionChoice}>
        <NativeSelectComponent
            labelText={"Направление рейса"}
            errorText={"Направление рейса не выбрано"}
            OptionsArray={OptionsArray}
            editOptionValue={value => {}}
            optionValue={currentDirection}
        />
    </div>
};


