import { HTMLAttributes } from "react";
import { H2 } from "@/app/components/H2";

interface IGetBestOffers extends HTMLAttributes<HTMLDivElement> {}

export const GetBestOffers = ({ className, ...props }: IGetBestOffers) => {
    return (
        <div
            {...props}
            className={`${className} text-white bg-black p-4 gap-y-4 flex flex-col opacity-60 focus-within:opacity-100 lg:hover:opacity-100`}
        >
            <H2>Get the best offers first!</H2>
            <p>Join our newsletter.</p>
            <form className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="">E-mail</label>
                    <input
                        type="email"
                        id=""
                        placeholder="Your e-mail address"
                        className="bg-white p-2 text-black"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#f44336] py-3 px-6 md:w-fit"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

GetBestOffers.displayName = "GetBestOffers";
