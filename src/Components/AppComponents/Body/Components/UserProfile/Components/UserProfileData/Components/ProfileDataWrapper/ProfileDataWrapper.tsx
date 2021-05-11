import React, {FC, useState} from "react";
import style from "./ProfileDataWrapper.module.scss";
import {ValueDisplay} from "../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/InputEditMode";
import {FormTypeEnum} from "../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/InputEditModeTypes";
import {DisplayTypeEnum} from "../../../../../../../../../AppGlobal/AppGlobalComponents/DisplayingDifferentData/Types/DisplayingDifferentDataTypes";
import {DisplayUserProfileData} from "../UserProfileDataDisplay/DisplayUserProfileData";
import {UserProfileDataFormMemo} from "../UserProfileDataForm/UserProfileDataForm";
import {ProfileDataWrapperProps} from "./ProfileDataWrapper.types";
import {useMutationUpdateUserData} from "../../UserProfileData.hooks";

export const ProfileDataWrapper:FC<ProfileDataWrapperProps> = (props) => {
    const {mutationData, mutationCallback} = useMutationUpdateUserData();
    const {userProfileData} = props;
    const [editMode, setEditMode] = useState(false);

    return <div className={style.ProfileDataWrapper}>
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
                <UserProfileDataFormMemo
                    userData={userProfileData}
                    exitEditMode={() => setEditMode(false)}
                    mutationData={mutationData}
                    editUserData={mutationCallback}
                />
            }
        />
    </div>
};