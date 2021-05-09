import {AppStateType} from "../../../AppGlobal/AppGlobalTypes/Types";
import {DispatcherOrdersInfoArgs} from "../../../GraphQLServer/Queryes/DispatcherOrdersInfo/Types/DispatcherOrdersInfo.var.types";
import {getDateSelector, getDirectionSelector, getSortOrdersSelector} from "../DispatcherPanel.selectors";
import {DateAndHourService} from "../../../AppGlobal/AppGlobalClasses/DateService";
import {createSelector} from "reselect";

const getDispatcherOrdersArgs = (state: AppStateType): DispatcherOrdersInfoArgs => {
    const {byTime, byDate, byDirection} = getSortOrdersSelector(state);
    const currentDate = getDateSelector(state);
    const direction = getDirectionSelector(state);
    const {date, hour} = new DateAndHourService(currentDate);

    let args: DispatcherOrdersInfoArgs = {};
    args = byDate ? {...args, date} : args;
    args = byTime ? {...args, startHour: hour} : args;
    args = byDirection ? {...args, direction} : args;

    return args
};

export const getDispatcherOrdersArgsSelector = createSelector(getDispatcherOrdersArgs, data => data);