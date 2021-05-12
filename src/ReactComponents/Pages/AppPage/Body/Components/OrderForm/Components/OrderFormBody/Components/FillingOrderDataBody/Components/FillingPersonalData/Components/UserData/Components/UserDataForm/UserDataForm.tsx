import React, {FC} from "react";
import style
    from "../../../../../../../../../../../../../../../../AppGlobal/AppGlobalStyles/Forms/UserDataForm/UserDataForm.module.scss"
import * as yup from "yup";
import {useFormik} from "formik";
import {Button, TextField} from "@material-ui/core";
import {UserDataFormProps} from "./UserDataForm.types";
import {UserOrderData} from "../../../../../../../../../../../../../../../../Redux/OrderForm/Types/Actions.types";
import InputMask from 'react-input-mask';


export const UserDataForm: FC<UserDataFormProps> = (props) => {
    const {userName, userPhone, userNumberSeats} = props.userOrderData;

    const validationSchema = yup.object({
        userName: yup
            .string()
            .nullable()
            .max(30, 'Не более 30 символов')
            .required('Это поле обязательно'),
        userPhone: yup
            .string()
            .test('Phone not write', "Номер введен не полностью", (value) => value ? !(value.match(/_/)) : false)
            .required('Это поле обязательно'),
        userNumberSeats: yup
            .number()
            .min(0, 'Введите положительное число')
            .max(props.remainingNumberSeats, `Доступное количество мест: ${props.remainingNumberSeats}`)
            .nullable()
            .required('Это поле обязательно'),
    });

    const valuesForm: UserOrderData = {
        userName: userName,
        userPhone: userPhone,
        userNumberSeats: userNumberSeats,
    };
    const Form = useFormik({
        initialValues: valuesForm,
        validationSchema: validationSchema,
        onSubmit: (values: UserOrderData) => {
            props.editUserOrderData(values);
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
            <InputMask
                mask="+375 (99) 999-99-99"
                value={Form.values.userPhone}
                onChange={Form.handleChange}
            >
                {() => (
                    <TextField  id="userPhone" className={style.textField}
                               label={"Ваш телефон"} variant="outlined" size={"small"}
                               error={Form.touched.userPhone && Boolean(Form.errors.userPhone)}
                               helperText={Form.touched.userPhone && Form.errors.userPhone}
                    />
                )}
            </InputMask>

            <TextField className={style.textField} id="userNumberSeats" type={'number'}
                       label={"Количество мест"} variant="outlined" size={"small"}
                       InputProps={{inputProps: {min: 1}}}
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