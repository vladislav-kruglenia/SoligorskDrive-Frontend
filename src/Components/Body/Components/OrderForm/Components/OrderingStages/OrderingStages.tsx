import React, {FC, useState} from "react";
import style from "./OrderingStages.module.scss";
import {Step, StepLabel, Stepper} from "@material-ui/core";
import {HorizontalLinearStepperProps} from "./OrderingStages.types";

export const OrderingStages = () => {
    let [indexActiveStep, editIndexActiveStep] = useState(2);

    return <div className={style.OrderingStages}>
        <HorizontalLinearStepper indexActiveStep={indexActiveStep}/>
    </div>

};

export const HorizontalLinearStepper:FC<HorizontalLinearStepperProps> = ({indexActiveStep}) => {
    return (
        <Stepper alternativeLabel activeStep={indexActiveStep} className={style.Stepper}>
            <Step>
                <StepLabel>Выбор рейса</StepLabel>
            </Step>
            <Step>
                <StepLabel>Оформление заказа</StepLabel>
            </Step>
            <Step>
                <StepLabel>Заказ оформлен!</StepLabel>
            </Step>
        </Stepper>
    );
};
