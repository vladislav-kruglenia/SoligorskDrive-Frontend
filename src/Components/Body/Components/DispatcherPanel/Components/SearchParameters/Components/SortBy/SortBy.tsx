import React, {FC, memo} from "react";
import style from "./SortBy.module.scss"
import {Checkbox, Typography} from "@material-ui/core";
import {SortByProps, SortElementProps} from "./SortBy.types";
import {SortOrdersEnum} from "../../../../../../../../Redux/DispatcherPanel/Types/DispatcherPanel.types";

export const SortBy:FC<SortByProps> = (props) => {
    const {editSortElementValue} = props;
    const {byDirection, byDate, byTime} = props.sortOrders;

    return <div className={style.SortBy}>
        <Typography>Сортировать по:</Typography>
        <SortElementMemo
            label={'Направлению рейса'}
            checked={byDirection}
            sortType={SortOrdersEnum.byDirection}
            editSortElementValue={editSortElementValue}
        />
        <SortElementMemo
            label={'Дате'}
            checked={byDate}
            sortType={SortOrdersEnum.byDate}
            editSortElementValue={editSortElementValue}
        />
        <SortElementMemo
            label={'Времени'}
            checked={byTime}
            sortType={SortOrdersEnum.byTime}
            editSortElementValue={editSortElementValue}
        />
    </div>
};



export const SortByMemo = memo(SortBy);

export const SortElement:FC<SortElementProps> = (props) => {
    const {checked, label, sortType, editSortElementValue} = props;
    // const [isChecked, editChecked] = useState(checked);

    return <div>
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
