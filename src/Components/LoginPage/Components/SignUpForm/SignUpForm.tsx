import React, {FC} from "react";
import style from "../LoginForm/LoginForm.module.scss";
import * as yup from "yup";
import {useFormik} from "formik";
import { v4 as uuidv4 } from 'uuid';
import InputMask from "react-input-mask";
import {Button, FormHelperText, TextField} from "@material-ui/core";
import {SignUpFormProps, SignUpFormTypes} from "./SignUpForm.types";
import {CreateUserAccount} from "../../../../GraphQLServer/Mutations/SignUp/Types/SignUpVar.types";

export const SignUpForm:FC<SignUpFormProps> = (props) => {
    const {serverError, signUpMutation} = props;
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
        userNumberPhone: yup
            .string()
            .test('Phone not write', "Номер введен не полностью", (value) => value ? !(value.match(/_/)) : false)
            .required('Это поле обязательно'),
    });

    const Form = useFormik<SignUpFormTypes>({
        initialValues: {userName:'', userLogin: '', userPassword: '', userNumberPhone: ''},
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            const createUserAccountData: CreateUserAccount = {...values, idUser: uuidv4()};
            await signUpMutation({
                variables: {createUserAccountData}
            })
        }
    });

    const ErrorText = serverError && <FormHelperText>Ошибка. Проверьте введенные данные</FormHelperText>;

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
            <InputMask
                mask="+375 (99) 999-99-99"
                value={Form.values.userNumberPhone}
                onChange={Form.handleChange}
            >
                {() => (
                    <TextField  id="userNumberPhone" className={style.textField}
                                label={"Ваш телефон"} variant="outlined" size={"medium"}
                                error={Form.touched.userNumberPhone && Boolean(Form.errors.userNumberPhone)}
                                helperText={Form.touched.userNumberPhone && Form.errors.userNumberPhone}
                    />
                )}
            </InputMask>
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
        {ErrorText}
        <Button className={style.formButton} size={"large"} href={''}
                color="primary" variant={"contained"} type="submit">
            Отправить
        </Button>
    </form>
};
