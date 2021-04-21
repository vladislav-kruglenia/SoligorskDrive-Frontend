import {DirectionsEnum} from "../../../AppGlobalTypes/Enums";

export type DirectionChoiceProps = {
    currentDirection: DirectionsEnum,
    editDirectionAction: (value: DirectionsEnum) => void,
}

export type DirectionButtonProps = {
    isActive: boolean,
    buttonDirectionValue: DirectionsEnum,
    editDirectionAction: (value: DirectionsEnum) => void,
}