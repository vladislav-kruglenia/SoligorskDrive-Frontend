import {ReactNode} from "react";

export enum DisplayTypeEnum {
    price = "price",
    number = "number",
    text = "text",
    component = "component",
}

export type DisplayingDifferentDataPropsType = {
    displayComponent: ReactNode,
}