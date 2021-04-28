import {OrderFormType} from "./OrderForm.types";
import {OrderFormLinks} from "../../../../AppGlobal/AppGlobalTypes/Links";

export const useOrderFormLinks = (typeComponent: OrderFormType) => {
    const isAppComponent = typeComponent === OrderFormType.App;
    const FillingOrderDataLink = isAppComponent ? OrderFormLinks.AppFillingOrderData : OrderFormLinks.LandingFillingOrderData;
    const OrderConfirmationLink = isAppComponent ? OrderFormLinks.AppOrderConfirmation : OrderFormLinks.LandingOrderConfirmation;

    return {FillingOrderDataLink,OrderConfirmationLink,}
};

