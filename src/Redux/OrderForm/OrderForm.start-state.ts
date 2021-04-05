import {SelectedHaltData, StartStateType} from "./Types/StartState.types";
import {DirectionsEnum, StepsEnum} from "../../AppGlobal/AppGlobalTypes/Enums";
import {getDate} from "./OrderForm.helper-functions";
import {Halts} from "./Classes/Halts.class";

export class StartStateOrderForm {
    currentDate = new Date();
    // currentDate = getDate(new Date());



    getStartState(): StartStateType {
        return {
            orderSteps: {
                indexActiveStep: 2,
                stepsArr: [
                    {stepId: StepsEnum.ChoiceRoute, stepLabel: 'Выбор рейса'},
                    {stepId: StepsEnum.FillingData, stepLabel: 'Оформление заказа'},
                    {stepId: StepsEnum.OrderConfirmation, stepLabel: 'Заказ оформлен!'},
                ],
            },
            seats: {remainingNumberSeats: 12, userNumberSeats: 1},
            selectedDirection: DirectionsEnum.none,
            selectedDate: this.currentDate,
            haltData: this._getHaltsStartData(),
            userContacts: {
                isFilledUp: false,
                userName: '',
                userPhone: '',
            },
            prices: {
                orderPrice: 0,
                tariffPrice: 9,
            },
            startHour: 0,
        }
    }

    private _getHaltsStartData(): SelectedHaltData{
        const {haltLabel, haltTime} = new Halts().haltsArray[0];
        return {
            selectedHaltLabel: haltLabel,
            haltTime
        }
    }
}

