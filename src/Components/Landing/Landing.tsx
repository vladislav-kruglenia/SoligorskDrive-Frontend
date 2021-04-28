import React from "react";
import style from "./LandingPage.module.scss"
import {LandingTitlePage} from "./Components/LandingTitlePage/LandingTitlePage";
import {LandingOrderForm} from "./Components/LandingOrderForm/LandingOrderForm";

export const LandingPage = () => {
    return <div className={style.LandingPage}>
        <LandingTitlePage/>
        <LandingOrderForm/>
    </div>
};

