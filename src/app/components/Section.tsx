import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

interface ISection extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
}

export const Section = ({ children, className = "", ...props }: ISection) => {
    const baseStyles =
        "min-w-[320px] w-[96%] max-w-[1080px] mx-auto flex flex-col gap-y-4";

    return (
        <section
            {...props}
            className={twMerge(clsx(baseStyles, className as ClassValue))}
        >
            {children}
        </section>
    );
};

Section.displayName = "Section";
