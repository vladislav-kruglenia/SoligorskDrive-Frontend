import React from "react";
import style from "./RoutesTable.module.scss"
import {TableTitle} from "./Components/TableTitle/TableTitle";
import {useSelector} from "react-redux";
import {getTravelInfoDataSelector} from "../../../../../../../../../../../../../Redux/OrderForm/Selectors/TravelInfo.selector";
import {useQueryTravelInfo} from "./RoutesTable.hooks";
import {DirectionsEnum} from "../../../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {Typography} from "@material-ui/core";

export const RoutesTable = () => {
    const travelInfoData = useSelector(getTravelInfoDataSelector);
    const isNotDirection = travelInfoData.direction === DirectionsEnum.none;
    const RenderDataComponent = useQueryTravelInfo(travelInfoData);

    if(isNotDirection) return <Typography variant={"h5"} color={"error"}>Выберите направление</Typography>;

    return <div className={style.RoutesTable}>
        <TableTitle/>
        {RenderDataComponent}
    </div>
};

