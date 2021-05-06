import React, {useCallback} from 'react';
import 'date-fns';
import {useDispatch, useSelector} from "react-redux";
import {getDateSelector} from "../../../../../../../../../../../../../../../Redux/OrderForm/Selectors/OrderForm.selectors";
import {EditDatePayload} from "../../../../../../../../../../../../../../../Redux/OrderForm/Types/Actions.types";
import {editDate} from "../../../../../../../../../../../../../../../Redux/OrderForm/OrderForm.reducer";
import {DateChoice} from "../../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/Selectors/DateChoice/DateChoice";


export const DateChoiceContainer = () => {
    const selectedDate = useSelector(getDateSelector);

    const dispatch = useDispatch();
    const editDateAction = useCallback((date: Date) => {
      const action: EditDatePayload = {date};
      return dispatch(editDate(action))
    }, [dispatch]);

    // The first commit of Material-UI
    // const [selectedDate, setSelectedDate] = React.useState<Date | null | string>(currentDate);

    const handleDateChange = useCallback((date: Date | null) => {
        if(date) editDateAction(date);
    }, [editDateAction]);

    return <DateChoice
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
        isDatePicker={true}
    />;
};




