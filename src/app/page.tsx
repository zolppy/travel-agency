import { Header } from "@/app/components/Header";
import { Order } from "@/app/components/sections/Order";
import { Main } from "@/app/components/Main";
import { GoodOffers } from "@/app/components/sections/GoodOffers";
import { Places } from "@/app/components/sections/Places";
import { GetBestOffers } from "@/app/components/sections/GetBestOffers";
import { Contact } from "@/app/components/sections/Contact";
import { CoffeeBtn } from "@/app/components/CoffeeBtn";
import { Footer } from "@/app/components/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Order />
            <Main>
                <GoodOffers />
                <Places />
                <GetBestOffers />
                <Contact />
                <CoffeeBtn />
            </Main>
            <Footer />
        </>
    );
};

Home.displayName = "Home";

export default Home;
