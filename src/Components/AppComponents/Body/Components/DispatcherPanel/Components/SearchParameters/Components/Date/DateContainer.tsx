import React, {FC, memo, useCallback} from "react";
import {DateChoice} from "../../../../../../../../../AppGlobal/AppGlobalComponents/Selectors/DateChoice/DateChoice";
import {DateContainerProps} from "./DateContainer.types";

export const DateContainer:FC<DateContainerProps> = (props) => {
    const {currentDate, editDate, isDatePicker, isTimePicker} = props;

    const handleDateChange = useCallback((date: Date | null) => {
        if(date) editDate(date);
    }, [editDate]);

    return <div>
        <DateChoice
            selectedDate={currentDate}
            handleDateChange={handleDateChange}
            isTimePicker={isTimePicker}
            isDatePicker={isDatePicker}
        />
    </div>
};

export const DateContainerMemo = memo(DateContainer);