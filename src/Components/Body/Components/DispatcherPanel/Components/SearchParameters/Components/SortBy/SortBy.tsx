import React, {FC, memo} from "react";
import style from "./SortBy.module.scss"
import {Checkbox, Typography} from "@material-ui/core";
import {SortByProps, SortElementProps} from "./SortBy.types";
import {useMapSortElements} from "./SortBy.hooks";

export const SortBy:FC<SortByProps> = (props) => {

    const SortElements = useMapSortElements(props);

    return <div className={style.SortBy}>
        <Typography>Сортировать по:</Typography>
        <div className={style.sortElementsWrapper}>
            {SortElements}
        </div>
    </div>
};

export const SortByMemo = memo(SortBy);



export const SortElement:FC<SortElementProps> = (props) => {
    const {checked, label, sortType, editSortElementValue} = props;
    // const [isChecked, editChecked] = useState(checked);

    return <div className={style.SortElement}>
        <Checkbox
            checked={checked}
            onChange={() => {
                editSortElementValue(sortType)
            }}
            name="checkedB"
            color="primary"
            size={"small"}
        />
        <Typography variant={"caption"}>{label}</Typography>
    </div>
};

export const SortElementMemo = memo(SortElement);
