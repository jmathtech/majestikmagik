import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const siteUrl = "https://www.majestikmagik.com"; // Ensure this is set in your environment variables
const imageUrl = `${siteUrl}/img/screenshot.png`; // Construct absolute URL


const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Majestik Magik - Crafting Digital Excellence in Website Design & Development",
  description: "A Professional web design portfolio, consulting, and development service in Richmond, Virginia.",
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
    icon: [
      { rel: 'icon', type: 'image/x-icon', url: '/favicon.ico', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '48x48', url: '/favicon-48x48.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/favicon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: 'any', url: '/media-icon.png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  // Open Graph Metadata
  openGraph: {
    title: "Majestik Magik - Crafting Digital Excellence in Website Design & Development",
    description: "Professional web design, consulting, and development services based in Richmond, Virginia.",
    url: siteUrl,
    siteName: "Majestik Magik",
    images: [imageUrl],
    locale: "en_US",
    type: "website",
  },
  // Twitter Metadata
  twitter: {
    card: "summary_large_image",
    title: "Majestik Magik - Crafting Digital Excellence in Website Design & Development",
    description: "Professional web design, consulting, and development services based in Richmond, Virginia.",
    creator: "@majestikmagik",
    images: [imageUrl],
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
      <head><meta name="facebook-domain-verification" content="3i7nkevu2xjilar534vh3peg5qe1x3" /></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} Montserrat antialiased body-gradient-bg`}
      >
        {children}

        <Script
          strategy="afterInteractive" // Loads after the page is interactive
          src="https://www.googletagmanager.com/gtag/js?id=AW-16649126006"
        />
        <Script
          id="google-analytics-init" // Unique ID for the inline script
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Ensure page_path is correctly set for client-side routing
            gtag('config', 'AW-16649126006', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

      </body>
    </html>
  );
}
