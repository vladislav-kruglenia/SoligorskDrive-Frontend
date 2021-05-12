import {AppPage, CurrentPage, StartStateType} from "../Types/App.types";
import {NavBarPagesService} from "./Services/NavBarPagesService";
import {CurrentPageService} from "./Services/CurrentPageService";
import {RolesEnum} from "../../../AppGlobal/AppGlobalTypes/Enums";

export class AppStartState {
    private readonly navBarPages: AppPage[];
    private readonly currentPage: CurrentPage;
    private readonly isInitialized: boolean;
    private readonly isAuth: boolean;
    private readonly userRole: RolesEnum;
    private readonly userId: string;

    constructor() {
        this.isAuth = false;
        this.isInitialized = false;
        this.userRole = RolesEnum.None;
        this.navBarPages = new NavBarPagesService(RolesEnum.None).navBarPages;
        this.currentPage = new CurrentPageService(this.navBarPages);
        this.userId = '';
    }

    getAppStartState(): StartStateType{
        const {isAuth, isInitialized, userRole, navBarPages, currentPage, userId} = this;

        return {isAuth, isInitialized, userRole, navBarPages, currentPage, userId}
    }
}

