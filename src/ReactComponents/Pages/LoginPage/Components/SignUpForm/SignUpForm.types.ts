import {SignUpVars} from "../../../../../GraphQLServer/Mutations/SignUp/Types/SignUpVar.types";
import {ApolloError, FetchResult, MutationFunctionOptions} from "@apollo/client";
import {SignUpRes} from "../../../../../GraphQLServer/Mutations/SignUp/Types/SignUpRes.types";

export type SignUpFormProps = {
    serverError:  ApolloError | undefined,
    signUpMutation: (options?: MutationFunctionOptions<SignUpRes, SignUpVars>) => Promise<FetchResult<SignUpRes>>
}

export type SignUpFormTypes = {
    userName: string,
    userLogin: string,
    userNumberPhone: string,
    userPassword: string,
}