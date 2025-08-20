import { HTMLAttributes } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaSnapchat,
  FaPinterestP,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";
import { SocialMediaItem } from "@/app/components/SocialMediaItem";

export const Footer = ({
  className = "",
  ...props
}: HTMLAttributes<HTMLElement>) => {
  const baseStyles =
    "bg-[#616161] text-white items-center flex flex-col gap-y-9 p-9";

  return (
    <footer
      {...props}
      className={twMerge(clsx(baseStyles, className as ClassValue))}
    >
      <p className={twMerge(clsx("text-[18px]"))}>Find Us On</p>
      <ul className={twMerge(clsx("flex gap-x-1"))}>
        <SocialMediaItem link="">
          <FaFacebookSquare />
        </SocialMediaItem>
        <SocialMediaItem link="">
          <FaInstagram />
        </SocialMediaItem>
        <SocialMediaItem link="">
          <FaSnapchat />
        </SocialMediaItem>
        <SocialMediaItem link="">
          <FaPinterestP />
        </SocialMediaItem>
        <SocialMediaItem link="">
          <FaTwitter />
        </SocialMediaItem>
        <SocialMediaItem link="">
          <FaLinkedin />
        </SocialMediaItem>
      </ul>
      <p>
        Powered by{" "}
        <a
          href="https://github.com/zolppy"
          target="_blank"
          className={twMerge(
            clsx(
              "underline active:text-black lg:hover:text-black transition-colors duration-200"
            )
          )}
        >
          Zolppy
        </a>
      </p>
    </footer>
  );
};

Footer.displayName = "Footer";
