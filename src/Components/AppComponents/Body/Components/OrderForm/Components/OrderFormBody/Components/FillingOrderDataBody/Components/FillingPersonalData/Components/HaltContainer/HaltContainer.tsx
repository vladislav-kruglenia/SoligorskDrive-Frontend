import React, {FC} from "react";
import style from "./HaltContainer.module.scss"
import {HaltChoice} from "./Components/HaltChoice/HaltChoice";
import {HaltTimeDisplay} from "./Components/HaltTimeDisplay/HaltTimeDisplay";
import {Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {getStartHourSelector} from "../../../../../../../../../../../../../Redux/OrderForm/Selectors/OrderForm.selectors";
import {HaltContainerProps} from "./HaltContainer.types";

export const HaltContainer:FC<HaltContainerProps> = (props) => {
    const {selectedHaltLabel, haltTime, isSelectedHaltLabel} = props;

    // const {selectedHaltLabel, haltTime} = useSelector(getHaltDataSelector);
    const startHour = useSelector(getStartHourSelector);
    const isHaltTimeDisplay = isSelectedHaltLabel
        ? <HaltTimeDisplay haltTime={haltTime} startHour={startHour}/>
        : null;

    return <div className={style.HaltContainer}>
        <Typography variant={"h5"}>Остановка и время отправления</Typography>

        <div className={style.haltWrapper}>
            <HaltChoice haltName={selectedHaltLabel}/>
            {isHaltTimeDisplay}
        </div>
    </div>
};
