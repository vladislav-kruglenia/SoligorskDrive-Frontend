import React from "react";
import * as yup from "yup";
import {useFormik} from "formik";
import style from "../LoginForm/LoginForm.module.scss";
import {Button, TextField} from "@material-ui/core";
import {SignUpFormTypes} from "./SignUpForm.types";

export const SignUpForm = () => {
    const validationSchema = yup.object({
        userName: yup
            .string()
            .nullable()
            .max(30, 'Не более 30 символов')
            .required('Это поле обязательно'),
        userLogin: yup
            .string()
            .nullable()
            .max(30, 'Не более 30 символов')
            .required('Это поле обязательно'),
        userPassword: yup
            .string()
            .nullable()
            .max(30, 'Не более 30 символов')
            .required('Это поле обязательно'),
    });

    const Form = useFormik<SignUpFormTypes>({
        initialValues: {userName:'', userLogin: '', userPassword: ''},
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return <form className={style.LoginForm} onSubmit={Form.handleSubmit}>
        <div className={style.inputs}>
            <TextField className={style.textField} id="userName"
                       label={"Ваше имя"} variant={"outlined"} size={"medium"}
                       value={Form.values.userName}
                       onChange={Form.handleChange}
                       error={Form.touched.userName && Boolean(Form.errors.userName)}
                       helperText={Form.touched.userName && Form.errors.userName}
                       autoFocus={true}
            />
            <TextField className={style.textField} id="userLogin"
                       label={"Ваш логин"} variant={"outlined"} size={"medium"}
                       value={Form.values.userLogin}
                       onChange={Form.handleChange}
                       error={Form.touched.userLogin && Boolean(Form.errors.userLogin)}
                       helperText={Form.touched.userLogin && Form.errors.userLogin}
            />
            <TextField className={style.textField} id="userPassword"
                       label={"Ваш пароль"} variant={"outlined"} size={"medium"}
                       value={Form.values.userPassword}
                       onChange={Form.handleChange}
                       error={Form.touched.userPassword && Boolean(Form.errors.userPassword)}
                       helperText={Form.touched.userPassword && Form.errors.userPassword}
            />
        </div>
        <Button className={style.formButton} size={"large"} href={''}
                color="primary" variant={"contained"} type="submit">
            Сохранить
        </Button>
    </form>
};
