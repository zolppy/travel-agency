import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

interface ISocialMediaItem extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  link: string;
}

export const SocialMediaItem = ({
  children,
  link,
  className = "",
  ...props
}: ISocialMediaItem) => {
  const baseStyles =
    "text-2xl active:text-black lg:hover:text-black lg:hover:cursor-pointer transition-colors duration-200";

  return (
    <li
      {...props}
      className={twMerge(clsx(baseStyles, className as ClassValue))}
    >
      <a href={link} target="_blank">
        {children}
      </a>
    </li>
  );
};

SocialMediaItem.displayName = "SocialMediaItem";
