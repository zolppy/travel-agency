import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { OrderContainer } from "@/app/components/OrderContainer";
import { H2 } from "@/app/components/H2";
import { Button } from "@/app/components/Button";

export const Hotel = () => {
  return (
    <OrderContainer>
      <H2>Find the best hotels</H2>
      <p>Book a hotel with us and get the best fares and promotions.</p>
      <p>We know hotels - we know comfort.</p>
      <Button className={twMerge(clsx("bg-[#616161]"))}>Search hotels</Button>
    </OrderContainer>
  );
};

Hotel.displayName = "Hotel";
