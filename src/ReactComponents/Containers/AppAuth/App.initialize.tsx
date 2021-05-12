import React, {useEffect, useState} from "react";
import {AppRouter} from "../App.router";
import {useQuery} from "@apollo/client";
import {IsAuth} from "../../../GraphQLServer/Mutations/IsAuth/IsAuth.gql";
import {IsAuthRes} from "../../../GraphQLServer/Mutations/IsAuth/Types/IsAuth.res.types";
import {useAppReducerActions} from "../../../Redux/App/Hooks/Actions.hooks";


export const AppInitialize = () => {
    const [render, editRender] = useState(<div>Загрузка...</div>);
    const {initializeAppAction, loginAction} = useAppReducerActions();
    const {data, error, loading} = useQuery<IsAuthRes>(IsAuth);

    useEffect(() => {
        if (data) {
            initializeAppAction({isAuth:true});
            loginAction(data.IsAuth);
            editRender(<AppRouter/>);
        }

        if(error){
            initializeAppAction({isAuth:false});
            editRender(<AppRouter/>);
        }
    },[data, loading, error, loginAction, initializeAppAction]);

    return <>
        {render}
    </>
};