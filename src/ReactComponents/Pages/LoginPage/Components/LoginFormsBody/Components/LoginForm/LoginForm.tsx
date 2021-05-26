import React, {FC} from "react";
import style from "./LoginForm.module.scss";
import * as yup from "yup";
import {useFormik} from "formik";
import {LoginFormProps, LoginFormTypes} from "./LoginForm.types";
import {Button, FormHelperText, TextField} from "@material-ui/core";

export const LoginForm: FC<LoginFormProps> = (props) => {
    const validationSchema = yup.object({
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

    const Form = useFormik<LoginFormTypes>({
        initialValues: {userLogin: '', userPassword: ''},
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await props.loginMutation({variables: {loginData: values}})
        }
    });

    const ErrorText = props.serverError && <FormHelperText>Ошибка. Проверьте введенные данные</FormHelperText>;

    return <form className={style.LoginForm} onSubmit={Form.handleSubmit}>
        <div className={style.inputs}>
            <TextField className={style.textField} id="userLogin"
                       label={"Введите логин"} variant={"outlined"} size={"medium"}
                       value={Form.values.userLogin}
                       onChange={Form.handleChange}
                       error={Form.touched.userLogin && Boolean(Form.errors.userLogin)}
                       helperText={Form.touched.userLogin && Form.errors.userLogin}
                       autoFocus={true}
            />
            <TextField className={style.textField} id="userPassword"
                       label={"Введите пароль"} variant={"outlined"} size={"medium"}
                       value={Form.values.userPassword}
                       onChange={Form.handleChange}
                       error={Form.touched.userPassword && Boolean(Form.errors.userPassword)}
                       helperText={Form.touched.userPassword && Form.errors.userPassword}
            />
            {ErrorText}
        </div>
        <Button className={style.formButton} size={"large"} href={''}
                color="primary" variant={"contained"} type="submit">
            Войти
        </Button>
    </form>
};