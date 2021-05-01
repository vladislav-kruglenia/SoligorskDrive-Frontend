import React, {FC} from "react";
import style from "./DateChoice.module.scss"
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {DateChoiceProps, KeyboardDatePickerProps} from "./DateChoice.types";

export const DateChoice:FC<DateChoiceProps> = (props) => {
    const {selectedDate, handleDateChange, isTimePicker, isDatePicker} = props;
    const TimePicker = isTimePicker && <KeyboardTimePickerComponent
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
    />;


    const DatePicker = isDatePicker && <KeyboardDatePickerComponent
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
    />;



    return (
        <div className={style.DateChoice}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className={style.pickers}>
                    {DatePicker}
                    {TimePicker}
                </div>
            </MuiPickersUtilsProvider>
        </div>

    );
};


const KeyboardDatePickerComponent: FC<KeyboardDatePickerProps> = (props) => {
    return <div className={style.picker}>
        <KeyboardDatePicker
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
    </div>
};

const KeyboardTimePickerComponent: FC<KeyboardDatePickerProps> = (props) => {
    const {selectedDate, handleDateChange} = props;

    return <div className={style.picker}>
        <KeyboardTimePicker
            margin="normal"
            id="Выберите время"
            label="Time picker"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
                'aria-label': 'change time',
            }}
        />
    </div>
};

