import type { Metadata } from "next";
import {
  Inter,
  Newsreader,
  Fira_Code,
  Fira_Sans,
  Roboto,
} from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const fira_sans = Fira_Sans({
  variable: "--font-fira-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const fira_code = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stevens Electric Boatworks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${fira_code.variable} ${fira_sans.variable} ${roboto.variable} antialiased`}
    >
      <meta name="apple-mobile-web-app-title" content="SIT E-Boat" />
      <body>
        <NavBar />
        <div className="min-h-screen  ">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
