import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { OrderContainer } from "@/app/components/OrderContainer";
import { H2 } from "@/app/components/H2";
import { OrderForm } from "@/app/components/OrderForm";
import { InputWrapper } from "@/app/components/InputWrapper";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";

export const Flight = () => {
    return (
        <OrderContainer>
            <H2>Travel the world with us</H2>
            <OrderForm>
                <div className={twMerge(clsx("flex gap-x-4"))}>
                    <InputWrapper className={twMerge(clsx("grow-1"))}>
                        <label htmlFor="from">From</label>
                        <Input type="date" id="from" required={true} />
                    </InputWrapper>
                    <InputWrapper className={twMerge(clsx("grow-1"))}>
                        <label htmlFor="to">To</label>
                        <Input type="date" id="to" required={true} />
                    </InputWrapper>
                </div>
                <Button type="submit" className={twMerge(clsx("bg-[#616161]"))}>
                    Search and find dates
                </Button>
            </OrderForm>
        </OrderContainer>
    );
};

Flight.displayName = "Flight";
