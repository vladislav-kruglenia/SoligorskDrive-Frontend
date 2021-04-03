import {DisplayTypeEnum} from "./DisplayingDifferentDataTypes";
import {ReactNode} from "react";


export enum DisplayingDifferentDataEnum {
    price = "price",
    number = "number",
    text = "text",
    component = "component",
}

export enum FormTypeEnum {
    grandForm = "grandForm",
    number = "number",
    text = "text",
}

export enum GrandFormTypeEnum {
    UniversalComponent = "UniversalComponent"
}

/*export type IdNumbersType = {
    id?: string
    idClient?: string
    idDirection?: string
    idTariff?: string
    idService?: string
}*/

/*export type ChangeValueGlobalType = (idNumbers: IdNumbersType, value: number | string | boolean) => void
    | changeClientDataType*/

export type ValueDisplayPropsType = {
    setEditModeInProps?: (value: boolean) => void,
    editModeStatus: boolean,
    displayComponent?: any,
    displayType: DisplayTypeEnum,
    type: FormTypeEnum.grandForm,
    grandFormComponent?: ReactNode,
    isNotAllowedToExitEditMode?: boolean
}


export type EditModeValuePropsType =  EditModeGrandFormPropsType

export type EditModeGrandFormPropsType = {
    type: FormTypeEnum.grandForm,
    grandFormComponent?: ReactNode,
    setEditMode: (status: boolean) => void,
    isNotAllowedToExitEditMode: boolean
}

