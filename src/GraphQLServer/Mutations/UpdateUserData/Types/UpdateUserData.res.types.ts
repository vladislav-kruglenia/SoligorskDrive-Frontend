export type UpdateUserDataRes = {
    updateUserPersonalData: UpdateUserPersonalDataModel,
}

export type UpdateUserPersonalDataModel = {
    userLogin: string,
    userName: string,
    userNumberPhone: string,
}