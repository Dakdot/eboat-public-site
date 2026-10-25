import type { Metadata } from "next";
import {
  Inter,
  Newsreader,
  PT_Serif,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import Script from "next/script";
import localFont from "next/font/local";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pt_serif = PT_Serif({
  variable: "--font-pt-serif",
  weight: ["400", "700"],
});

const playfair_display = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ["400", "700"],
});

const seven_segment = localFont({
  src: "./fonts/seven-segment.woff2",
  variable: "--font-seven-segment",
});

export const metadata: Metadata = {
  title: "Stevens Electric Boatworks",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair_display.variable}  ${seven_segment.variable} bg-stone-700 antialiased`}
    >
      <Script
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
        type="module"
      />
      <meta name="apple-mobile-web-app-title" content="SIT E-Boat" />
      <body>
        <NavBar />
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
