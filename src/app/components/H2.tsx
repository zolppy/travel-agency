import { HTMLAttributes, ReactNode } from "react";

interface IH2 extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}

export const H2 = ({ children, className = "", ...props }: IH2) => {
    return (
        <h2 {...props} className={`${className} text-2xl`}>
            {children}
        </h2>
    );
};

H2.displayName = "H2";
