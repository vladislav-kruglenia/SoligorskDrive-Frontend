import React from "react";
import style from "./RoutesTable.module.scss"
import {TableTitle} from "./Components/TableTitle/TableTitle";
import {travelsInfo, TravelsInfoTable} from "./Components/TableBody/TableRoutes";

export const RoutesTable = () => {
    return <div className={style.RoutesTable}>
        <TableTitle/>
        <TravelsInfoTable travelsInfo={travelsInfo}/>
    </div>
};

