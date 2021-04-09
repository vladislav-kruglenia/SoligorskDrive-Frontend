import React, {useState} from "react";
import style from "./Direction.module.scss"
import {DirectionsEnum} from "../../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {DirectionChoice} from "../../../../../../../../AppGlobal/AppGlobalComponents/Selectors/DirectionChoice/DirectionChoice";

export const Direction = () => {
    const [currentDirection, editDirection] = useState(DirectionsEnum.none);

    return <div className={style.Direction}>
        <DirectionChoice
            currentDirection={currentDirection}
            editDirectionAction={editDirection}
        />
    </div>
};