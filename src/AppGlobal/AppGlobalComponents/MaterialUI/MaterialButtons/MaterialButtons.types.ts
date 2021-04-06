export type StandardButtonProps = {
    size?: 'small' | 'medium' | 'large',
    disabled: boolean,
    buttonText: string
    onClickFunc: () => void
}

export interface OrderButtonPropsType extends StandardButtonProps{}

export interface SendOrderButtonPropsType extends StandardButtonProps{}

export interface OutlinedButtonPropsType extends StandardButtonProps{}

export interface LinkButtonPropsType extends StandardButtonProps{
    link: string,
}


