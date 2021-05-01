import React from "react";
import style from "./Logo.module.scss"

export const Logo = () => {
    return <div className={style.Logo}>
        <LogoTitle/>
    </div>
};

export const Letters = () => {
    return <div className={style.Letters}>
        <div className={style.logoLetter}>S</div>
        <div className={style.logoLetter}>&</div>
        <div className={style.logoLetter}>D</div>
    </div>
};

export const LogoTitle = () => {
    return <div className={style.LogoTitle}>SoligorskDrive</div>
};


