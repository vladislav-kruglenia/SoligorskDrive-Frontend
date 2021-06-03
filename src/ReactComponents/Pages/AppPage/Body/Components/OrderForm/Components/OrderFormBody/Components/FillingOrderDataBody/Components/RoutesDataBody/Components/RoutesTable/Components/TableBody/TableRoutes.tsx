import React, {FC} from "react";
import style from "./TableBody.module.scss"
import {TableBody} from "@material-ui/core";
import {TravelInfoType, TravelsInfoTableBodyProps, TravelsInfoTableProps} from "./TableBody.types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import {useTravelsInfoRows} from "./TableRoutes.hooks";


export const TravelsInfoTable: FC<TravelsInfoTableProps> = (props) => {
    const {travelsInfo} = props;
    const TableRows = useTravelsInfoRows(travelsInfo);

    return <TableContainer component={Paper} className={style.CurrentOrdersTable} style={{overflowX: "auto"}}>
        <Table className={style.table} aria-label="simple table">

            <TravelsInfoTableHead/>

            <TravelsInfoTableBody TableRows={TableRows}/>

        </Table>
    </TableContainer>
};



export const TravelsInfoTableHead = () => {
    return (
        <TableHead className={style.tableHead} style={{backgroundColor: "rgba(20, 33, 61, 0.2)"}}>
            <TableRow>
                <TableCell align={"center"}>Стартовое время</TableCell>
                <TableCell align={"center"}>Время прибытия</TableCell>
                <TableCell align={"center"}>Стоимость заказа</TableCell>
                <TableCell align={"center"}>Мест</TableCell>
                <TableCell/>
            </TableRow>
        </TableHead>
    )
};

export const TravelsInfoTableBody:FC<TravelsInfoTableBodyProps> = (props) => {
    return (
        <TableBody>
            {props.TableRows}
        </TableBody>
    )
};



export const travelsInfo: TravelInfoType[] = [
    {startHourTravel: 10, priceTravel: 9, remainingNumberSeats: 13},
    {startHourTravel: 11, priceTravel: 9, remainingNumberSeats: 13},
    {startHourTravel: 12, priceTravel: 9, remainingNumberSeats: 13},
    {startHourTravel: 13, priceTravel: 9, remainingNumberSeats: 13},
];