import React, {ReactNode} from "react";
import {useQuery} from "@apollo/client";
import {TravelInfoResType} from "../../../../../../../../../../../../GraphQLServer/Queryes/TravelInfo/Types/TravelInfoRes.types";
import {
    TravelInfoArgs,
    TravelInfoVarsType
} from "../../../../../../../../../../../../GraphQLServer/Queryes/TravelInfo/Types/TravelInfoVars.types";
import {TravelInfoQuery} from "../../../../../../../../../../../../GraphQLServer/Queryes/TravelInfo/TravelInfo.gql";
import {Preloader} from "../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/Preloader/Preloader";
import {Typography} from "@material-ui/core";
import {TravelsInfoTable} from "./Components/TableBody/TableRoutes";

export const useQueryTravelInfo = (travelInfoData: TravelInfoArgs): ReactNode => {
    const {data, loading, error} = useQuery<TravelInfoResType, TravelInfoVarsType>(TravelInfoQuery, {
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
        variables: {travelInfoData}
    });
    let RenderDataComponent;
    if(loading) RenderDataComponent = <Preloader/>;
    if(error) RenderDataComponent = <Typography variant={'h4'} color={"error"}>Ошибка загрузки данных</Typography>;
    if(data) {
        const {TravelInfo} = data;
        RenderDataComponent = <TravelsInfoTable travelsInfo={TravelInfo}/>
    }

    return RenderDataComponent;
};