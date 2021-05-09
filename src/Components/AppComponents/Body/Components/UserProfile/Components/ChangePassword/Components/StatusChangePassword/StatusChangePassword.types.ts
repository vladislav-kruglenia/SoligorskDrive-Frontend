import {MutationTypes} from "../../../../../../../../../AppGlobal/AppGlobalTypes/ApolloClient.types";
import {UpdateUserPasswordRes} from "../../../../../../../../../GraphQLServer/Mutations/UpdateUserPassword/Types/UpdateUserPassword.res.types";

export type StatusChangePasswordProps = {
    apolloProps: MutationTypes<UpdateUserPasswordRes>,
    enterEditMode: () => void,
}