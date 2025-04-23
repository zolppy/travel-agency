import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

interface IContactWrapper extends HTMLAttributes<HTMLLIElement> {
    children: ReactNode;
}

export const ContactWrapper = ({
    children,
    className = "",
    ...props
}: IContactWrapper) => {
    const baseStyles = "flex items-center gap-x-3";

    return (
        <li
            {...props}
            className={twMerge(clsx(baseStyles, className as ClassValue))}
        >
            {children}
        </li>
    );
};

ContactWrapper.displayName = "ContactWrapper";
