import React, {FC, memo} from "react";
import style from "./Direction.module.scss"
import {DirectionChoiceSelect} from "../../../../../../../../AppGlobal/AppGlobalComponents/Selectors/DirectionChoice/DirectionChoiceSelect";
import {DirectionProps} from "./Direction.types";

export const Direction:FC<DirectionProps> = (props) => {
    const {direction, editDirectionAction} = props;
    // const [currentDirection, editDirection] = useState(props.direction);

    return <div className={style.Direction}>
        <DirectionChoiceSelect
            currentDirection={direction}
            editDirectionAction={editDirectionAction}
        />
    </div>
};

export const DirectionMemo = memo(Direction);
