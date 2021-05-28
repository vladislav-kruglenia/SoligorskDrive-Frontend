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

    private CommonPages: AppPage[] = [
        {
            pageLink: AppLinks.UserProfile,
            pageLinkName: 'Мой профиль',
            pageHeaderName: "Профиль пользователя",
        },
        {
            pageLink: AppLinks.OrderForm,
            pageLinkName: 'Заказ 24/7',
            pageHeaderName: 'Оформление заказа'
        },
    ];

    private dispatcherPanel: AppPage = {
        pageLink: AppLinks.DispatcherPanel,
        pageLinkName: 'Панель диспетчера',
        pageHeaderName: 'Сводка текущих заказов'
    };

    private ordersHistory: AppPage = {
        pageLink: AppLinks.OrdersHistory,
        pageLinkName: 'История заказов',
        pageHeaderName: "История заказанных рейсов",
    };

    private ClientBarPages: AppPage[] = [...this.CommonPages, this.ordersHistory];

    private DispatcherNavBarPages: AppPage[] = [...this.CommonPages, this.dispatcherPanel,];

    private CommonNavBarPages: AppPage[] = [...this.CommonPages, this.ordersHistory, this.dispatcherPanel,];
}