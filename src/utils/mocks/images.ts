import { v4 as uuid } from "uuid";
import type { Img } from "@/utils/types/img";
import cinqueTerre from "../../../public/cinque-terre.jpg";
import newYork from "../../../public/new-york.jpg";
import sanFrancisco from "../../../public/san-francisco.jpg";
import pisa from "../../../public/pisa.jpg";
import paris from "../../../public/paris.jpg";
import london from "../../../public/london.jpg";
import ocean from "../../../public/ocean.jpg";
import mountains from "../../../public/mountains.jpg";

const londonImg: Img = {
    src: london,
    title: "Busy London street with double-decker bus",
    alt: "Street level view of a bustling London thoroughfare flanked by traditional multi-story buildings. A red double-decker bus is prominent in the center, moving towards the viewer, alongside other traffic including a motion-blurred car in the foreground. Pedestrians populate the sidewalks under a bright sky.",
};

const goodOffers: Img[] = [
    {
        id: uuid(),
        src: cinqueTerre,
        title: "Cinque Terre",
        alt: "A picturesque view of the colorful hillside village in Cinque Terre, Italy. Multicolored buildings are built into the steep cliff face, overlooking the deep blue Ligurian Sea under a slightly hazy sky.",
    },
    {
        id: uuid(),
        src: newYork,
        title: "New York",
        alt: "The Statue of Liberty is shown from the chest up, standing on its brown stone pedestal. The iconic copper-green statue holds a golden torch aloft in its right hand and a tablet in its left. Behind the statue, the sky is blue with scattered white clouds.",
    },
    {
        id: uuid(),
        src: sanFrancisco,
        title: "San Francisco",
        alt: "A partial view of the Golden Gate Bridge's southern tower and cables is shown, with the full bridge extending into the distance across the water. The famous international orange suspension bridge stands against a hazy sky, with sailboats and other vessels on the water below and green hills in the background.",
    },
    {
        id: uuid(),
        src: pisa,
        title: "Pisa",
        alt: "A detailed view of the Leaning Tower of Pisa, capturing its significant tilt. The cylindrical structure is visible, with several levels featuring intricate open arcades supported by columns. The light-colored stone contrasts with a sky filled with soft clouds.",
    },
    {
        id: uuid(),
        src: paris,
        title: "Paris",
        alt: "The top portion of the Eiffel Tower is visible, towering above a detailed, multi-story building in classic Parisian architectural style. Bare tree branches are silhouetted against the hazy, overcast sky on either side of the frame, suggesting a cooler season.",
    },
];

const nature: Img[] = [
    {
        id: uuid(),
        src: ocean,
        alt: "Ocean View",
        title: "An elevated view looking out over the ocean towards the horizon. Gentle waves with white foam crests are rolling onto a sandy beach at the bottom of the frame. The sky is partly cloudy, with patches of blue visible amongst white and dark gray clouds.",
    },
    {
        id: uuid(),
        src: mountains,
        alt: "Snowy Mountains",
        title: "A panoramic view of a snow-covered mountain range under a wide, cloudy sky. The mountains have rocky peaks and smooth, snow-covered slopes. In the foreground, dark, dense evergreen trees line the base of the mountains on the left and right sides.",
    },
];

export { londonImg, goodOffers, nature };
