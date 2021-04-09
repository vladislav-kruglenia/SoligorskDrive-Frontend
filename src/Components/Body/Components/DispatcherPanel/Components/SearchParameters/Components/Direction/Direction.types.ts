import {DirectionsEnum} from "../../../../../../../../AppGlobal/AppGlobalTypes/Enums";

export type DirectionProps = {
    direction: DirectionsEnum,
    editDirectionAction: (direction: DirectionsEnum) => void,
}