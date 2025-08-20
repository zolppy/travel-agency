import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

interface IGetBestOffersWrapper extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const GetBestOffersWrapper = ({
  children,
  className = "",
  ...props
}: IGetBestOffersWrapper) => {
  const baseStyles =
    "text-white bg-black p-4 gap-y-4 flex flex-col opacity-60 focus-within:opacity-100 lg:hover:opacity-100";

  return (
    <div
      {...props}
      className={twMerge(clsx(baseStyles, className as ClassValue))}
    >
      {children}
    </div>
  );
};

GetBestOffersWrapper.displayName = "GetBestOffersWrapper";
