import React from "react";
import style from "./DispatcherPanel.module.scss"
import {SearchParameters} from "./Components/SearchParameters/SearchParameters";
import {DisplayOrdersInfoMemo} from "./Components/DisplayOrdersInfo/DisplayOrdersInfo";

export const DispatcherPanel = () => {
    return <div className={style.DispatcherPanel}>
        <SearchParameters/>
        <DisplayOrdersInfoMemo/>
    </div>
};

