import React, {useMemo} from "react";
import {SortByProps, SortElementParams} from "./SortBy.types";
import {SortOrdersEnum} from "../../../../../../../../../Redux/DispatcherPanel/Types/DispatcherPanel.types";
import {SortElementMemo} from "./SortBy";

export const useMapSortElements = (dto: SortByProps) => {
    const {editSortElementValue} = dto;
    const {byDirection, byDate, byTime} = dto.sortOrders;

    return useMemo(() => {
        const sortElementsParams: SortElementParams[] = [
            {
                label: 'Направлению рейса',
                checked: byDirection,
                sortType: SortOrdersEnum.byDirection,
            },
            {
                label: 'Дате',
                checked: byDate,
                sortType: SortOrdersEnum.byDate,
            },
            {
                label: 'Времени',
                checked: byTime,
                sortType: SortOrdersEnum.byTime,
            },
        ];

        return sortElementsParams.map<JSX.Element>((sortElement: SortElementParams) => {
            const {checked, label,  sortType} = sortElement;
            return (
                <SortElementMemo
                    key={label}
            label={label}
            checked={checked}
            sortType={sortType}
            editSortElementValue={editSortElementValue}
            />
        )
        })
    }, [editSortElementValue, byDirection, byDate, byTime]);
};