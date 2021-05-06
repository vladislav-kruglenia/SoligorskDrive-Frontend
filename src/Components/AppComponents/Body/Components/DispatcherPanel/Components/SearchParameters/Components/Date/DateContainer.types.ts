export type DateContainerProps = {
    isTimePicker: boolean,
    isDatePicker: boolean,
    currentDate: Date,
    editDate: (currentDate: Date) => void,
}