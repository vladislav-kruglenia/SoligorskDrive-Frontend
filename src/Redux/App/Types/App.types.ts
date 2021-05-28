import {AppLinks} from "../../../AppGlobal/AppGlobalTypes/Links";
import {RolesEnum} from "../../../AppGlobal/AppGlobalTypes/Enums";

export interface StartStateType {
    currentPage: CurrentPage,
    navBarPages: AppPage[],
    isInitialized: boolean,
    isAuth: boolean,
    userRole: RolesEnum,
    userId: string,
    userName: string,
}

export interface CurrentPage {
    indexCurrentPage: number,
    currentPageName: string,
}

export type AppPage = {
    pageLinkName: string,
    pageHeaderName: string,
    pageLink: AppLinks,
}
