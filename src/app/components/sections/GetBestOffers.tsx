import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Section } from "@/app/components/Section";
import { GetBestOffersWrapper } from "@/app/components/GetBestOffersWrapper";
import { H2 } from "@/app/components/H2";
import { InputWrapper } from "@/app/components/InputWrapper";
import { Input } from "@/app/components/Input";
import { Button } from "@/app/components/Button";

export const GetBestOffers = () => {
    return (
        <Section>
            <GetBestOffersWrapper>
                <H2>Get the best offers first!</H2>
                <p>Join our newsletter.</p>
                <form className={twMerge(clsx("flex flex-col gap-y-4"))}>
                    <InputWrapper>
                        <label htmlFor="email">E-mail</label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Your e-mail address"
                            required={true}
                            className={twMerge(clsx("text-black"))}
                        />
                    </InputWrapper>
                    <Button
                        type="submit"
                        className={twMerge(clsx("bg-[#f44336]"))}
                    >
                        Subscribe
                    </Button>
                </form>
            </GetBestOffersWrapper>
        </Section>
    );
};

GetBestOffers.displayName = "GetBestOffers";
