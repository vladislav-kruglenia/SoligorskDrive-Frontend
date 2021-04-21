import {PropTypes} from "@material-ui/core";

export type StandardButtonProps = {
    size?: 'small' | 'medium' | 'large',
    disabled?: boolean,
    color?: PropTypes.Color;
    buttonText: string
    onClickFunc: () => void
}

export interface OrderButtonPropsType extends StandardButtonProps{}

export interface SendOrderButtonPropsType extends StandardButtonProps{}

export interface OutlinedButtonPropsType extends StandardButtonProps{}

export interface TextOrOutlinedButtonPropsType extends StandardButtonProps{
    variant: 'text' | 'outlined',
}

export interface NavBarButtonPropsType extends StandardButtonProps{
    link: string,
}

export interface LinkButtonPropsType extends StandardButtonProps{
    link: string,
}


