import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";

const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "fluentDev",
  description: "Communicate web3 in English",
  icons: [
    {
      url: "/logo.png",
      type: "image/png",
    }
  ],
  // Add the Google Search Console verification tag here
  verification: {
    google: "adg3MVFlHsiJ_TYDhp53F8c5pLiocsJ2WjvM3B_yjvw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased font-sans`}>
        <Providers>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-SHH52T1YSX" />
    </html>
  );
}
