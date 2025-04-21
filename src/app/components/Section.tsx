import { HTMLAttributes, ReactNode } from "react";

interface ISection extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
}

export const Section = ({ children, className = "", ...props }: ISection) => (
    <section
        className={`min-w-[320px] w-[96%] max-w-[1080px] mx-auto flex flex-col gap-y-4 ${className}`}
        {...props}
    >
        {children}
    </section>
);

Section.displayName = "Section";
