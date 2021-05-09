import React, {memo} from "react";
import style from "./DisplayOrdersInfo.module.scss"
import {Paper, Typography} from "@material-ui/core";
import {useQueryDisplayOrdersInfo} from "./DisplayOrdersInfo.hooks";

export const DisplayOrdersInfo = () => {
    const RenderDataComponent = useQueryDisplayOrdersInfo();

    return <Paper className={style.DisplayOrdersInfo}>
        <Typography className={style.title} variant={"h6"}>Текущие рейсы</Typography>
        {RenderDataComponent}
    </Paper>
};

export const DisplayOrdersInfoMemo = memo(DisplayOrdersInfo);

/*const dispatcherOrdersArr: DispatcherOrdersData[] = [
    {
        date: '01/01/2021',
        time: 12,
        orders: [
            {idOrder: '142342', direction: DirectionsNamesEnum.toSoligorsk, clientName: "Антон Петрович", clientPhone: '+375293817500'},
            {idOrder: '2232321', direction: DirectionsNamesEnum.toSoligorsk, clientName: "Антон Петрович", clientPhone: '+375293817500'},
            {idOrder: '123232', direction: DirectionsNamesEnum.toSoligorsk, clientName: "Антон Петрович", clientPhone: '+375293817500'},
            {idOrder: '14245363', direction: DirectionsNamesEnum.toSoligorsk, clientName: "Антон Петрович", clientPhone: '+375293817500'},
        ]
    },

    {
        date: '02/01/2021',
        time: 10,
        orders: [
            {idOrder: '142342', direction: DirectionsNamesEnum.toSoligorsk, clientName: "Антон Петрович", clientPhone: '+375293817500'},
            {idOrder: '2232321', direction: DirectionsNamesEnum.toSoligorsk, clientName: "Антон Петрович", clientPhone: '+375293817500'},
            {idOrder: '123232', direction: DirectionsNamesEnum.toSoligorsk, clientName: "Антон Петрович", clientPhone: '+375293817500'},
            {idOrder: '14245363', direction: DirectionsNamesEnum.toSoligorsk, clientName: "Антон Петрович", clientPhone: '+375293817500'},
        ]
    },

];*/




