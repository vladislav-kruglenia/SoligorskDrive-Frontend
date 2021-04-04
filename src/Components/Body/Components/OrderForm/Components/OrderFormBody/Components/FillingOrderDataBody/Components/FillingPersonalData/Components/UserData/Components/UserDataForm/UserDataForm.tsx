import React, {FC} from "react";
import style from "./UserDataForm.module.scss"
import * as yup from "yup";
import {useFormik} from "formik";
import {Button, TextField} from "@material-ui/core";
import {UserDataFormProps, UserOrderData} from "./UserDataForm.types";

export const UserDataForm:FC<UserDataFormProps> = (props) => {

    const validationSchema = yup.object({
        userName: yup
            .string()
            .nullable()
            .required('Это поле обязательно'),
        userPhone: yup
            .string()
            .nullable()
            .required('Это поле обязательно'),
        userNumberSeats: yup
            .number()
            .min(0, 'Введите положительное число')
            .max(props.remainingNumberSeats, `Доступное количество мест: ${props.remainingNumberSeats}`)
            .nullable()
            .required('Это поле обязательно'),
    });

    const valuesForm: UserOrderData = {
        userName: props.userName,
        userPhone: props.userPhone,
        userNumberSeats: props.userNumberSeats,
    };
    const Form = useFormik({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        onSubmit: (values: UserOrderData) => {
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
            <TextField className={style.textField} id="userNumberSeats" type={'number'}
                       label={"Количество мест"} variant="outlined" size={"small"}
                       value={Form.values.userNumberSeats}
                       onChange={Form.handleChange}
                       error={Form.touched.userNumberSeats && Boolean(Form.errors.userNumberSeats)}
                       helperText={Form.touched.userNumberSeats && Form.errors.userNumberSeats}
            />
        </div>

        <Button className={style.formButton} size={"small"} href={''}
                color="default" variant="outlined" type="submit">
            Сохранить
        </Button>
    </form>
};