import React from 'react';
import './App.scss';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import {client} from "../GraphQLServer/indexGraphQL";
import {store} from "../Redux/Store";
import {AppInitialize} from "./Containers/AppAuth/App.initialize";
import {ThemeProvider} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
import {pink} from "@material-ui/core/colors";

const theme = createMuiTheme({
    /*palette: {
        primary: {
            light: '#6932a5',
            main: '#370075',
            dark: '#0a0048',
            contrastText: '#fff',
        },
        secondary: pink,
    },*/
    palette: {
        primary: {
            light: '#3e4868',
            main: '#14213d',
            dark: '#000018',
            contrastText: '#fff',
        },
        secondary: pink,
    },
});



export const App = () => {
    return <>
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <Provider store={store}>
                        <AppInitialize/>
                    </Provider>
                </BrowserRouter>
            </ApolloProvider>
        </ThemeProvider>
    </>
};



