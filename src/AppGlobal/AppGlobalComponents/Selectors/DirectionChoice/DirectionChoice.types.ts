import {DirectionsEnum} from "../../../AppGlobalTypes/Enums";

export type DirectionChoiceProps = {
    currentDirection: DirectionsEnum,
    editDirectionAction: (value: DirectionsEnum) => void,
}