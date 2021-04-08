import React, {FC} from "react";
import * as yup from "yup";
import {useFormik} from "formik";
import style
    from "../../../../../../../../AppGlobal/AppGlobalStyles/Forms/UserDataForm/UserDataForm.module.scss";
import {Button, TextField} from "@material-ui/core";
import {UserProfileDataFormProps} from "./UserProfileDataForm.types";
import {MainUserProfileData} from "../UserProfileDataDisplay/UserProfileDataDisplay.types";

export const UserProfileDataForm:FC<UserProfileDataFormProps> = (props) => {
    const {userName, userPhone, userLogin} = props.userData;

    const validationSchema = yup.object({
        userName: yup
            .string()
            .nullable()
            .required('Это поле обязательно'),
        userPhone: yup
            .string()
            .nullable()
            .required('Это поле обязательно'),
        userLogin: yup
            .string()
            .nullable()
            .required('Это поле обязательно'),
    });

    const valuesForm: MainUserProfileData = {
        userName: userName,
        userPhone: userPhone,
        userLogin: userLogin,
    };

    const Form = useFormik({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        onSubmit: (values: MainUserProfileData) => {
            props.editUserData(values);
            props.exitEditMode();
            console.log(values);
        }
    });

    return <form className={style.UserDataForm} onSubmit={Form.handleSubmit}>
        <div className={style.inputs}>
            <TextField className={style.textField} id="userName"
                       label={"Ваше имя"} variant="outlined" size={"small"}
                       value={Form.values.userName}
                       onChange={Form.handleChange}
                       error={Form.touched.userName && Boolean(Form.errors.userName)}
                       helperText={Form.touched.userName && Form.errors.userName}
                       autoFocus={true}
            />
            <TextField className={style.textField} id="userPhone"
                       label={"Ваш телефон"} variant="outlined" size={"small"}
                       value={Form.values.userPhone}
                       onChange={Form.handleChange}
                       error={Form.touched.userPhone && Boolean(Form.errors.userPhone)}
                       helperText={Form.touched.userPhone && Form.errors.userPhone}
            />
            <TextField className={style.textField} id="userLogin"
                       label={"Ваш логин"} variant="outlined" size={"small"}
                       value={Form.values.userLogin}
                       onChange={Form.handleChange}
                       error={Form.touched.userLogin && Boolean(Form.errors.userLogin)}
                       helperText={Form.touched.userLogin && Form.errors.userLogin}
            />
        </div>

        <Button className={style.formButton} size={"small"} href={''}
                color="default" variant="outlined" type="submit">
            Сохранить
        </Button>
    </form>
};

