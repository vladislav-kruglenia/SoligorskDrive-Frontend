import 'date-fns';
import React, {FC, memo, useCallback} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {KeyboardDatePickerProps} from "./DateChoice.types";
import {getDate} from "../../../../../../../../../../../../../../Redux/OrderForm/OrderForm.reducer-functions";


export const DateChoice = () => {

    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
    );

    const handleDateChange = useCallback((date: Date | null) => {
        const newDate = date
            ? getDate(date)
            : null;

        console.log(newDate);
        setSelectedDate(date);
    }, [setSelectedDate]);

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


