export type OrderButtonPropsType = {
    size?: 'small' | 'medium' | 'large',
    disabled: boolean,
    buttonText: string
    onClickFunc: () => void
}