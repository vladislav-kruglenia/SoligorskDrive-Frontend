import {DatesFormats} from "../AppGlobalTypes/Enums";
import {format, isValid} from "date-fns";

export class DateAndHourService {
    private readonly currentDate: Date;
    hour: number;
    date: string;

    constructor(date: Date, dateFormat: DatesFormats = DatesFormats.Server) {
        console.log(date);
        this.currentDate = isValid(date) ? date : new Date();
        this.date = this._getDate(dateFormat);
        this.hour = this._getHour();
    }

    private _getDate(dateFormat: DatesFormats): string {
        return format(this.currentDate, dateFormat)
    }

    private _getHour(): number {
        return Number(format( this.currentDate, 'HH'))
    }
}