import {AppPage} from "../../Types/App.types";

export class CurrentPageService {
    indexCurrentPage: number;
    currentPageName: string;

    constructor(navBarPages: AppPage[]) {
        this.indexCurrentPage = this._getIndexCurrentPage(navBarPages);
        this.currentPageName = navBarPages[this.indexCurrentPage].pageName;
    }

    private _getIndexCurrentPage(navBarPages: AppPage[]): number {
        const {pathname} = window.location;

        const indexCurrentPage = navBarPages.findIndex(page => page.pageLink.includes(pathname));

        return indexCurrentPage === -1 ? 0 : indexCurrentPage;
    }
}