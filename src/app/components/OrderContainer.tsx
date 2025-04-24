import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

interface IOrderContainer extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export const OrderContainer = ({
    children,
    className = "",
    ...props
}: IOrderContainer) => {
    const baseStyles = "p-4 flex flex-col gap-y-5";

    return (
        <div
            {...props}
            className={twMerge(clsx(baseStyles, className as ClassValue))}
        >
            {children}
        </div>
    );
};

OrderContainer.displayName = "OrderContainer";
