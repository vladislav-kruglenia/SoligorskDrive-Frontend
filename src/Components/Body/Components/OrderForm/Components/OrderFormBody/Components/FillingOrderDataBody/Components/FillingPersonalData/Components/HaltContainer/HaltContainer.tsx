import React from "react";
import style from "../../../../../../../../OrderForm.module.scss";
import {HaltChoice} from "./Components/HaltChoice/HaltChoice";
import {HaltTimeDisplay} from "./Components/HaltTimeDisplay/HaltTimeDisplay";

export const HaltContainer = () => {
    return <div className={style.HaltContainer}>
        <HaltChoice haltName={"none"}/>
        <HaltTimeDisplay/>
    </div>
};
