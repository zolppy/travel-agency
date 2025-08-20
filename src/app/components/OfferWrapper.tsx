import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

interface IOfferWrapper extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const OfferWrapper = ({
  children,
  className = "",
  ...props
}: IOfferWrapper) => {
  const baseStyles = "grid grid-cols-1 gap-4 md:grid-cols-2";

  return (
    <div
      {...props}
      className={twMerge(clsx(baseStyles, className as ClassValue))}
    >
      {children}
    </div>
  );
};

OfferWrapper.displayName = "OfferWrapper";
