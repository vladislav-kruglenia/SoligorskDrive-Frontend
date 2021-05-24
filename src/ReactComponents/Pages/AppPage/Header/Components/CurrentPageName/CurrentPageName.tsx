import React from "react";
import style from "./CurrentPageName.module.scss"
import Typography from "@material-ui/core/Typography";
import {useSelector} from "react-redux";
import {getCurrentPageDataSelector} from "../../../../../../Redux/App/App.selectors";

export const CurrentPageName = () => {
    const {currentPageName} = useSelector(getCurrentPageDataSelector);

    return (
        <Typography variant="h6" noWrap className={style.CurrentPageName}>
            {currentPageName}
        </Typography>
    )
};