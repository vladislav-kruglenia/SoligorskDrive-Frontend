import React from "react";
import style from "./SearchParameters.module.scss"
import {DirectionMemo} from "./Components/Direction/Direction";
import {Paper, Typography} from "@material-ui/core";
import {DateContainerMemo} from "./Components/Date/DateContainer";
import {SortByMemo} from "./Components/SortBy/SortBy";
import {useSearchParametersActions, useSearchParametersState} from "./SearchParameters.hooks";

export const SearchParameters = () => {
    const {currentDirection, currentDate, sortOrders} = useSearchParametersState();
    const {byDirection, byDate, byTime} = sortOrders;

    const {editCurrentDateAction, editCurrentDirectionAction, editSortByValueAction} = useSearchParametersActions();

    const DirectionDisplay = byDirection && <DirectionMemo
        direction={currentDirection}
        editDirectionAction={editCurrentDirectionAction}
    />;


    return <Paper className={style.SearchParameters} variant={"outlined"}>
        <Typography variant={"h6"}>Параметры поиска</Typography>
        <div className={style.searchParametersWrapper}>
            {DirectionDisplay}
            <DateContainerMemo
                currentDate={currentDate}
                editDate={editCurrentDateAction}
                isDatePicker={byDate}
                isTimePicker={byTime}
            />
        </div>
        <SortByMemo
            sortOrders={sortOrders}
            editSortElementValue={editSortByValueAction}
        />
    </Paper>
};



