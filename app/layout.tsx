import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Trent & Lisa - August 1st, 2025",
  description: "Join us for our wedding celebration at Lilly Lake, Rocky Mountain National Park",
  openGraph: {
    title: "Trent & Lisa's Wedding",
    description: "August 1st, 2025 - Lilly Lake, RMNP",
    url: "https://trentlisa.com",
    siteName: "Trent & Lisa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trent & Lisa's Wedding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
