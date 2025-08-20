import { Section } from "@/app/components/Section";
import { H2 } from "@/app/components/H2";
import { OfferWrapper } from "@/app/components/OfferWrapper";
import { Place } from "@/app/components/Place";
import { naturePlaces } from "@/utils/mocks/places";
import { Place as PlaceType } from "@/utils/types/place";

export const Places = () => {
  return (
    <Section>
      <H2>Explore Nature</H2>
      <p>Travel with us and see nature at its finest.</p>
      <OfferWrapper>
        {naturePlaces.map(
          ({ id, img, placeTitle, price, description }: PlaceType) => (
            <Place
              key={id}
              img={img}
              placeTitle={placeTitle}
              price={price}
              description={description}
            />
          )
        )}
      </OfferWrapper>
    </Section>
  );
};

Places.displayName = "Places";
