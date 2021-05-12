import {MainUserProfileData} from "../../UserProfileData.types";
import {MutationFunc, MutationTypes} from "../../../../../../../../../../GraphQLServer/ApolloClientCommon/Types/Types";
import {UpdateUserDataRes} from "../../../../../../../../../../GraphQLServer/Mutations/UpdateUserData/Types/UpdateUserData.res.types";
import {UpdateUserDataVar} from "../../../../../../../../../../GraphQLServer/Mutations/UpdateUserData/Types/UpdateUserData.var.types";

export type UserProfileDataFormProps = {
    userData: MainUserProfileData,
    mutationData: MutationTypes<UpdateUserDataRes>
    exitEditMode: () => void,
    editUserData: MutationFunc<UpdateUserDataRes, UpdateUserDataVar>,
}