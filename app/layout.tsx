import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import StickyButtons from "./components/StickyButtons";

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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MTRRN5BD');`,
          }}
        />
      </head>
      <body className="min-h-full antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTRRN5BD"
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Topbar />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <StickyButtons />
      </body>
    </html>
  );
}
