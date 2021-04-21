import React, {FC} from "react";
import {DirectionButtonProps, DirectionChoiceProps} from "./DirectionChoice.types";
import style from "./DirectionChoice.module.scss";
import {TextOrOutlinedButton} from "../../MaterialUI/MaterialButtons/MaterialButtons";
import {DirectionsEnum, DirectionsNamesEnum} from "../../../AppGlobalTypes/Enums";

export const DirectionChoiceButton: FC<DirectionChoiceProps> = (props) => {
    const {currentDirection, editDirectionAction} = props;

    return <div className={style.DirectionChoice}>
        <DirectionButton
            isActive={currentDirection === DirectionsEnum.toSoligorsk}
            editDirectionAction={editDirectionAction}
            buttonDirectionValue={DirectionsEnum.toSoligorsk}
        />
        <DirectionButton
            isActive={currentDirection === DirectionsEnum.toMinsk}
            editDirectionAction={editDirectionAction}
            buttonDirectionValue={DirectionsEnum.toMinsk}
        />

    </div>
};
export const DirectionButton: FC<DirectionButtonProps> = (props) => {
    const {isActive, buttonDirectionValue, editDirectionAction} = props;


    return <div className={style.DirectionButton}>
        <TextOrOutlinedButton
            buttonText={DirectionsNamesEnum[buttonDirectionValue]}
            onClickFunc={() => editDirectionAction(buttonDirectionValue)}
            variant={isActive ? "outlined" : "text"}
            size={"small"}
        />
    </div>

};