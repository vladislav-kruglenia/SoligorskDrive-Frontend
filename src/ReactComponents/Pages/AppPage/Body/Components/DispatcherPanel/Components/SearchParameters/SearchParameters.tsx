import React from "react";
import style from "./SearchParameters.module.scss"
import {DirectionMemo} from "./Components/Direction/Direction";
import {Paper, Typography} from "@material-ui/core";
import {SortByMemo} from "./Components/SortBy/SortBy";
import {useSearchParametersActions, useSearchParametersState} from "./SearchParameters.hooks";
import {SearchParametersContainer} from "./Components/SearchParametersContainer/SearchParametersContainer";
import {DateContainerMemo} from "./Components/Date/DateContainer";

export const SearchParameters = () => {
    const {currentDirection, currentDate, sortOrders} = useSearchParametersState();
    const {byDirection, byDate, byTime} = sortOrders;
    const isArgs = byDirection || byDate || byTime;

    const {editCurrentDateAction, editCurrentDirectionAction, editSortByValueAction} = useSearchParametersActions();

    const DirectionDisplay = byDirection && <DirectionMemo
        direction={currentDirection}
        editDirectionAction={editCurrentDirectionAction}
    />;

    const DataFormsContainer = isArgs && <SearchParametersContainer
        DateContainerComponent={
            <DateContainerMemo
                currentDate={currentDate}
                editDate={editCurrentDateAction}
                isDatePicker={byDate}
                isTimePicker={byTime}
            />
        }
        DirectionDisplayComponent={DirectionDisplay}
    />;


    return <Paper className={style.SearchParameters} variant={"outlined"}>
        <Typography variant={"h6"}>Параметры поиска</Typography>
        {DataFormsContainer}
        <SortByMemo
            sortOrders={sortOrders}
            editSortElementValue={editSortByValueAction}
        />
    </Paper>
};




