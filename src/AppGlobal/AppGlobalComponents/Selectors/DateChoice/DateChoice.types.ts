export interface DateChoiceProps extends KeyboardDatePickerProps{
    isTimePicker?: boolean,
    isDatePicker: boolean,
}

export type KeyboardDatePickerProps = {
    selectedDate: Date | null | string,
    handleDateChange: (date: Date | null) => void,
}