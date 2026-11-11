export type ProjectCategory = "Development" | "Design" | "Analytics";

export interface TechItem {
  name: string;
  description?: string;
}

export type SectionBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; lines: string[] }
  | { type: "link"; text: string; url: string }
  | { type: "image"; caption?: string };

export interface ProjectSection {
  title?: string;
  blocks: SectionBlock[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  categories: ProjectCategory[];
  year: number;
  image: string;
  imageBgColor?: string;
  detail?: {
    roles: string;
    client: string;
    techStack: string[];
    demoUrl?: string;
    sourceUrl?: string;
    heroDescription?: string;
    sections: ProjectSection[];
  };
}

export const projects: Project[] = [
  {
    slug: "ecommerce-revenue-analytics",
    title: "E-commerce Revenue & Customer Analytics",
    description:
      "92 days of Google Merchandise Store GA4 data: $362,165 revenue, 5,692 purchase events, a 3.68% funnel — SQL, Python, and a 9-sheet Tableau dashboard.",
    categories: ["Analytics"],
    year: 2026,
    image: "/projects/ecommerce.jpg",
    imageBgColor: "rgba(47, 111, 237, 0.15)",
    detail: {
      roles: "Data Analyst — end-to-end",
      client: "Google Merchandise Store (GA4 sample data)",
      techStack: ["SQL", "Python", "Tableau", "Google Analytics 4"],
      sourceUrl:
        "https://github.com/stephli6/Google-Merchandise-Store-Ecommerce-Revenue-Customer-Analytics",
      heroDescription:
        "Ninety-two days of GA4 e-commerce data, rebuilt into a decision-ready analysis: verified revenue of $362,165, a 3.68% end-to-end funnel, and a Tableau dashboard that fixes a date-axis bug in the original.",
      sections: [
        {
          title: "The Problem",
          blocks: [
            {
              type: "paragraph",
              text: "The original project README had a Tableau dashboard with a broken date axis — three months collapsed onto days 1–31 — and product rankings that mixed up item variants. The question was simple: how much revenue, from whom, and where does the funnel leak?",
            },
          ],
        },
        {
          title: "What Was Built",
          blocks: [
            {
              type: "paragraph",
              text: "Eight SQL scripts covering the funnel, monthly and weekday patterns, product concentration, and repeat purchasing; a Python pipeline that recomputes every headline number and asserts the totals; and a 9-sheet Tableau workbook with an exact-date trend line. Every data-quality issue is documented, not hidden.",
            },
            {
              type: "list",
              items: [
                "Funnel analysis: 77,020 views → 15,167 carts → 5,416 checkouts → 2,834 purchases (3.68% end-to-end).",
                "Product rankings aggregated by product name, not variant ID — 118 names span multiple variant IDs, and getting the grain right changed the top-10 list.",
                "Weekday vs weekend: weekday daily revenue averages $4,565 against $2,423 on weekends.",
                "Repeat purchasing: 11.4% of identifiable buyers bought more than once.",
                "Anomaly flagged honestly: Jan 28–31 revenue collapses to near zero, including $0 on Jan 31 with 19 events — treated as likely sample truncation, not a demand collapse.",
              ],
            },
          ],
        },
        {
          title: "The Outcome",
          blocks: [
            {
              type: "paragraph",
              text: "$362,165 revenue over 92 days; 5,692 purchase events; average order value $63.63. December was the peak month ($160,555), January fell 64.3% from December. Sizing the leaks: +1 percentage point on view-to-cart is worth about $9,157 per quarter, and +5 points on checkout-to-purchase about $17,231. The full code, SQL, and workbook are on GitHub.",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "amazon-people-analytics",
    title: "Amazon People Analytics Externship",
    description:
      "Attrition-risk analysis on employee feedback data (Nov 2026 – Jan 2027): workforce segmentation, engagement patterns, and AI-assisted recommendations. In progress.",
    categories: ["Analytics"],
    year: 2026,
    image: "/projects/extern.jpg",
    imageBgColor: "rgba(14, 159, 138, 0.15)",
    detail: {
      roles: "People Analytics Extern",
      client: "Amazon Operational Strategy & People Analytics Externship (Extern)",
      techStack: ["Extern Platform", "Employee Feedback Analysis", "Workforce Segmentation"],
      demoUrl: "https://extern.com/portfolios/stephanieh",
      sourceUrl: "https://extern.com/portfolios/stephanieh",
      heroDescription:
        "An externship with Amazon's Operational Strategy & People Analytics team: analyzing employee feedback to find attrition-risk patterns and recommend actions. Project 1 due November 16, 2026 — in progress.",
      sections: [
        {
          title: "The Problem",
          blocks: [
            {
              type: "paragraph",
              text: "Attrition is expensive and uneven — some teams lose people faster than others, and the reasons hide in feedback data. The project asks: which segments are at risk, and what would change that?",
            },
          ],
        },
        {
          title: "What I'm Doing",
          blocks: [
            {
              type: "list",
              items: [
                "Analyzing employee feedback data for workforce trends and attrition-risk factors.",
                "Segmenting the workforce to surface patterns in employee experience and engagement.",
                "Building attrition-risk insights with AI-assisted analysis.",
                "Turning findings into recommendations a people team can act on.",
              ],
            },
          ],
        },
        {
          title: "Status",
          blocks: [
            {
              type: "paragraph",
              text: "In progress — Project 1 is due November 16, 2026. This page will be updated with real deliverables and findings once the project is complete. No outcomes are claimed before they exist.",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "tata-data-visualisation",
    title: "Tata Data Visualisation Simulation",
    description:
      "Forage job simulation: framed the business question, cleaned retail data, and built an executive dashboard for a non-technical audience.",
    categories: ["Analytics"],
    year: 2025,
    image: "/projects/tata.jpg",
    imageBgColor: "rgba(242, 165, 65, 0.15)",
    detail: {
      roles: "Data Visualisation — Job Simulation",
      client: "Tata (via Forage)",
      techStack: ["Excel", "Tableau", "Data Storytelling"],
      demoUrl: "https://www.theforage.com/simulations/tata/data-visualisation-p5xo",
      sourceUrl: "https://www.theforage.com/simulations/tata/data-visualisation-p5xo",
      heroDescription:
        "A virtual job simulation from Tata Consultancy Services: take a retail dataset, frame the question a CEO would ask, and present the answer as a dashboard an executive can read in a minute.",
      sections: [
        {
          title: "The Problem",
          blocks: [
            {
              type: "paragraph",
              text: "Retail leadership needed to understand revenue, customer behavior, and product performance — from raw data, without a data team in the room.",
            },
          ],
        },
        {
          title: "What Was Built",
          blocks: [
            {
              type: "list",
              items: [
                "Framed the business question before touching the data.",
                "Cleaned and checked the retail dataset.",
                "Built an executive dashboard in Tableau.",
                "Wrote up findings for a non-technical audience.",
              ],
            },
          ],
        },
        {
          title: "The Outcome",
          blocks: [
            {
              type: "paragraph",
              text: "A completed simulation and a dashboard that answers the business question at a glance. The simulation's techniques — framing first, cleaning honestly, presenting simply — now shape how I approach every project.",
            },
          ],
        },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectNav(
  slug: string
): { prev?: Project; next?: Project } {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}

export const featuredProjects = [
  "ecommerce-revenue-analytics",
  "amazon-people-analytics",
  "tata-data-visualisation",
];
