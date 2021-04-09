import React, {useCallback, useState} from "react";
import {DateChoice} from "../../../../../../../../AppGlobal/AppGlobalComponents/Selectors/DateChoice/DateChoice";

export const DateContainer = () => {
    // const newDate = new Date();
    const [selectedDate, editDate] = useState(new Date());

    const handleDateChange = useCallback((date: Date | null) => {
        if(date) editDate(date);
    }, [editDate]);

    return <div>
        <DateChoice
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            isTimePicker={true}
        />
    </div>
};