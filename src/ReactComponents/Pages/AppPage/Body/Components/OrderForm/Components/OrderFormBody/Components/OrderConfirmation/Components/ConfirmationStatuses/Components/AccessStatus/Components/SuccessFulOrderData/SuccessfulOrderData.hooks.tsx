import {useSelector} from "react-redux";
import {getCreateOrderDataSelector} from "../../../../../../../../../../../../../../../../Redux/OrderForm/Selectors/CreateOrderData.selector";
import React, {useMemo} from "react";
import {SuccessfulOrderDataElementProps} from "./SuccessfulOrderData.types";
import {DirectionsNamesEnum} from "../../../../../../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {SuccessfulOrderDataElement} from "./SuccessfulOrderData";
import {Divider} from "@material-ui/core";

export const useSuccessfulOrderDataArr = () => {
    const createOrderData = useSelector(getCreateOrderDataSelector);
    const {mainOrderData, secondaryOrderData} = createOrderData;
    const {direction, date, startHour} = mainOrderData;
    const {haltTime, haltName, numberSeatsOrdered, orderPrice} = secondaryOrderData;

    const successfulOrderDataArr = useMemo<SuccessfulOrderDataElementProps[]>(() => [
        {title: 'Направление', value: DirectionsNamesEnum[direction]},
        {title: 'Дата', value: date},
        {title: 'Остановка', value: haltName},
        {title: 'Время отправления', value: `${startHour}:${haltTime}`},
        {title: 'Количество мест', value: String(numberSeatsOrdered)},
        {title: 'Итоговая сумма заказа', value: `${orderPrice} р.`},

    ], [
        direction, date,
        haltTime, haltName, startHour,
        numberSeatsOrdered, orderPrice,
    ]);

    return  useMemo(() => {
            return successfulOrderDataArr.map((data) => <React.Fragment>
                <Divider/>
                <SuccessfulOrderDataElement title={data.title} value={data.value}/>
            </React.Fragment>)
        },
        [successfulOrderDataArr]);
};