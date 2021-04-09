import React, {FC} from "react";
import {DirectionsEnum} from "../../../AppGlobalTypes/Enums";
import {NativeSelectComponent} from "../../MaterialUI/NativeSelect/NativeSelectComponent";
import {DirectionChoiceProps} from "./DirectionChoice.types";

export const DirectionChoice: FC<DirectionChoiceProps> = (props) => {
    const {currentDirection, editDirectionAction} = props;

    const OptionsArray = [
        <option key={DirectionsEnum.toSoligorsk} value={DirectionsEnum.toSoligorsk}>Минск - Солигорск</option>,
        <option key={DirectionsEnum.toMinsk} value={DirectionsEnum.toMinsk}>Солигорск - Минск</option>,
    ];

    return <NativeSelectComponent
        labelText={"Направление рейса"}
        errorText={"Направление рейса не выбрано"}
        OptionsArray={OptionsArray}
        editOptionValue={value => editDirectionAction(value as DirectionsEnum)}
        optionValue={currentDirection}
    />
};