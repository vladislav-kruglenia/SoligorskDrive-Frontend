import React, {FC, useMemo} from "react";
import style from "../../../../../../../../../../OrderForm.module.scss";
import {HaltChoiceProps, HaltsArray, HaltType} from "./HaltChoice.types";
import {NativeSelectComponent} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/NativeSelect/NativeSelectComponent";

export const HaltChoice: FC<HaltChoiceProps> = () => {
    const HaltsOptionsArray = useMemo(() => {
        return halts.map((halt: HaltType) => <option key={halt.haltId} value={halt.haltId}>
                {halt.haltName}
            </option>
        )
    }, []);

    return <div className={style.DirectionChoice}>
        <NativeSelectComponent
            labelText={'Выбор остановки'}
            errorText={'Остановка не выбрана'}
            OptionsArray={HaltsOptionsArray}
            editOptionValue={value => {}}
        />
    </div>
};


const halts: HaltsArray = [
    {haltId: "1", haltName: "Остановка 1"},
    {haltId: "2", haltName: "Остановка 2"},
];

