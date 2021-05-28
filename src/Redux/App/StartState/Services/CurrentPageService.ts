import {AppPage} from "../../Types/App.types";

export class CurrentPageService {
    indexCurrentPage: number;
    currentPageName: string;

    constructor(navBarPages: AppPage[]) {
        this.indexCurrentPage = this._getIndexCurrentPage(navBarPages);
        this.currentPageName = navBarPages[this.indexCurrentPage].pageHeaderName;
    }

    private _getIndexCurrentPage(navBarPages: AppPage[]): number {
        const {pathname} = window.location;

        const indexCurrentPage = navBarPages.findIndex(page => pathname.includes(page.pageLink));
        debugger

        return indexCurrentPage === -1 ? 0 : indexCurrentPage;
    }
}