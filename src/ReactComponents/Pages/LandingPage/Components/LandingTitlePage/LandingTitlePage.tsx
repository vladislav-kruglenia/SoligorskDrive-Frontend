import React from "react";
import style from "./LandingTitlePage.module.scss";
import {Button, Typography} from "@material-ui/core";
import {LandingHeader} from "./Components/LandingHeader/LandingHeader";
import {Link as Scroll} from "react-scroll";
import {ElementsId} from "../../../../../AppGlobal/AppGlobalTypes/ElementsId";

export const LandingTitlePage = () => {
    return <div className={style.LandingTitlePage}>
        <LandingHeader/>
        <LandingTitlePageBody/>
        <OrderFormButton/>
    </div>
};

export const LandingTitlePageBody = () => {
    return <>
        <Typography className={style.title}>Soligorsk <span className={style.titleSecond}>Drive</span></Typography>

        <Typography className={style.description}>
            <p>
                Маршрутки - это удобный способ передвижения как на длинные так и на короткие растояния.
            </p>
            <p>
                Микроавтобусы компании SoligorskDrive оснащены TV, ремнями безопасности, Wi-Fi и кондиционерами.
            </p>
            <p>
                Заказать место можно по телефонам с 05:30 - 22:00 часов или на сайте online (24/7).
            </p>
        </Typography>
    </>
};

export const OrderFormButton = () => {
    return <div className={style.OrderFormButton}>
        <Scroll to={ElementsId.LandingOrderForm} smooth={true}>
            <Button
                variant={"contained"}
                color={"secondary"}
                onClick={() => {
                }}
                size={"large"}
            >
                Заказать без регистрации
            </Button>
        </Scroll>
    </div>
};

