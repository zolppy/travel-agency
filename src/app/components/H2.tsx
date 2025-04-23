import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

interface IH2 extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

export const H2 = ({ children, className = "", ...props }: IH2) => {
    const baseStyles = "text-2xl";

    return (
        <h2
            {...props}
            className={twMerge(clsx(baseStyles, className as ClassValue))}
        >
            {children}
        </h2>
    );
};

H2.displayName = "H2";
