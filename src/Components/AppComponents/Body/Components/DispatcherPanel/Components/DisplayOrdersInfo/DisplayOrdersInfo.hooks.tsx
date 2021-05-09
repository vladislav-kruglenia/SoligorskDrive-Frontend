import React from "react";
import {useQuery} from "@apollo/client";
import {DispatcherOrdersInfo} from "../../../../../../../GraphQLServer/Queryes/DispatcherOrdersInfo/DispatcherOrdersInfo.gql";
import {DispatcherOrdersInfoVar} from "../../../../../../../GraphQLServer/Queryes/DispatcherOrdersInfo/Types/DispatcherOrdersInfo.var.types";
import {DispatcherOrdersInfoRes} from "../../../../../../../GraphQLServer/Queryes/DispatcherOrdersInfo/Types/DispatcherOrdersInfo.res.types";
import {Preloader} from "../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/Preloader/Preloader";
import {Typography} from "@material-ui/core";
import {DispatcherOrdersTables} from "./Components/DispatcherOrdersTable/DispatcherOrdersTable";
import {getDispatcherOrdersArgsSelector} from "../../../../../../../Redux/DispatcherPanel/Selectors/DispatcherOrdersArgs";
import {useSelector} from "react-redux";

export const useQueryDisplayOrdersInfo = () => {
    let RenderDataComponent;
    const dispatcherOrdersInfoData = useSelector(getDispatcherOrdersArgsSelector);

    const {data, loading, error} = useQuery<DispatcherOrdersInfoRes, DispatcherOrdersInfoVar>(
        DispatcherOrdersInfo,
        {
            variables: { dispatcherOrdersInfoData},
            fetchPolicy: "cache-and-network",
        }
    );

    if (loading) RenderDataComponent = <Preloader/>;
    if (error) RenderDataComponent = <Typography color={"error"}>Заказы с такими данными не найдены.</Typography>;
    if (data) {
        const {DispatcherOrdersInfo} = data;
        RenderDataComponent = <DispatcherOrdersTables dispatcherOrders={DispatcherOrdersInfo}/>
    }

    return RenderDataComponent;
};
