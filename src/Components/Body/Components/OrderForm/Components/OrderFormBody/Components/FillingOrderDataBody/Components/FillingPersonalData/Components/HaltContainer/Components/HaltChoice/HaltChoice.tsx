import React, {FC, useMemo} from "react";
import style from "./HaltChoice.module.scss"
import {HaltChoiceProps, HaltsArray, HaltType} from "./HaltChoice.types";
import {NativeSelectComponent} from "../../../../../../../../../../../../../../AppGlobal/AppGlobalComponents/MaterialUI/NativeSelect/NativeSelectComponent";
import {Halts} from "../../../../../../../../../../../../../../Redux/OrderForm/Classes/Halts.class";

export const HaltChoice: FC<HaltChoiceProps> = () => {
    const HaltsClass = new Halts();
    const haltsArray = HaltsClass.getHaltLabels();

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
            editOptionValue={value => {}}
        />
    </div>
};


const halts: HaltsArray = [
    {haltId: "1", haltName: "Остановка 1"},
    {haltId: "2", haltName: "Остановка 2"},
];

