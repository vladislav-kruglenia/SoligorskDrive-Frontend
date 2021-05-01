import {SortOrders, SortOrdersEnum} from "../../../../../../../../Redux/DispatcherPanel/Types/DispatcherPanel.types";

export interface SortByProps {
    sortOrders: SortOrders,
    editSortElementValue: (sortType: SortOrdersEnum) => void,
}

export type SortElementProps = {
    label: string,
    checked: boolean,
    sortType: SortOrdersEnum,
    editSortElementValue: (sortType: SortOrdersEnum) => void,
}

export type SortElementParams = {
    label: string,
    checked: boolean,
    sortType: SortOrdersEnum,
}