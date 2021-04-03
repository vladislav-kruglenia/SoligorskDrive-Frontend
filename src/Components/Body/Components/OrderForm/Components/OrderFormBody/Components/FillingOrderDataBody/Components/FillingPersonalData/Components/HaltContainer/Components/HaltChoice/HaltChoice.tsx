import React, {FC, useMemo, useState} from "react";
import style from "../../../../../../../../../../OrderForm.module.scss";
import {Directions} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";
import {FormControl, FormHelperText, InputLabel, NativeSelect} from "@material-ui/core";
import {HaltChoiceProps, HaltsArray, HaltType} from "./HaltChoice.types";

export const HaltChoice: FC<HaltChoiceProps> = (props) => {
    const [haltType, editHalt] = useState(props.haltName);

    const isTypeNotSelected = haltType === Directions.none;
    const errorText = isTypeNotSelected &&
        <FormHelperText component={'span'}>Остановка не выбрана</FormHelperText>;

    const haltsOptionsArray = useMemo(() => {
        return halts.map((halt: HaltType) => <option key={halt.haltId} value={halt.haltId}>
                {halt.haltName}
            </option>
        )
    }, []);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        editHalt(event.target.value as Directions); // TODO: тут должен быть AC editDirection
    };

    return <div className={style.DirectionChoice}>
        <FormControl component={'form'} className={style.formControl} error={isTypeNotSelected}>
            <InputLabel htmlFor="age-native-helper">Направление рейса</InputLabel>
            <NativeSelect
                value={haltType}
                onChange={handleChange}
                /*inputProps={{
                    name: 'age',
                    id: 'age-native-helper',
                }}*/
            >
                <option value={Directions.none}>Не выбрано</option>
                {/*<option value={Directions.none}>Не выбрано</option>
                <option value={Directions.toSoligorsk}>Минск - Солигорск</option>
                <option value={Directions.toMinsk}>Солигорск - Минск</option>*/}
                {haltsOptionsArray}
            </NativeSelect>
            {errorText}
        </FormControl>
    </div>
};


const halts: HaltsArray = [
    {haltId: "1", haltName: "Остановка 1"},
    {haltId: "2", haltName: "Остановка 2"},
];

