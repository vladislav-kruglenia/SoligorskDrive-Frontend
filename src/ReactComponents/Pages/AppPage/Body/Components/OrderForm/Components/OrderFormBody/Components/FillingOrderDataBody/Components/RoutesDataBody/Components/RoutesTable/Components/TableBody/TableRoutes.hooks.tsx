import React, {FC, useMemo} from "react";
import {TableRowTravelsInfoProps, TravelInfoType} from "./TableBody.types";
import style from "./TableBody.module.scss";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import {OrderButtonContainer} from "./Components/OrderButtonContainer/OrderButtonContainer";
import {useSelector} from "react-redux";
import {
    getDirectionSelector,
    getIndexActiveTravelSelector
} from "../../../../../../../../../../../../../../../../Redux/OrderForm/Selectors/OrderForm.selectors";
import {DirectionsEnum} from "../../../../../../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";

export const useTravelsInfoRows = (travelsInfo: TravelInfoType[]) => {
    const indexActiveTravel = useSelector(getIndexActiveTravelSelector);
    const currentDirection = useSelector(getDirectionSelector);
    const isNotCurrentDirection = currentDirection === DirectionsEnum.none;

    return useMemo(() => (
        travelsInfo.map((travel: TravelInfoType, index) => {
            const {priceTravel, startHourTravel, remainingNumberSeats} = travel;
            const isActiveTableRow = indexActiveTravel === index;
            const tableRowStyle: string = isActiveTableRow ? style.activeTableRow : style.tableRow;

            return (
                <TableRowTravelsInfo
                    key={startHourTravel}
                    tableRowStyle={tableRowStyle}
                    isNotCurrentDirection={isNotCurrentDirection}
                    indexActiveTravel={indexActiveTravel}
                    remainingNumberSeats={remainingNumberSeats}
                    priceTravel={priceTravel}
                    startHourTravel={startHourTravel}
                    indexRow={index}
                />
            )
        })
    ), [travelsInfo, indexActiveTravel, isNotCurrentDirection]);
};


export const TableRowTravelsInfo: FC<TableRowTravelsInfoProps> = (props) => {
    const {
        startHourTravel, isNotCurrentDirection, indexActiveTravel,
        priceTravel, remainingNumberSeats, indexRow, tableRowStyle
    } = props;

    return (
        <TableRow className={tableRowStyle}>
            <TableCell align={"center"}>{startHourTravel}:00</TableCell>
            <TableCell align={"center"}>{startHourTravel + 1}:45</TableCell>
            <TableCell align={"center"}>{priceTravel}р.</TableCell>
            <TableCell align={"center"}>{remainingNumberSeats}</TableCell>
            <TableCell>
                <OrderButtonContainer
                    startHourTravel={startHourTravel}
                    priceTravel={priceTravel}
                    indexTravel={indexRow}
                    indexActiveTravel={indexActiveTravel}
                    remainingNumberSeats={remainingNumberSeats}
                    isNotCurrentDirection={isNotCurrentDirection}
                />
            </TableCell>
        </TableRow>
    )
};
