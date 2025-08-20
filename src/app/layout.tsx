import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { OrderMenuOptionProvider } from "@/context/OrderMenuOption";
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
      <OrderMenuOptionProvider>
        <body className={`${raleway.className} antialiased`}>{children}</body>
      </OrderMenuOptionProvider>
      <GoogleAnalytics gaId="G-HF1MVGVCL7" />
    </html>
  );
};

RootLayout.displayName = "RootLayout";

export default RootLayout;
