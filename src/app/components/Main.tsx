import clsx, { ClassValue } from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IMain extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Main = ({ children, className = "", ...props }: IMain) => {
  const baseStyle = "mt-[52px] md:mt-0 py-8 flex flex-col gap-y-9";

  return (
    <main
      {...props}
      className={twMerge(clsx(baseStyle, className as ClassValue))}
    >
      {children}
    </main>
  );
};

Main.displayName = "Main";
