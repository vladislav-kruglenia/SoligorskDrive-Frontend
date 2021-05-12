import React from 'react';
import './App.scss';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import {client} from "../GraphQLServer/indexGraphQL";
import {store} from "../Redux/Store";
import {AppInitialize} from "./Containers/AppAuth/App.initialize";

export const App = () => {
    return <>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Provider store={store}>
                    <AppInitialize/>
                </Provider>
            </BrowserRouter>
        </ApolloProvider>
    </>
};



