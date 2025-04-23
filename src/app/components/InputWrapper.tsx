import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

interface IInputWrapper extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export const InputWrapper = ({
    children,
    className = "",
    ...props
}: IInputWrapper) => {
    const baseStyles = "flex flex-col gap-y-1";

    return (
        <div
            {...props}
            className={twMerge(clsx(baseStyles, className as ClassValue))}
        >
            {children}
        </div>
    );
};

InputWrapper.displayName = "InputWrapper";
