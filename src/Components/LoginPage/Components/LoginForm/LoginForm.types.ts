import {ApolloError, FetchResult, MutationFunctionOptions} from "@apollo/client";
import {LogInVars} from "../../../../GraphQLServer/Mutations/LogIn/Types/LogInVar.types";
import {LogInResType} from "../../../../GraphQLServer/Mutations/LogIn/Types/LogInRes.types";

export type LoginFormProps = {
    serverError:  ApolloError | undefined,
    loginMutation: (options?: MutationFunctionOptions<LogInResType, LogInVars>) => Promise<FetchResult<LogInResType>>
}

export type LoginFormTypes = {
    userLogin: string,
    userPassword: string,
}