import { HTMLAttributes } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";
import { Button } from "@/app/components/Button";

export const Header = ({
    className = "",
    ...props
}: HTMLAttributes<HTMLElement>) => {
    const baseStyles =
        "flex justify-between items-center h-[52px] bg-white fixed w-full top-0 z-10";

    return (
        <header
            {...props}
            className={twMerge(clsx(baseStyles, className as ClassValue))}
        >
            <Button
                className={twMerge(
                    clsx(
                        "text-[#f44336] text-2xl py-2 px-4 flex items-center font-semibold gap-x-4 h-full active:bg-[#f44336] active:text-white lg:hover:bg-[#f44336] lg:hover:text-white bg-inherit"
                    )
                )}
            >
                <FaMapMarkerAlt />
                <span>Logo</span>
            </Button>
            <Button
                className={twMerge(
                    clsx(
                        "text-[#757575] py-2 px-4 text-2xl h-full flex items-center active:bg-[#f44336] active:text-white lg:hover:bg-[#f44336] lg:hover:text-white bg-inherit"
                    )
                )}
            >
                <FaSearch />
            </Button>
        </header>
    );
};

Header.displayName = "Header";
