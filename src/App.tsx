import React from 'react';
import './App.scss';
import {Provider} from "react-redux";
import {store} from "./Redux/Store";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Body} from './Components/Body/Body';
import {AppLinks} from "./AppGlobal/AppGlobalTypes/Links";
import {LandingPage} from "./Components/Landing/Landing";
import HeaderDrawer from "./Components/HeaderDrawer/HeaderDrawer";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/'
                       render={() => <Redirect to={AppLinks.AppRedirect}/>}/>
                <Route path={AppLinks.AppRedirect} render={() => (

                    <AppUIContainer/>

                    /*// Временно отстранен. Портит всю разметку Body
                    <HeaderNavBarMagicContainer
                        NavBar={<NavBar/>}
                        Body={<Body/>}
                    />*/
                    )}/>

                <Route path={AppLinks.LandingPage} render={() => <LandingPage/>}/>
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


const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache()
});


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
