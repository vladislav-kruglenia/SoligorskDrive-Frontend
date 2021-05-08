import React, {ReactNode} from "react";
import {useQuery} from "@apollo/client";
import {Preloader} from "../../../../../AppGlobal/AppGlobalComponents/MaterialUI/Preloader/Preloader";
import {Typography} from "@material-ui/core";
import {OrdersTable} from "./Components/OrdersTable/OrdersTable";
import {ClientCurrentAndArchiveOrdersRes} from "../../../../../GraphQLServer/Queryes/ClientCurrentOrders/Types/ClientCurrentOrdersRes.types";
import {ClientCurrentAndArchiveOrdersGQL} from "../../../../../GraphQLServer/Queryes/ClientCurrentOrders/ClientCurrentOrders.gql";

export function useQueryCurrentAndArchiveOrders() {
    const {data, loading, error} = useQuery<ClientCurrentAndArchiveOrdersRes>(ClientCurrentAndArchiveOrdersGQL, {
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
    });

    let ArchiveRenderComponent: ReactNode;
    let CurrentRenderComponent: ReactNode;

    if (loading) ArchiveRenderComponent = CurrentRenderComponent = <div><Preloader/></div>;

    if (error) ArchiveRenderComponent = CurrentRenderComponent =
        <Typography variant={'h4'} color={"error"}>Ошибка загрузки данных</Typography>;

    if (data) {
        const {ClientArchiveOrders, ClientCurrentOrders} = data;
        CurrentRenderComponent = ClientCurrentOrders.length !== 0
            ? <OrdersTable
            orders={ClientCurrentOrders}
            isCurrentOrdersTable={true}
        />
        : null;

        ArchiveRenderComponent = ClientArchiveOrders.length !== 0
            ? <OrdersTable
            orders={ClientArchiveOrders}
            isCurrentOrdersTable={false}
        />
        : null;
    }

    return {ArchiveRenderComponent, CurrentRenderComponent}
}


