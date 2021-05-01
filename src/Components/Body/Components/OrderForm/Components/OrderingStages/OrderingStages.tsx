import React, {FC, useMemo} from "react";
import style from "./OrderingStages.module.scss";
import {Paper, Step, StepLabel, Stepper} from "@material-ui/core";
import {HorizontalLinearStepperProps} from "./OrderingStages.types";
import {useSelector} from "react-redux";
import {getOrderStepsSelector} from "../../../../../../Redux/OrderForm/OrderForm.selectors";
import {StepType} from "../../../../../../Redux/OrderForm/Types/StartState.types";

export const OrderingStages = () => {
    const {indexActiveStep, stepsArr} = useSelector(getOrderStepsSelector);

    const Steps = useMemo(() => (
        stepsArr.map((step: StepType) => (
            <Step key={step.stepId}>
                <StepLabel>{step.stepLabel}</StepLabel>
            </Step>
        ))
    ), [stepsArr]);


    return <Paper className={style.OrderingStages}>
        <HorizontalLinearStepper
            Steps={Steps}
            indexActiveStep={indexActiveStep}
        />
    </Paper>

};

export const HorizontalLinearStepper: FC<HorizontalLinearStepperProps> = ({indexActiveStep, Steps}) => {
    return (
        <Stepper alternativeLabel activeStep={indexActiveStep} className={style.Stepper}>
            {Steps}
        </Stepper>
    );
};
