import React, {FC} from "react";
import style from "../../SearchParameters.module.scss";
import {SearchParametersContainerProps} from "./SearchParametersContainer.types";

export const SearchParametersContainer:FC<SearchParametersContainerProps> = (props) => {
    const {DateContainerComponent, DirectionDisplayComponent} = props;

    return <div className={style.SearchParametersContainer}>
        {DirectionDisplayComponent}
        {DateContainerComponent}
    </div>
};