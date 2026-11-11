import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore selected analytics projects and case studies by Stephanie Hwang: e-commerce revenue analysis, people analytics, and data visualisation.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Selected Projects — Stephanie Hwang",
    description:
      "Explore selected analytics projects and case studies by Stephanie Hwang: e-commerce revenue analysis, people analytics, and data visualisation.",
    url: "https://stephanie-portfolio.vercel.app/projects",
    images: [
      {
        url: "/projects/ecommerce.jpg",
        width: 1200,
        height: 630,
        alt: "Stephanie Hwang Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Projects — Stephanie Hwang",
    description:
      "Explore selected analytics projects and case studies by Stephanie Hwang: e-commerce revenue analysis, people analytics, and data visualisation.",
    images: ["/projects/ecommerce.jpg"],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
