import {UpdateUserPasswordVar} from "../../../../../../../../../GraphQLServer/Mutations/UpdateUserPassword/Types/UpdateUserPassword.var.types";
import {FetchResult, MutationFunctionOptions} from "@apollo/client";
import {UpdateUserPasswordRes} from "../../../../../../../../../GraphQLServer/Mutations/UpdateUserPassword/Types/UpdateUserPassword.res.types";

export type ChangePasswordFormProps = {
    exitEditMode: () => void,
    updatePassword: (options?: MutationFunctionOptions<UpdateUserPasswordRes, UpdateUserPasswordVar>) => Promise<FetchResult<UpdateUserPasswordRes>>
}

export type ChangePasswordValues = {
    oldPassword: string,
    newPassword1: string,
    newPassword2: string,
}