export type StandardButtonProps = {
    size?: 'small' | 'medium' | 'large',
    disabled: boolean,
    buttonText: string
    onClickFunc: () => void
}

export interface OrderButtonPropsType extends StandardButtonProps{}

export interface SendOrderButtonPropsType extends StandardButtonProps{}


