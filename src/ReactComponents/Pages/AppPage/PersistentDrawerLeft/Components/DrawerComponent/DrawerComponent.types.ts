import {ReactNode} from "react";

export type DrawerComponentProps = {
    NavBar: ReactNode,
    classes: Record<string, string>,
    isOpen: boolean,
    setOpen: (value: boolean) => void,
}