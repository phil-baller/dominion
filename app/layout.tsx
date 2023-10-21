import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Walking Dominion",
  description: "Software developer and visual",
};

const calibre = localFont({
  src: [
    {
      path: "./calibre/CalibreLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./calibre/CalibreRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./calibre/CalibreMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./calibre/CalibreSemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./calibre/CalibreBlack.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="relative">
          <section className="bg h-screen fixed top-0 left-0 w-screen -z-10" />
          <section className="text-white z-50">{children}</section>
        </main>
      </body>
    </html>
  );
}
