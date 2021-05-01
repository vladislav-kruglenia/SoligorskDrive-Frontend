import React, {useState} from "react";
import style from "./UserProfileData.module.scss"
import {DisplayUserProfileData} from "./Components/UserProfileDataDisplay/DisplayUserProfileData";
import {Divider, Paper, Typography} from "@material-ui/core";
import {MainUserProfileData} from "./Components/UserProfileDataDisplay/UserProfileDataDisplay.types";
import {UserProfileDataForm} from "./Components/UserProfileDataForm/UserProfileDataForm";
import {ValueDisplay} from "../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {FormTypeEnum} from "../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";

export const UserProfileData = () => {
    const [editMode, setEditMode] = useState(false);

    return <Paper className={style.UserProfileData}>
        <Typography variant={'h4'}>Мои данные</Typography>
        <Divider/>
        <div className={style.profileDataWrapper}>
            <ValueDisplay
                type={FormTypeEnum.grandForm}
                displayType={DisplayTypeEnum.component}
                editModeStatus={editMode}
                setEditModeInProps={value => setEditMode(value)}
                displayComponent={
                    <DisplayUserProfileData
                        userData={userProfileData}
                    />
                }
                grandFormComponent={
                    <UserProfileDataForm
                        userData={userProfileData}
                        exitEditMode={() => setEditMode(false)}
                        editUserData={values => {}}
                    />
                }
            />
        </div>
    </Paper>
};

const userProfileData: MainUserProfileData = {
    userName: "Антон Петрович",
    userLogin: "32334309anton@gmail.com",
    userPhone: "+375293817500",
};

