import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

interface IButton extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type?: "submit" | "reset" | "button";
}

export const Button = ({
    children,
    type = "button",
    className = "",
    ...props
}: IButton) => {
    const baseStyles =
        "text-white bg-black py-3 px-6 md:w-fit active:bg-[#ccc] active:text-black lg:hover:cursor-pointer lg:hover:bg-[#ccc] lg:hover:text-black transition-colors duration-200";

    return (
        <button
            {...props}
            type={type}
            className={twMerge(clsx(baseStyles, className as ClassValue))}
        >
            {children}
        </button>
    );
};

Button.displayName = "Button";
