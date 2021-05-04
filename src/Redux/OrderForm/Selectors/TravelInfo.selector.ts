import {AppStateType} from "../../../AppGlobal/AppGlobalTypes/Types";
import {TravelInfoArgs} from "../../../GraphQLServer/Queryes/TravelInfo/Types/TravelInfoVars.types";
import {getDate} from "../OrderForm.helper-functions";
import {DatesFormats} from "../../../AppGlobal/AppGlobalTypes/Enums";
import {createSelector} from "reselect";

export const getTravelInfoData = (state: AppStateType): TravelInfoArgs => {
    return {
        direction: state.orderForm.selectedDirection,
        date: getDate(state.orderForm.selectedDate as Date, DatesFormats.Server)
    }
};

export const getTravelInfoDataSelector = createSelector(getTravelInfoData, data => data);