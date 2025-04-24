"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Section } from "@/app/components/Section";
import { OrderWrapper } from "@/app/components/OrderWrapper";
import { OrderMenu } from "@/app/components/OrderMenu";
import { Flight } from "@/app/components/Flight";
import { Hotel } from "@/app/components/Hotel";
import { Rental } from "@/app/components/Rental";
import { londonImg } from "@/utils/mocks/images";
import { useOrderMenuOption } from "@/context/OrderMenuOption";

export const Order = () => {
    const { selectedOrderMenuOption } = useOrderMenuOption();

    return (
        <Section className={twMerge(clsx("max-w-none w-full"))}>
            <OrderWrapper>
                <Image
                    src={londonImg.src}
                    title={londonImg.title}
                    alt={londonImg.alt}
                />
                <div className="flex flex-col absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-full max-w-[880px] min-w-[720px bg-white gap-y-5">
                    <OrderMenu />
                    {selectedOrderMenuOption == "flight" && <Flight />}
                    {selectedOrderMenuOption == "hotel" && <Hotel />}
                    {selectedOrderMenuOption == "rental" && <Rental />}
                </div>
            </OrderWrapper>
        </Section>
    );
};

Order.displayName = "Order";
