import React, {FC, useState} from "react";
import style from "./SortBy.module.scss"
import {Checkbox, Typography} from "@material-ui/core";
import {SortElementProps} from "./SortBy.types";

export const SortBy = () => {
    return <div className={style.SortBy}>
        <Typography>Сортировать по:</Typography>
        <SortElement label={'Направлению рейса'}/>
        <SortElement label={'Дате'}/>
        <SortElement label={'Времени'}/>
    </div>
};

export const SortElement:FC<SortElementProps> = (props) => {
    const [checked, editChecked] = useState(false);

    return <div>
        <Checkbox
            checked={checked}
            onChange={() => {
                editChecked(!checked)
            }}
            name="checkedB"
            color="primary"
            size={"small"}
        />
        <Typography variant={"caption"}>{props.label}</Typography>
    </div>
};
