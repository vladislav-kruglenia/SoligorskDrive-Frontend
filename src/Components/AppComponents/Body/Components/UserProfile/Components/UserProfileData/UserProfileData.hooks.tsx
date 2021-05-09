import React from "react";
import {useQuery} from "@apollo/client";
import {UserPersonalDataRes} from "../../../../../../../GraphQLServer/Queryes/UserPersonalData/Types/UserPersonalDataRes.types";
import {UserPersonalData} from "../../../../../../../GraphQLServer/Queryes/UserPersonalData/UserPersonalData.gql";
import {Preloader} from "../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/Preloader/Preloader";
import {Typography} from "@material-ui/core";
import {ProfileDataWrapper} from "./Components/ProfileDataWrapper/ProfileDataWrapper";
import {UseQueryUserProfileDataDTO} from "./UserProfileData.types";


export const useQueryUserProfileData = (): UseQueryUserProfileDataDTO => {
    let RenderDataComponent = null;
    const {data, loading, error} = useQuery<UserPersonalDataRes>(UserPersonalData);

    if(loading) RenderDataComponent = <Preloader/>;
    if(error) RenderDataComponent = <Typography color={"error"}>Ошибка ввода данных</Typography>;
    if(data){
        const {UserPersonalData} = data;
        RenderDataComponent = <ProfileDataWrapper userProfileData={UserPersonalData}/>
    }

    return {RenderDataComponent};
};



