import React, {FC, useState} from "react";
import style from "../../../../../../../../../../OrderForm.module.scss";
import {FormControl, FormHelperText, InputLabel, NativeSelect} from "@material-ui/core";
import {Directions} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {DirectionChoiceProps} from "./DirectionChoice.types";

export const DirectionChoice:FC<DirectionChoiceProps> = (props) => {
    const [directionType, editDirection] = useState(props.directionType);

    const isTypeNotSelected = directionType === Directions.none;
    const errorText = isTypeNotSelected && <FormHelperText component={'span'}>Направление рейса не выбрано</FormHelperText>;

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        editDirection(event.target.value as Directions); // TODO: тут должен быть AC editDirection
    };

    return <div className={style.DirectionChoice}>
        <FormControl component={'form'} className={style.formControl} error={isTypeNotSelected}>
            <InputLabel htmlFor="age-native-helper">Направление рейса</InputLabel>
            <NativeSelect
                value={directionType}
                onChange={handleChange}
                /*inputProps={{
                    name: 'age',
                    id: 'age-native-helper',
                }}*/
            >
                <option value={Directions.none}>Не выбрано</option>
                <option value={Directions.toSoligorsk}>Минск - Солигорск</option>
                <option value={Directions.toMinsk}>Солигорск - Минск</option>
            </NativeSelect>
            {errorText}
        </FormControl>
    </div>
};


