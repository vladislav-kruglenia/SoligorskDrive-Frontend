import React, {FC} from "react";
import style from "./Logo.module.scss"
import {LogoProps, LogoTitleProps} from "./Logo.types";

export const Logo:FC<LogoProps> = (props) => {
    return <div className={style.Logo}>
        <LogoTitle size={props.size || "default"}/>
    </div>
};

export const LogoTitle: FC<LogoTitleProps> = (props) => {
    const sizeStyle = props.size === "large" ? style.largeSize : style.defaultSize;

    return <div className={style.LogoTitle}>
        <div className={sizeStyle}>
            SoligorskDrive
        </div>
    </div>
};

/*
export const Letters = () => {
    return <div className={style.Letters}>
        <div className={style.logoLetter}>S</div>
        <div className={style.logoLetter}>&</div>
        <div className={style.logoLetter}>D</div>
    </div>
};
*/


