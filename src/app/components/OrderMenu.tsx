"use client";

import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";
import { FaPlane, FaBed, FaCar } from "react-icons/fa";
import { Button } from "@/app/components/Button";
import { OrderMenuOption } from "@/utils/enums/orderMenuOption";
import { useOrderMenuOption } from "@/context/OrderMenuOption";

export const OrderMenu = ({
    className = "",
    ...props
}: HTMLAttributes<HTMLUListElement>) => {
    const baseStyles = "bg-black text-white flex";
    const { changeOrderMenuOption } = useOrderMenuOption();

    return (
        <ul
            {...props}
            className={twMerge(clsx(baseStyles, className as ClassValue))}
        >
            <Button
                onClick={() => changeOrderMenuOption(OrderMenuOption.Flight)}
                className="bg-[#f44336] flex items-center gap-x-4 py-2 px-4 md:w-none"
            >
                <FaPlane /> Flight
            </Button>
            <Button
                onClick={() => changeOrderMenuOption(OrderMenuOption.Hotel)}
                className="flex items-center gap-x-4 py-2 px-4 md:w-none"
            >
                <FaBed /> Hotel
            </Button>
            <Button
                onClick={() => changeOrderMenuOption(OrderMenuOption.Rental)}
                className="flex items-center gap-x-4 py-2 px-4 md:w-none"
            >
                <FaCar /> Rental
            </Button>
        </ul>
    );
};

OrderMenu.displayName = "OrderMenu";
