import React from "react";
import style from "./UserProfile.module.scss"
import {UserProfileData} from "./Components/UserProfileData/UserProfileData";
import {ChangePassword} from "./Components/ChangePassword/ChangePassword";

export const UserProfile = () => {
    return <div className={style.UserProfile}>
        <UserProfileData/>
        <ChangePassword/>
    </div>
};

