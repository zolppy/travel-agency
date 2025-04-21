import { StaticImageData } from "next/image";

interface Img {
    id?: string;
    src: StaticImageData;
    title: string;
    alt: string;
}

export type { Img };
