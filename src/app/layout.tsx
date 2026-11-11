import type { Metadata, Viewport } from "next";
import "./globals.css";
import { clashDisplay, satoshi } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stephanie-portfolio.vercel.app"),
  title: {
    default: "Stephanie Hwang — Data Analyst",
    template: "%s | Stephanie Hwang",
  },
  description:
    "Portfolio of Stephanie Hwang, a Data Analyst and UCLA MEng Data Science student (June 2027). SQL, Python, Tableau, and Power BI — from raw data to decisions.",
  applicationName: "Stephanie Hwang Portfolio",
  authors: [{ name: "Stephanie Hwang", url: "https://stephanie-portfolio.vercel.app" }],
  creator: "Stephanie Hwang",
  publisher: "Stephanie Hwang",
  keywords: [
    "Stephanie Hwang",
    "Data Analyst",
    "BI Analyst",
    "Business Intelligence",
    "SQL",
    "Python",
    "Tableau",
    "Power BI",
    "Data Visualization",
    "E-commerce Analytics",
    "People Analytics",
    "UCLA",
    "Portfolio",
    "Case Studies",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stephanie-portfolio.vercel.app",
    siteName: "Stephanie Hwang Portfolio",
    title: "Stephanie Hwang — Data Analyst",
    description:
      "Portfolio of Stephanie Hwang, a Data Analyst and UCLA MEng Data Science student (June 2027). SQL, Python, Tableau, and Power BI — from raw data to decisions.",
    images: [
      {
        url: "/projects/ecommerce.jpg",
        width: 1200,
        height: 630,
        alt: "Stephanie Hwang — Data Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephanie Hwang — Data Analyst",
    description:
      "Portfolio of Stephanie Hwang, a Data Analyst and UCLA MEng Data Science student (June 2027).",
    images: ["/projects/ecommerce.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${satoshi.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var e=document.documentElement,a=["light","dark"];function t(n){(Array.isArray(a)?a:[a]).forEach(function(a){e.classList.remove(a)}),e.classList.add(n),e.style.colorScheme=n}var n=localStorage.getItem("theme")||"dark";if("system"===n){var m=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";t(m)}else{t(n)}})();`,
          }}
        />
      </head>
      <body className="relative flex h-full min-h-dvh flex-col bg-bg-900 text-text-primary antialiased selection:bg-highlight selection:text-black">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <AosInit />
      </body>
    </html>
  );
}

