import {useMutationCommonHook} from "../../../../../GraphQLServer/ApolloClientCommon/Hooks/UseMutation.hook";
import {LogOut} from "../../../../../GraphQLServer/Mutations/LogOut/LogOut.gql";
import {LogOutRes} from "../../../../../GraphQLServer/Mutations/LogOut/Types/LogOut.res.types";

export const useMutationLogOut = () => {
    return useMutationCommonHook<LogOutRes>(LogOut);
};