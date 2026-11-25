import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  EB_Garamond,
  Inter,
  Allison,
} from "next/font/google";
import "./globals.css";
import { InquiryProvider } from "@/components/InquiryContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingUtilities } from "@/components/FloatingUtilities";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const allison = Allison({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allison",
});

export const metadata: Metadata = {
  title: "Blueprint Shirdi | Private Balinese Villas with Land in Shirdi",
  description:
    "A limited 50-villa collection of Vastu-compliant Balinese residences with land-linked ownership across an 11-acre sanctuary in Shirdi Central, Maharashtra, by Spectacle Realty.",
  keywords: [
    "Blueprint Shirdi",
    "Balinese Villas Shirdi",
    "Spectacle Realty",
    "Shirdi Luxury Real Estate",
    "Vastu Villas Shirdi",
    "NRI Investment Shirdi",
  ],
  openGraph: {
    title: "Blueprint Shirdi | Your Villa. Your Land.",
    description:
      "Private Balinese villas with land ownership five minutes from Shri Sai Baba Temple in Shirdi Central.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${ebGaramond.variable} ${inter.variable} ${allison.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <InquiryProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingUtilities />
        </InquiryProvider>
      </body>
    </html>
  );
}
