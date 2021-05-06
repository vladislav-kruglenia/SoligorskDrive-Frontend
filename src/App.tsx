import React from 'react';
import './App.scss';
import {Provider} from "react-redux";
import {store} from "./Redux/Store";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Body} from './Components/AppComponents/Body/Body';
import {AppLinks} from "./AppGlobal/AppGlobalTypes/Links";
import {LandingPage} from "./Components/Landing/Landing";
import HeaderDrawer from "./Components/AppComponents/HeaderDrawer/HeaderDrawer";
import {ApolloProvider} from "@apollo/client";
import {client} from "./GraphQLServer/indexGraphQL";
import {LoginPage} from "./Components/LoginPage/LoginPage";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/'
                       render={() => <Redirect to={AppLinks.AppRedirect}/>}/>

                <Route path={AppLinks.AppRedirect} render={() => <AppUIContainer/>}/>
                <Route path={AppLinks.LandingPage} render={() => <LandingPage/>}/>
                <Route path={AppLinks.LandingPage} render={() => <LandingPage/>}/>
                <Route path={AppLinks.LoginPage} render={() => <LoginPage/>}/>
            </Switch>
        </div>
    );
}

export const AppUIContainer = () => {
    return <>
        <HeaderDrawer/>
        <Body/>
    </>
};


export const AppContainer = () => {
    return <>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </ApolloProvider>
    </>
};


export default AppContainer;
