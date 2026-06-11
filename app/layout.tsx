import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sai Baba Packers & Movers — Affordable Packing, Moving & Household Goods",
  description:
    "Sai Baba Packers and Movers offers reliable and affordable packing, moving, loading, unloading, car relocation, warehousing, and transportation services across India.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full scroll-smooth`}>
      <body className="min-h-full antialiased">
        <Topbar />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
