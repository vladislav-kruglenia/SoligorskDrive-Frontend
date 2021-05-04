import React, {FC, useCallback, useState} from "react";
import style from "./UserData.module.scss"
import {Typography} from "@material-ui/core";
import {DisplayUserData} from "./Components/DisplayUserData/DisplayUserData";
import {UserDataForm} from "./Components/UserDataForm/UserDataForm";
import {ValueDisplay} from "../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {DisplayTypeEnum} from "../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {FormTypeEnum} from "../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {useDispatch, useSelector} from "react-redux";
import {
    getRemainingNumberSeatsSelector,
    getUserOrderDataSelector
} from "../../../../../../../../../../../../Redux/OrderForm/Selectors/OrderForm.selectors";
import {
    EditUserOrderDataPayload,
    UserOrderData
} from "../../../../../../../../../../../../Redux/OrderForm/Types/Actions.types";
import {editUserOrderData} from "../../../../../../../../../../../../Redux/OrderForm/OrderForm.reducer";
import {UserDataProps} from "./UserData.types";

export const UserData:FC<UserDataProps> = (props) => {
    const {isFilledUpContacts} = props;
    const userOrderData = useSelector(getUserOrderDataSelector);
    const remainingNumberSeats = useSelector(getRemainingNumberSeatsSelector);


    const dispatch = useDispatch();
    const editUserOrderDataAction = useCallback((userOrderData: UserOrderData) => {
        const action: EditUserOrderDataPayload = userOrderData;
        return dispatch(editUserOrderData(action))
    }, [dispatch]);

    const [editMode, setEditMode] = useState(true);

    return <div className={style.UserData}>
        <Typography className={style.userDataTitle} variant={'h5'}>Ваши контакты и количество мест</Typography>
        <ValueDisplay
            displayType={DisplayTypeEnum.component}
            editModeStatus={editMode}
            type={FormTypeEnum.grandForm}
            setEditModeInProps={value => setEditMode(value)}
            displayComponent={<DisplayUserData userOrderData={userOrderData}/>}
            grandFormComponent={<UserDataForm
                userOrderData={userOrderData}
                remainingNumberSeats={remainingNumberSeats}
                editUserOrderData={userOrderData1 => editUserOrderDataAction(userOrderData1)}
                exitEditMode={() => setEditMode(false)}
            />}
            isNotAllowedToExitEditMode={!isFilledUpContacts}
        />
    </div>
};

