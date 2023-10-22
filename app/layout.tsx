import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Walking Dominion",
  description: "Software developer and visual",
};

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
          <section className="bg h-screen fixed top-0 left-0 w-full text-[#111] -z-10" />
          <section className="text-white z-50">{children}</section>
        </main>
      </body>
    </html>
  );
}
