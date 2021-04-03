import React from "react";
import style from "./TableBody.module.scss"
import {ColumnsTitles} from "./Components/ColumnsTitles/ColumnsTitles";
import {TravelInfo} from "./Components/TravelInfo/TravelInfo";
import {Divider} from "@material-ui/core";

export const TableBody = () => {
    return <div className={style.TableBody}>
        <ColumnsTitles/>
        <Divider/>
        <TravelInfo/>
    </div>
};