import { HTMLAttributes } from "react";
import { FaCoffee } from "react-icons/fa";

interface CoffeeBtn extends HTMLAttributes<HTMLButtonElement> {}

export const CoffeeBtn = ({ className, ...props }: CoffeeBtn) => {
    return (
        <button
            {...props}
            className={`${className} p-4 rounded-full bg-[#f44336] text-white text-2xl active:bg-black active:text-white lg:hover:cursor-pointer lg:hover:bg-black lg:hover:text-white fixed bottom-[10px] right-[10px]`}
        >
            <FaCoffee />
        </button>
    );
};

CoffeeBtn.displayName = "CoffeeBtn";
