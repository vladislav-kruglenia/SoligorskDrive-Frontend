export type SignUpVars = {
    createUserAccountData: CreateUserAccount,
}

export type CreateUserAccount = {
    idUser: string,
    userLogin: string,
    userName: string,
    userNumberPhone: string,
    userPassword: string,
}