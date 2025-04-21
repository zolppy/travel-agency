import { HTMLAttributes } from "react";
import { FaCoffee } from "react-icons/fa";

export const CoffeeBtn = ({
    className,
    ...props
}: HTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a
            {...props}
            href="https://ko-fi.com/zolppy"
            target="_blank"
            className={`${className} p-4 rounded-full bg-[#f44336] text-white text-2xl active:bg-black active:text-white lg:hover:cursor-pointer lg:hover:bg-black lg:hover:text-white fixed bottom-[10px] right-[10px]`}
        >
            <FaCoffee />
        </a>
    );
};

CoffeeBtn.displayName = "CoffeeBtn";
