import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Header } from "@/app/components/Header";
import { H2 } from "@/app/components/H2";
import { Section } from "@/app/components/Section";
import { Place } from "@/app/components/Place";
import { GetBestOffers } from "@/app/components/GetBestOffers";
import { Footer } from "@/app/components/footer/Footer";
import { CoffeeBtn } from "@/app/components/CoffeeBtn";
import { Button } from "@/app/components/Button";
import { naturePlaces } from "@/utils/mocks/places";
import { goodOffers, londonImg } from "@/utils/mocks/images";
import { Place as PlaceType } from "@/utils/types/place";

const Home = () => {
    return (
        <>
            <Header />
            <Section className="hidden md:flex w-full mt-[52px] max-w-none relative">
                <Image
                    src={londonImg.src}
                    title={londonImg.title}
                    alt={londonImg.alt}
                />
                {/*Limpar isso aqui e outras partes depois */}
                <div className="min-w-[720px] w-[90%] max-w-[880px] p-4 flex flex-col absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-white gap-y-5">
                    <H2>Travel the world with us</H2>
                    <form className="flex flex-col gap-y-4">
                        <div className="flex gap-x-4">
                            <div className="flex flex-col gap-y-1 grow-1">
                                <label htmlFor="from">From</label>
                                <input
                                    type="date"
                                    id="from"
                                    className="bg-white py-2 px-4 border border-[#ccc] grow-1"
                                />
                            </div>
                            <div className="flex flex-col gap-y-1 grow-1">
                                <label htmlFor="to">To</label>
                                <input
                                    type="date"
                                    id="to"
                                    className="bg-white py-2 px-4 border border-[#ccc] grow-1"
                                />
                            </div>
                        </div>
                        <Button type="submit" className="bg-[#616161]">
                            Search and find dates
                        </Button>
                    </form>
                </div>
            </Section>
            <main className="mt-[52px] md:mt-0 py-8 flex flex-col gap-y-9">
                <Section>
                    <H2>Good Offers Right Now</H2>
                    <p>
                        Up to <b>50%</b> discount.
                    </p>
                    {goodOffers.length > 0 && (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div key={goodOffers[0].id} className="relative">
                                <Image
                                    src={goodOffers[0].src}
                                    title={goodOffers[0].title}
                                    alt={goodOffers[0].alt}
                                    className="w-full"
                                />
                                <span className="absolute text-white bottom-0 left-0 text-[18px] py-2 px-4">
                                    {goodOffers[0].title}
                                </span>
                            </div>
                            {goodOffers.length > 1 && (
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    {goodOffers
                                        .slice(1)
                                        .map(({ id, src, title, alt }) => (
                                            <div key={id} className="relative">
                                                <Image
                                                    src={src}
                                                    title={title}
                                                    alt={alt}
                                                    className="w-full"
                                                />
                                                <span className="absolute text-white bottom-0 left-0 text-[18px] py-2 px-4">
                                                    {title}
                                                </span>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                    )}
                </Section>
                <Section>
                    <H2>Explore Nature</H2>
                    <p>Travel with us and see nature at its finest.</p>
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {naturePlaces.map(
                            ({
                                id,
                                img,
                                placeTitle,
                                price,
                                description,
                            }: PlaceType) => (
                                <Place
                                    key={id}
                                    img={img}
                                    placeTitle={placeTitle}
                                    price={price}
                                    description={description}
                                />
                            )
                        )}
                    </ul>
                </Section>
                <Section>
                    <GetBestOffers />
                </Section>
                <Section>
                    <H2>Contact</H2>
                    <p>Let us book your next trip!</p>
                    <ul>
                        <li className="flex items-center gap-x-3">
                            <FaMapMarkerAlt className="w-[30px]" />
                            <p>Chicago, US</p>
                        </li>
                        <li className="flex items-center gap-x-3">
                            <FaPhone className="w-[30px]" />
                            <p>Phone: +00 151515</p>
                        </li>
                        <li className="flex items-center gap-x-3">
                            <FaEnvelope className="w-[30px]" />
                            <p>Email: mail@mail.com</p>
                        </li>
                    </ul>
                    <form className="flex flex-col gap-y-3">
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            className="bg-white px-2 py-4 border border-[#ccc]"
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            required
                            className="bg-white px-2 py-4 border border-[#ccc]"
                        />
                        <textarea
                            placeholder="Message"
                            required
                            className="bg-white px-2 py-4 border border-[#ccc]"
                        ></textarea>
                        <Button type="submit" className="uppercase">
                            Send message
                        </Button>
                    </form>
                </Section>
                <CoffeeBtn />
            </main>
            <Footer />
        </>
    );
};

Home.displayName = "Home";

export default Home;
