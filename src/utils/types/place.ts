import { Img } from "@/utils/types/img";

interface Price {
  description: string;
  value: number;
}

interface Place {
  id: string;
  img: Img;
  placeTitle: string;
  price: Price;
  description: string;
}

export type { Place };
