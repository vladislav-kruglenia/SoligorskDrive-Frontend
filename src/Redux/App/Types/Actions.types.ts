import {CurrentPage} from "./App.types";
import {LoginModel} from "../../../GraphQLServer/Mutations/LogIn/Types/LogInRes.types";

export interface EditCurrentPagePayload extends CurrentPage {
    
}

export type InitializePayload = {
    isAuth: boolean,
}

export interface LoginPayload extends LoginModel{

}

export type EditUserNamePayload = {
    userName: string,
}