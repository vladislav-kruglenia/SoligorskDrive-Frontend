import {UpdateUserPasswordRes} from "../../../../../../../../../../GraphQLServer/Mutations/UpdateUserPassword/Types/UpdateUserPassword.res.types";
import {MutationTypes} from "../../../../../../../../../../GraphQLServer/ApolloClientCommon/Types/Types";

export type StatusChangePasswordProps = {
    apolloProps: MutationTypes<UpdateUserPasswordRes>,
    enterEditMode: () => void,
}