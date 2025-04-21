import { HTMLAttributes } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

interface IHeader extends HTMLAttributes<HTMLElement> {}

export const Header = ({ className = "", ...props }: IHeader) => {
    return (
        <header
            {...props}
            className={`${className} flex justify-between items-center h-[52px] bg-white fixed w-full top-0 z-10`}
        >
            <button className="text-[#f44336] text-2xl py-2 px-4 flex items-center font-semibold gap-x-4 h-full active:bg-[#f44336] active:text-white lg:hover:cursor-pointer lg:hover:bg-[#f44336] lg:hover:text-white transition-colors duration-200">
                <FaMapMarkerAlt />
                <span>Logo</span>
            </button>
            <button className="text-[#757575] py-2 px-4 text-2xl h-full flex items-center active:bg-[#f44336] active:text-white lg:hover:cursor-pointer lg:hover:bg-[#f44336] lg:hover:text-white transition-colors duration-200">
                <FaSearch />
            </button>
        </header>
    );
};

Header.displayName = "Header";
