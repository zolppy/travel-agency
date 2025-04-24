"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { OrderMenuOption } from "@/utils/enums/orderMenuOption";

interface IOrderMenuOptionCtx {
    selectedOrderMenuOption: OrderMenuOption;
    changeOrderMenuOption: (type: OrderMenuOption) => void;
}

const OrderMenuOptionCtx = createContext<IOrderMenuOptionCtx | undefined>(
    undefined
);

const OrderMenuOptionProvider = ({ children }: { children: ReactNode }) => {
    const [selectedOrderMenuOption, setselectedOrderMenuOption] =
        useState<OrderMenuOption>(OrderMenuOption.Flight);

    const changeOrderMenuOption = (type: OrderMenuOption) => {
        setselectedOrderMenuOption(type);
    };

    return (
        <OrderMenuOptionCtx.Provider
            value={{ selectedOrderMenuOption, changeOrderMenuOption }}
        >
            {children}
        </OrderMenuOptionCtx.Provider>
    );
};

const useOrderMenuOption = (): IOrderMenuOptionCtx => {
    const context = useContext<IOrderMenuOptionCtx | undefined>(
        OrderMenuOptionCtx
    );
    if (!context) {
        throw new Error(
            "useOrderMenuOption must be used inside a OrderMenuOptionProvider"
        );
    }
    return context;
};

export { OrderMenuOptionProvider, useOrderMenuOption };
