export type KeyboardDatePickerProps = {
    selectedDate: Date | null | string,
    handleDateChange: (date: Date | null) => void,
}