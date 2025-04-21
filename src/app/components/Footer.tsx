import { HTMLAttributes } from "react";
import {
    FaFacebookSquare,
    FaInstagram,
    FaSnapchat,
    FaPinterestP,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

interface IFooter extends HTMLAttributes<HTMLElement> {}

export const Footer = ({ className, ...props }: IFooter) => {
    return (
        <footer
            {...props}
            className={`${className} bg-[#616161] text-white items-center flex flex-col gap-y-9 p-9`}
        >
            <p className="text-[18px]">Find Us On</p>
            <ul className="flex gap-x-1">
                <li className="text-2xl">
                    <a href="" target="_blank">
                        <FaFacebookSquare />
                    </a>
                </li>
                <li className="text-2xl">
                    <a href="" target="_blank">
                        <FaInstagram />
                    </a>
                </li>
                <li className="text-2xl">
                    <a href="" target="_blank">
                        <FaSnapchat />
                    </a>
                </li>
                <li className="text-2xl">
                    <a href="" target="_blank">
                        <FaPinterestP />
                    </a>
                </li>
                <li className="text-2xl">
                    <a href="" target="_blank">
                        <FaTwitter />
                    </a>
                </li>
                <li className="text-2xl">
                    <a href="" target="_blank">
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
            <p>
                Powered by{" "}
                <a
                    href="https://github.com/zolppy"
                    target="_blank"
                    className="underline"
                >
                    Zolppy
                </a>
            </p>
        </footer>
    );
};

Footer.displayName = "Footer";
