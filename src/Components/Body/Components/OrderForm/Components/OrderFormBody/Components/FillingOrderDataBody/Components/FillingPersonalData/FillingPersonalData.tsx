import React from "react";
import style from "./FillingPersonalData.module.scss"
import {HaltContainer} from "./Components/HaltContainer/HaltContainer";
import {SeatsNumberContainer} from "./Components/SeatsNumberContainer/SeatsNumberContainer";
import {UserData} from "./Components/UserData/UserData";

export const FillingPersonalData = () => {
    return <div className={style.FillingPersonalData}>
        <HaltContainer/>
        <UserData/>
        <SeatsNumberContainer/>
    </div>
};

