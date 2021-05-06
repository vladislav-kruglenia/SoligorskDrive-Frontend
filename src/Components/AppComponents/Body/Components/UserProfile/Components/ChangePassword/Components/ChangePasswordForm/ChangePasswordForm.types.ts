export type ChangePasswordFormProps = {
    exitEditMode: () => void,
    updatePassword: (newPassword: string) => void,
}

export type ChangePasswordValues = {
    oldPassword: string,
    newPassword1: string,
    newPassword2: string,
}