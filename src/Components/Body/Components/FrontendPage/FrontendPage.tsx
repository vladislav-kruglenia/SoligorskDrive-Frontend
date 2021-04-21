import React from "react";
import style from "./FrontendPage.module.scss"
import solig from "../../../../img/solig.jpg";


export const FrontendPage = () => {
    return <div className={style.FrontendPage}>
        <img src={solig} alt=""/>
    </div>
};