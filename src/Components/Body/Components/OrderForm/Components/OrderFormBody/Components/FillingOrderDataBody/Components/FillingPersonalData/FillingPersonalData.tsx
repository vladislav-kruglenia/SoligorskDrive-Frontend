import React from "react";
import style from "./FillingPersonalData.module.scss"
import {HaltContainer} from "./Components/HaltContainer/HaltContainer";
import {UserData} from "./Components/UserData/UserData";
import {TotalPrice} from "./Components/TotalPrice/TotalPrice";
import {Divider, Paper} from "@material-ui/core";
import {SendOrderButtonContainer} from "./Components/SendOrderButtonContainer/SendOrderButtonContainer";
import {useSelector} from "react-redux";
import {
    getHaltDataSelector,
    getIsFilledUpContactsSelector
} from "../../../../../../../../../../Redux/OrderForm/OrderForm.selectors";
import {ErrorEnum} from "../../../../../../../../../../AppGlobal/AppGlobalTypes/Enums";

export const FillingPersonalData = () => {
    const {selectedHaltLabel, haltTime} = useSelector(getHaltDataSelector);
    const isFilledUpContacts = useSelector(getIsFilledUpContactsSelector);
    const isSelectedHaltLabel = selectedHaltLabel !== ErrorEnum.None;
    const isDisabledSendOrderButton = !isSelectedHaltLabel || !isFilledUpContacts;

    return <Paper className={style.FillingPersonalData}>
        <UserData isFilledUpContacts={isFilledUpContacts}/>
        <HaltContainer
            selectedHaltLabel={selectedHaltLabel}
            haltTime={haltTime}
            isSelectedHaltLabel={isSelectedHaltLabel}
        />
        <Divider/>
        <TotalPrice/>
        <SendOrderButtonContainer isDisabledSendOrderButton={isDisabledSendOrderButton}/>
    </Paper>
};


