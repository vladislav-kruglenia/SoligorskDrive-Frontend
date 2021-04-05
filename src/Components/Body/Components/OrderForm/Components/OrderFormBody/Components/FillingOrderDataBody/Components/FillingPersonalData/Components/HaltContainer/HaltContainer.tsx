import React from "react";
import style from "./HaltContainer.module.scss"
import {HaltChoice} from "./Components/HaltChoice/HaltChoice";
import {HaltTimeDisplay} from "./Components/HaltTimeDisplay/HaltTimeDisplay";
import {Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {
    getHaltDataSelector,
    getStartHourSelector
} from "../../../../../../../../../../../../Redux/OrderForm/OrderForm.selectors";

export const HaltContainer = () => {
    const {selectedHaltLabel, haltTime} = useSelector(getHaltDataSelector);
    const startHour = useSelector(getStartHourSelector);

    return <div className={style.HaltContainer}>
        <Typography variant={"h5"}>Остановка и время отправления</Typography>

        <div className={style.haltWrapper}>
            <HaltChoice haltName={selectedHaltLabel}/>
            <HaltTimeDisplay haltTime={haltTime} startHour={startHour}/>
        </div>
    </div>
};
