import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Stephanie Hwang — Data Analyst and UCLA MEng Data Science student (June 2027): background, work history, and how she approaches analysis.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Stephanie Hwang — Data Analyst",
    description:
      "Learn about Stephanie Hwang's background, work history, and approach to data analysis.",
    url: "https://stephanie-portfolio.vercel.app/about",
    images: [
      {
        url: "/images/hero.webp",
        width: 800,
        height: 1000,
        alt: "Stephanie Hwang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Stephanie Hwang — Data Analyst",
    description:
      "Learn about Stephanie Hwang's background, work history, and approach to data analysis.",
    images: ["/images/hero.webp"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
