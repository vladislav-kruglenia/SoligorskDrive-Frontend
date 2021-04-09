import React from "react";
import style from "./SearchParameters.module.scss"
import {Direction} from "./Components/Direction/Direction";
import {Paper, Typography} from "@material-ui/core";
import {DateContainer} from "./Components/Date/DateContainer";
import {SortBy} from "./Components/SortBy/SortBy";

export const SearchParameters = () => {
    return <Paper className={style.SearchParameters} variant={"outlined"}>
        <Typography variant={"h6"}>Параметры поиска</Typography>
        <div className={style.searchParametersWrapper}>
            <Direction/>
            <DateContainer/>
        </div>
        <SortBy/>
    </Paper>
};



