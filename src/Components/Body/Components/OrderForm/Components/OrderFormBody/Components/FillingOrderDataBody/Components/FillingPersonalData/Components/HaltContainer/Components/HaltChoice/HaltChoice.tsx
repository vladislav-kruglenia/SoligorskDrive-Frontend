import React, {FC, useCallback, useMemo} from "react";
import style from "./HaltChoice.module.scss"
import {HaltChoiceProps} from "./HaltChoice.types";
import {NativeSelectComponent} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/NativeSelect/NativeSelectComponent";
import {Halts} from "../../../../../../../../../../../../../../Redux/OrderForm/Classes/Halts.class";
import {useDispatch} from "react-redux";
import {EditSelectedHaltDataPayload} from "../../../../../../../../../../../../../../Redux/OrderForm/Types/Actions.types";
import {editSelectedHaltData} from "../../../../../../../../../../../../../../Redux/OrderForm/OrderForm.reducer";

export const HaltChoice: FC<HaltChoiceProps> = () => {
    const HaltsClass = new Halts();
    const haltsArray = HaltsClass.getHaltLabels();

    const dispatch = useDispatch();
    const editSelectedHaltDataAction = useCallback((selectedHaltLabel: string) => {
        const action: EditSelectedHaltDataPayload = {selectedHaltLabel};
        return dispatch(editSelectedHaltData(action))
    }, [dispatch]);

    const HaltsOptionsArray = useMemo(() => {
        return haltsArray.map((halt: string) => <option key={halt} value={halt}>
                {halt}
            </option>
        )
    }, [haltsArray]);

    return <div className={style.HaltChoice}>
        <NativeSelectComponent
            labelText={'Выбор остановки'}
            errorText={'Остановка не выбрана'}
            OptionsArray={HaltsOptionsArray}
            editOptionValue={value => editSelectedHaltDataAction(value)}
        />
    </div>
};


/*
const halts: HaltsArray = [
    {haltId: "1", haltName: "Остановка 1"},
    {haltId: "2", haltName: "Остановка 2"},
];
*/

