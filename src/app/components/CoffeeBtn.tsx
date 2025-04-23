import { HTMLAttributes } from "react";
import { FaCoffee } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export const CoffeeBtn = ({
    className = "",
    ...props
}: HTMLAttributes<HTMLButtonElement>) => {
    const baseStyles =
        "p-4 rounded-full bg-[#f44336] text-white text-2xl active:bg-black active:text-white lg:hover:cursor-pointer lg:hover:bg-black lg:hover:text-white fixed bottom-[10px] right-[10px] transition-colors duration-200";

    return (
        <button {...props}>
            <a
                href="https://ko-fi.com/zolppy"
                target="_blank"
                className={twMerge(clsx(baseStyles, className as ClassValue))}
            >
                <FaCoffee />
            </a>
        </button>
    );
};

CoffeeBtn.displayName = "CoffeeBtn";
