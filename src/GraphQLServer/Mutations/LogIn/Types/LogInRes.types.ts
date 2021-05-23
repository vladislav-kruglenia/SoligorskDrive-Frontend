import {RolesEnum} from "../../../../AppGlobal/AppGlobalTypes/Enums";

export type LogInResType = {
    login: LoginModel,
}

export type LoginModel = {
    isAuth: boolean,
    userRole: RolesEnum,
    userId: string,
    userName: string,
}

