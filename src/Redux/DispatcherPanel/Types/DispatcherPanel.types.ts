export type StartStateType = {
    sortOrders: SortOrders,
    currentDirection: string,
    currentDate: Date,
    dateTypes: DateTypes,
}

export type SortOrders = {
    byDirection: boolean,
    byDate: boolean,
    byTime: boolean,
}

export type DateTypes = {
    dateString: string,
    timeString: string,
}

export enum SortOrdersEnum {
    byDirection = 'byDirection',
    byDate = 'byDate',
    byTime = 'byTime',
}

