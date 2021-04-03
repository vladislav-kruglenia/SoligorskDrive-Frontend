import style from "./Styles/InputEditMode.module.scss";
import React, {FC, useState} from "react";
import {DisplayingDifferentData} from "./DisplayingDifferentData";
import {EditModeValuePropsType, ValueDisplayPropsType} from "./Types/InputEditModeTypes";


export let ValueDisplay: FC<ValueDisplayPropsType> = (props) => {
    let [editModeHook, setEditModeHook] = useState(props.editModeStatus);
    let [editMode, setEditMode] = !props.setEditModeInProps
        ? [editModeHook, setEditModeHook]
        : [props.editModeStatus, props.setEditModeInProps];

    return <div className={style.ValueDisplay}>
        {!editMode
            ? <div onDoubleClick={() => setEditMode(true)}>
                <DisplayingDifferentData
                    displayComponent={props.displayComponent}
                />
            </div>
            // @ts-ignore //TODO: Type 'FormTypeEnum' is not assignable to type 'FormTypeEnum.grandForm'. Нигде нет FormTypeEnum без свойства
            : <EditModeValue
                type={props.type}
                grandFormComponent={props.grandFormComponent}
                isNotAllowedToExitEditMode={props.isNotAllowedToExitEditMode || false}
                setEditMode={(status: boolean) => {
                    setEditMode(status)
                }}
            />}
    </div>

};

let EditModeValue: FC<EditModeValuePropsType> = (props) => {

    let exitEditMode = () => {
        if (!props.isNotAllowedToExitEditMode) {
            props.setEditMode(false);
        }
    };
    return <div onKeyDown={(event) => {
        if (event.key === "Escape") exitEditMode()
    }}>
        <div className={style.editLayer}>
            {props.grandFormComponent}
        </div>

        <div className={style.transparentLayer}
             onClick={() => exitEditMode()}>{}</div>
    </div>
};
