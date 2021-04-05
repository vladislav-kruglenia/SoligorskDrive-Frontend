import 'date-fns';
import React, {FC, memo, useCallback} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {KeyboardDatePickerProps} from "./DateChoice.types";
import {useDispatch, useSelector} from "react-redux";
import {getDateSelector} from "../../../../../../../../../../../../../../Redux/OrderForm/OrderForm.selectors";
import {EditDatePayload} from "../../../../../../../../../../../../../../Redux/OrderForm/Types/Actions.types";
import {editDate} from "../../../../../../../../../../../../../../Redux/OrderForm/OrderForm.reducer";


export const DateChoice = () => {
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

    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <KeyboardDatePickerComponent
                    selectedDate={selectedDate}
                    handleDateChange={handleDateChange}
                />

            </MuiPickersUtilsProvider>
        </>

    );
};

const KeyboardDatePickerComponent:FC<KeyboardDatePickerProps> = (props) => {
    return <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Выберите дату"
        value={props.selectedDate}
        onChange={props.handleDateChange}
        KeyboardButtonProps={{
            'aria-label': 'change date',
        }}
    />
};

export const KeyboardDatePickerComponentMemo = memo(KeyboardDatePickerComponent);


