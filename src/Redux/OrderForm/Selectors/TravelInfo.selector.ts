import {AppStateType} from "../../../AppGlobal/AppGlobalTypes/Types";
import {TravelInfoArgs} from "../../../GraphQLServer/Queryes/TravelInfo/Types/TravelInfoVars.types";
import {createSelector} from "reselect";
import {DateAndHourService} from "../../../AppGlobal/AppGlobalClasses/DateService";

export const getTravelInfoData = (state: AppStateType): TravelInfoArgs => {
    const {date} = new DateAndHourService(state.orderForm.selectedDate as Date);

    return {
        date, direction: state.orderForm.selectedDirection,
    }
};

export const getTravelInfoDataSelector = createSelector(getTravelInfoData, data => data);