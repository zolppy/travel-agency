import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Section } from "@/app/components/Section";
import { H2 } from "@/app/components/H2";
import { OfferWrapper } from "@/app/components/OfferWrapper";
import { goodOffers } from "@/utils/mocks/images";

export const GoodOffers = () => {
    return (
        <Section>
            <H2>Good Offers Right Now</H2>
            <p>
                Up to <b>50%</b> discount.
            </p>
            {goodOffers.length > 0 && (
                <OfferWrapper>
                    <div
                        key={goodOffers[0].id}
                        className={twMerge(clsx("relative"))}
                    >
                        <Image
                            src={goodOffers[0].src}
                            title={goodOffers[0].title}
                            alt={goodOffers[0].alt}
                            className="w-full"
                        />
                        <span
                            className={twMerge(
                                clsx(
                                    "absolute text-white bottom-0 left-0 text-[18px] py-2 px-4"
                                )
                            )}
                        >
                            {goodOffers[0].title}
                        </span>
                    </div>
                    {goodOffers.length > 1 && (
                        <OfferWrapper>
                            {goodOffers
                                .slice(1)
                                .map(({ id, src, title, alt }) => (
                                    <div
                                        key={id}
                                        className={twMerge(clsx("relative"))}
                                    >
                                        <Image
                                            src={src}
                                            title={title}
                                            alt={alt}
                                            className={twMerge(clsx("w-full"))}
                                        />
                                        <span
                                            className={twMerge(
                                                clsx(
                                                    "absolute text-white bottom-0 left-0 text-[18px] py-2 px-4"
                                                )
                                            )}
                                        >
                                            {title}
                                        </span>
                                    </div>
                                ))}
                        </OfferWrapper>
                    )}
                </OfferWrapper>
            )}
        </Section>
    );
};

GoodOffers.displayName = "GoodOffers";
