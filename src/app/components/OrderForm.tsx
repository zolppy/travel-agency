import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

interface IOrderForm extends HTMLAttributes<HTMLFormElement> {
    children: ReactNode;
}

export const OrderForm = ({
    children,
    className = "",
    ...props
}: IOrderForm) => {
    const baseStyles = "flex flex-col gap-y-4";

    return (
        <form
            {...props}
            className={twMerge(clsx(baseStyles, className as ClassValue))}
        >
            {children}
        </form>
    );
};

OrderForm.displayName = "OrderForm";
