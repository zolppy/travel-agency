import { v4 as uuid } from "uuid";
import { Place } from "@/utils/types/place";
import { nature } from "@/utils/mocks/images";

const naturePlaces: Place[] = [
  {
    id: uuid(),
    img: nature[0],
    placeTitle: "West Coast, Norway",
    price: {
      description: "Roundtrip from",
      value: 79,
    },
    description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
  },
  {
    id: uuid(),
    img: nature[1],
    placeTitle: "Mountains, Austria",
    price: {
      description: "One-way from",
      value: 39,
    },
    description: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
  },
];

export { naturePlaces };
