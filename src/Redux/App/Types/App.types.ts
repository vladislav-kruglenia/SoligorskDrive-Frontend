import {AppLinks} from "../../../AppGlobal/AppGlobalTypes/Links";

export type StartStateType = {
    currentPage: CurrentPage,
    navBarPages: AppPage[]
}

export interface CurrentPage {
    indexCurrentPage: number,
    currentPageName: string,
}

export type AppPage = {
    pageName: string,
    pageLink: AppLinks,
}
