import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Majestik Magik - Crafting Digital Excellence in Website Design & Development",
  description: "A Professional web design portfolio, consulting, and development service by Jamil Matheny in Richmond, Virginia.",
  authors: [
    {
      name: "Jamil Matheny",
      url: "https://www.github.com/jmathtech",
    },
  ],
  creator: "Jamil Matheny",
  publisher: "Majestik Magik",
  keywords: [
    "web design",
    "web development",
    "consulting",
    "portfolio",
    "Richmond Virginia",
    "Jamil Matheny",
    "Majestik Magik",
    "digital excellence",
    "professional services",
  "website design",
    "website development",
    "web design services",
    "web development services",
    "website consulting",
    "website design and development",
    "website design and development services",
    "website design and development consulting",
    "website design and development portfolio",
    "website design and development portfolio",
    "website design and development portfolio",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": "-1",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/screenshot.png",
    other: {
      rel: "apple-touch-icon",
      url: "/favicon.ico",
    },
  },
  // Open Graph Metadata
  openGraph: {
    title: "Majestik Magik - Crafting Digital Excellence in Website Design & Development",
    description: "A Professional web design portfolio, consulting, and development service by Jamil Matheny in Richmond, Virginia.",
    url: "https://majestikmagik.com",
    siteName: "Majestik Magik",
    images: [
      {
        url: "/screenshot.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Metadata
  twitter: {
    card: "summary_large_image",
    title: "Majestik Magik - Crafting Digital Excellence in Website Design & Development",
    description: "A Professional web design portfolio, consulting, and development service by Jamil Matheny in Richmond, Virginia.",
    creator: "@majestikmagik",
    images: ["/screenshot.png"],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased body-gradient-bg`}
      >
        {children}
      </body>
    </html>
  );
}
