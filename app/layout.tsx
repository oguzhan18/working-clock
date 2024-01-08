import { Montserrat_Alternates } from "next/font/google";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Image from "next/image";
import meta from "./metadata";

import "./globals.css";

const GoogleFont = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "400", "600", "800"],
});

export const metadata = { ...meta };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GoogleFont.className} bg-gradient-to-tr from-yellow-950 to-yellow-900`}
      >
        <Nav />
        <div className="fixed top-0 left-0 w-full h-screen z-0">
          <Image
            src={"/bg.png"}
            alt=""
            width={1000}
            height={1000}
            className="w-full h-full object-cover absolute top-0 left-0 opacity-[.05] lg:opacity-[.03] rotate-45"
          />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
