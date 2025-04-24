import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { OrderContainer } from "@/app/components/OrderContainer";
import { H2 } from "@/app/components/H2";
import { OrderForm } from "@/app/components/OrderForm";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";

export const Rental = () => {
    return (
        <OrderContainer>
            <H2>Best car rental in the world!</H2>
            <p>
                <span className="bg-[#f44336] text-white py-1 px-2">
                    DISCOUNT!
                </span>{" "}
                Special offer if you book today: 25% off anywhere in the world
                with CarServiceRentalRUs
            </p>
            <OrderForm>
                <Input required={true} placeholder="Pick-up point" />
                <Button type="submit" className={twMerge(clsx("bg-[#616161]"))}>
                    Search availability
                </Button>
            </OrderForm>
        </OrderContainer>
    );
};

Rental.displayName = "Rental";
