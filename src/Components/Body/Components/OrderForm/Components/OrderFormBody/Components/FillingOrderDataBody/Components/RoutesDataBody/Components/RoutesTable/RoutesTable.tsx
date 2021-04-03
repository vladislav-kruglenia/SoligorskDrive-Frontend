import React from "react";
import style from "./RoutesTable.module.scss"
import {TableTitle} from "./Components/TableTitle/TableTitle";
import {TableBody} from "./Components/TableBody/TableBody";

export const RoutesTable = () => {
    return <div className={style.RoutesTable}>
        <TableTitle/>
        <TableBody/>
    </div>
};

