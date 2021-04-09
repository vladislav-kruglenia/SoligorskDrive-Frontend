import {DirectionsNamesEnum} from "../../../AppGlobal/AppGlobalTypes/Enums";
import {SortOrdersEnum} from "./DispatcherPanel.types";

export type EditCurrentDirectionPayload = {
    direction: DirectionsNamesEnum,
}

export type EditCurrentDatePayload = {
    date: Date
}

export type EditSortByValuePayload = {
    sortType: SortOrdersEnum,
    value: boolean,
}

