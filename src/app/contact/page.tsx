import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Stephanie Hwang about Data / BI Analyst roles, analytics projects, or collaborations.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Stephanie Hwang — Let's Talk Data",
    description:
      "Get in touch with Stephanie Hwang about Data / BI Analyst roles, analytics projects, or collaborations.",
    url: "https://stephanie-portfolio-blush.vercel.app/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Stephanie Hwang — Let's Talk Data",
    description:
      "Get in touch with Stephanie Hwang about Data / BI Analyst roles, analytics projects, or collaborations.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
