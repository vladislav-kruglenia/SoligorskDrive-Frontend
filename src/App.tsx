import React from 'react';
import './App.scss';
import {Provider} from "react-redux";
import {store} from "./Redux/Store";
import HeaderNavBarMagicContainer from "./Components/PersistentDrawerLeft/PersistentDrawerLeft";
import {BrowserRouter} from "react-router-dom";
import { Body } from './Components/Body/Body';
import {NavBar} from "./Components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <HeaderNavBarMagicContainer
                NavBar={<NavBar/>}
                Body={<Body/>}
            />
        </div>
    );
}

export const AppContainer = () => {
    return <>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </>
};


export default AppContainer;
