export interface Experience {
  role: string;
  company: string;
  period: string;
  logo: string;
}

export const experience: Experience[] = [
  {
    role: "Mathematics Tutor",
    company: "Illumi Academy",
    period: "Aug 2023 — Present",
    logo: "/companies/illumiLogo.png",
  },
  {
    role: "Analytics Volunteer",
    company: "USC National Center on Elder Abuse",
    period: "Jun 2026 — Aug 2026",
    logo: "/companies/uscLogo.png",
  },
  {
    role: "Research Project Coordinator",
    company: "Claremont McKenna College, Psychology",
    period: "May 2026 — Aug 2026",
    logo: "/companies/cmcLogo.png",
  },
  {
    role: "Paralegal Assistant Intern",
    company: "Andion, Shaw, McKee & Orleans",
    period: "Jun 2022 — Aug 2022",
    logo: "/companies/andionLogo.png",
  },
];

export interface Award {
  title: string;
  date: string;
}

export const awards: Award[] = [];

export interface CommunityOffer {
  title: string;
  description: string;
}

export const communityOffers: CommunityOffer[] = [
  {
    title: "Data Analysis",
    description: "Turning raw data into clear findings with SQL and Python — and saying plainly what the data can't prove.",
  },
  {
    title: "Dashboards & BI",
    description: "Tableau and Power BI dashboards that non-technical teams can actually use: one question per chart, no decoration.",
  },
  {
    title: "Data Cleaning",
    description: "Messy exports, missing values, inconsistent fields — checked, documented, and fixed before any analysis.",
  },
  {
    title: "Explaining Data",
    description: "Math and data explained in clear, checkable steps — one-on-one and in small groups, the way I tutor.",
  },
];

export const communityStats = [
  { value: 3, suffix: "", label: "End-to-End Projects" },
  { value: 362, suffix: "K", label: "Revenue Analyzed ($)" },
  { value: 5692, suffix: "", label: "Purchase Events Analyzed" },
  { value: 92, suffix: "", label: "Days of Data Covered" },
];

export const designProcess = [
  {
    step: "01.",
    title: "Understand",
    description:
      "Start from the business question, not the dataset. What decision will this analysis inform?",
  },
  {
    step: "02.",
    title: "Gather & Clean",
    description:
      "Pull the data, check it for gaps and duplicates, and document every quality issue before trusting a number.",
  },
  {
    step: "03.",
    title: "Analyze",
    description:
      "SQL and Python to find the pattern — segments, funnels, trends — and test whether it holds up.",
  },
  {
    step: "04.",
    title: "Visualize",
    description:
      "One question per chart. A dashboard a non-technical teammate can read in a minute, without a walkthrough.",
  },
  {
    step: "05.",
    title: "Recommend",
    description:
      "End with what to do: the finding, the evidence, the size of the effect, and the limit of what we know.",
  },
];
