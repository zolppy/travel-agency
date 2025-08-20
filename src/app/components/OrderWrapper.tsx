import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

interface IOrderWrapper extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const OrderWrapper = ({
  children,
  className = "",
  ...props
}: IOrderWrapper) => {
  const baseStyles = "hidden md:flex w-full mt-[52px] max-w-none relative";

  return (
    <div
      {...props}
      className={twMerge(clsx(baseStyles, className as ClassValue))}
    >
      {children}
    </div>
  );
};

OrderWrapper.displayName = "OrderWrapper";
