import { HTMLAttributes } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";
import { Button } from "@/app/components/Button";
import type { Place as PlaceType } from "@/utils/types/place";
import { formatMoney } from "@/utils/functions/formatters";

interface IPlace extends HTMLAttributes<HTMLLIElement>, Omit<PlaceType, "id"> {}

export const Place = ({
  placeTitle,
  img,
  price,
  description,
  className = "",
  ...props
}: IPlace) => {
  const baseStyles = "flex flex-col bg-white";

  return (
    <li
      {...props}
      className={twMerge(clsx(baseStyles, className as ClassValue))}
    >
      <Image
        src={img.src}
        title={img.title}
        alt={img.alt}
        className={twMerge(clsx("w-full"))}
      />
      <div className={twMerge(clsx("flex flex-col gap-y-3 p-4"))}>
        <h3 className={twMerge(clsx("text-2xl"))}>{placeTitle}</h3>
        <p className={twMerge(clsx("opacity-60 text-[15px]"))}>
          {price.description} {formatMoney(price.value)}
        </p>
        <p>{description}</p>
        <Button
          className={twMerge(
            clsx(
              "bg-[#007bff] active:bg-[#0056b3] active:text-white lg:hover:bg-[#0056b3] lg:hover:text-white"
            )
          )}
        >
          Buy tickets
        </Button>
      </div>
    </li>
  );
};

Place.displayName = "Place";
