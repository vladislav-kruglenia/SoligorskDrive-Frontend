import {AppPage} from "../../Types/App.types";
import {AppLinks} from "../../../../AppGlobal/AppGlobalTypes/Links";
import {RolesEnum} from "../../../../AppGlobal/AppGlobalTypes/Enums";

export class NavBarPagesService {
    navBarPages: AppPage[];

    constructor(userRole: RolesEnum) {
        this.navBarPages = this._getNavbarPages(userRole)
    }

    private _getNavbarPages(userRole: RolesEnum): AppPage[] {
        switch (userRole) {
            case RolesEnum.User:
                return this.ClientBarPages;
            case RolesEnum.Admin:
                return this.DispatcherNavBarPages;
            case RolesEnum.None:
                return this.CommonNavBarPages;
            default:
                return this.CommonNavBarPages;
        }
    }

    private ClientBarPages: AppPage[] = [
        {pageLink: AppLinks.UserProfile, pageName: 'Мой профиль'},
        {pageLink: AppLinks.OrderForm, pageName: 'Оформление заказа'},
        {pageLink: AppLinks.OrdersHistory, pageName: 'История заказов'},
    ];

    private DispatcherNavBarPages: AppPage[] = [
        {pageLink: AppLinks.UserProfile, pageName: 'Мой профиль'},
        {pageLink: AppLinks.OrderForm, pageName: 'Оформление заказа'},
        {pageLink: AppLinks.DispatcherPanel, pageName: 'Панель диспетчера'},
    ];

    private CommonNavBarPages: AppPage[] = [
        {pageLink: AppLinks.UserProfile, pageName: 'Мой профиль'},
        {pageLink: AppLinks.OrderForm, pageName: 'Оформление заказа'},
        {pageLink: AppLinks.OrdersHistory, pageName: 'История заказов'},
        {pageLink: AppLinks.DispatcherPanel, pageName: 'Панель диспетчера'},
    ];
}