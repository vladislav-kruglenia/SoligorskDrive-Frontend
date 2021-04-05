import React, {useState} from "react";
import style from "./UserData.module.scss"
import {Typography} from "@material-ui/core";
import {DisplayUserData} from "./Components/DisplayUserData/DisplayUserData";
import {UserDataForm} from "./Components/UserDataForm/UserDataForm";
import {ValueDisplay} from "../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {DisplayTypeEnum} from "../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {FormTypeEnum} from "../../../../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {useSelector} from "react-redux";
import {
    getRemainingNumberSeatsSelector,
    getUserOrderDataSelector
} from "../../../../../../../../../../../../Redux/OrderForm/OrderForm.selectors";

export const UserData = () => {
    const userOrderData = useSelector(getUserOrderDataSelector);
    const remainingNumberSeats = useSelector(getRemainingNumberSeatsSelector);

    const [editMode, setEditMode] = useState(false);

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
                exitEditMode={() => setEditMode(false)}
            />}
        />
    </div>
};

