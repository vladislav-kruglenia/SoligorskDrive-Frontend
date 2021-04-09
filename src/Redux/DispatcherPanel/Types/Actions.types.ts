import {DirectionsEnum} from "../../../AppGlobal/AppGlobalTypes/Enums";
import {SortOrdersEnum} from "./DispatcherPanel.types";

export type EditCurrentDirectionPayload = {
    direction: DirectionsEnum,
}

export type EditCurrentDatePayload = {
    date: Date
}

export type EditSortByValuePayload = {
    sortType: SortOrdersEnum,
}

