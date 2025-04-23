import { HTMLAttributes } from "react";
import { H2 } from "@/app/components/H2";
import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";
import { Button } from "@/app/components/Button";

export const GetBestOffers = ({
    className = "",
    ...props
}: HTMLAttributes<HTMLDivElement>) => {
    const baseStyles =
        "text-white bg-black p-4 gap-y-4 flex flex-col opacity-60 focus-within:opacity-100 lg:hover:opacity-100";

    return (
        <div
            {...props}
            className={twMerge(clsx(baseStyles, className as ClassValue))}
        >
            <H2>Get the best offers first!</H2>
            <p>Join our newsletter.</p>
            <form className={twMerge(clsx("flex flex-col gap-y-4"))}>
                <div className={twMerge(clsx("flex flex-col gap-y-1"))}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your e-mail address"
                        className={twMerge(clsx("bg-white p-2 text-black"))}
                    />
                </div>
                <Button type="submit" className={twMerge(clsx("bg-[#f44336]"))}>
                    Subscribe
                </Button>
            </form>
        </div>
    );
};

GetBestOffers.displayName = "GetBestOffers";
