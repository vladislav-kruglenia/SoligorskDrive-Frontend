import React from "react";
import {SearchParameters} from "./Components/SearchParameters/SearchParameters";
import {DisplayOrdersInfo} from "./Components/DisplayOrdersInfo/DisplayOrdersInfo";

export const DispatcherPanel = () => {
    return <div>
        <SearchParameters/>
        <DisplayOrdersInfo/>
    </div>
};

