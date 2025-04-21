import { HTMLAttributes } from "react";
import Image from "next/image";
import type { Place as PlaceType } from "@/utils/types/place";

interface IPlace extends HTMLAttributes<HTMLLIElement>, Omit<PlaceType, "id"> {}

export const Place = ({
    placeTitle,
    img,
    price,
    description,
    className,
    ...props
}: IPlace) => {
    return (
        <li {...props} className={`${className} flex flex-col bg-white`}>
            <Image
                src={img.src}
                title={img.title}
                alt={img.alt}
                className="w-full"
            />
            <div className="flex flex-col gap-y-3 p-4">
                <h3 className="text-2xl">{placeTitle}</h3>
                <p className="opacity-60 text-[15px]">
                    {price.description} {price.value}
                </p>
                <p>{description}</p>
                <button className="bg-[#007bff] text-white py-3 px-6 active:bg-[#0056b3] lg:hover:cursor-pointer lg:hover:bg-[#0056b3] md:w-fit">
                    Buy tickets
                </button>
            </div>
        </li>
    );
};

Place.displayName = "Place";
