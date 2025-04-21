import type { Metadata } from "next";
import { raleway } from "@/utils/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Travel Agency",
    description:
        "Your premier travel agency for amazing vacation deals. Book flights, hotels, and complete holiday packages worldwide. Let our travel experts help plan your perfect trip!",
    authors: [
        {
            name: "Gabriel Cavalcante de Jesus Oliveira",
            url: "https://github.com/zolppy",
        },
    ],
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={`${raleway.className} antialiased`}>
                {children}
            </body>
        </html>
    );
};

RootLayout.displayName = "RootLayout";

export default RootLayout;
