# Stephanie Hwang — Data Analyst Portfolio

> Personal portfolio of Stephanie Hwang, a Data Analyst and UCLA MEng Data Science student (June 2027). Built with **Next.js 15**, **React 19**, **Tailwind CSS v4**, and **TypeScript**, deployed on Vercel. Content lives in `src/data/` — three end-to-end analytics case studies, skills, experience, and contact.

> Template credit: based on [Portfolio-Template-02](https://github.com/AliAskariGithub/Portfolio-Template-02) by Ali Askari (MIT). The template author's own content, photos, and testimonials were replaced.

---

## 🌟 Key Features

- 🆓 **100% Free & Open-Source**: Free to use, fork, modify, and deploy for personal or commercial use.
- ⚡ **Next.js 15 & React 19**: App Router architecture with Static Site Generation (`generateStaticParams`) for blazing-fast page loads and zero layout shift.
- 🎨 **Tailwind CSS v4**: Built with the latest Tailwind CSS v4 design system, featuring custom design tokens, dark theme palettes, and custom typography.
- 📱 **Fully Responsive Layout**: Pixel-perfect on mobile, tablet, laptop, and ultra-wide screens.
- 📖 **Comprehensive Project Detail Pages (`/projects/[slug]`)**:
  - High-resolution hero media showcase
  - Responsive 2-column desktop case study layout
  - Role, client, and tech stack metadata badge cards
  - Sticky **Table of Contents ("On this page")** with auto-scroll highlighting
  - Clean typography for problem/solution breakdowns, bullet highlights, and code blocks
  - Quick social sharing (Twitter/X, LinkedIn, Email)
  - Previous / Next project pagination
- 🔄 **Infinite Skills Marquee**: Hardware-accelerated, infinite horizontal scrolling tech stack carousel.
- 💬 **Interactive Testimonials**: Dynamic carousel showcasing client and colleague recommendations with rating stars and direct links.
- 📂 **Interactive Expertise Accordion**: Expandable area-of-expertise showcase highlighting development, UI/UX design, and AI automation.
- ✉️ **Contact Form & FAQ**: Fully styled contact page with interactive contact form (loading/success states) and expandable FAQ accordion.
- 🔤 **Curated Typography**: Pre-configured with premium variable fonts (**Clash Display** for headings and **Satoshi** for clean body text).
- 🔍 **SEO & Metadata Optimized**: Dynamic title and description tags, OpenGraph previews, and semantic HTML5 hierarchy.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [**Next.js 15.1**](https://nextjs.org/) | React Framework (App Router, SSG, Server Components) |
| [**React 19**](https://react.dev/) | Core UI Library |
| [**Tailwind CSS v4**](https://tailwindcss.com/) | Utility-first modern CSS framework |
| [**TypeScript 5.7**](https://www.typescriptlang.org/) | Type safety and autocompletion |
| [**Lucide React**](https://lucide.dev/) | Clean, lightweight modern icons |
| [**AOS (Animate On Scroll)**](https://michalsnik.github.io/aos/) | Scroll-triggered entrance micro-animations |

---

## 📁 Project Structure

```bash
portfolio-template/
├── public/                     # Static assets (images, project mockups, icons)
│   ├── projects/               # Project screenshots & webp previews
│   ├── skills/                 # Technology brand icons
│   └── testimonials/           # Client/colleague avatars
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/              # About Me page (/about)
│   │   ├── contact/            # Contact page with form & FAQ (/contact)
│   │   ├── projects/           # Projects gallery (/projects)
│   │   │   └── [slug]/         # Dynamic Project Case Study page (/projects/[slug])
│   │   ├── fonts/              # Custom local fonts (Clash Display, Satoshi)
│   │   ├── globals.css         # Tailwind CSS v4 variables, reset, marquee
│   │   ├── layout.tsx          # Root layout with persistent Navbar & Footer
│   │   └── page.tsx            # Portfolio Homepage
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.tsx          # Glassmorphic floating navigation
│   │   ├── Footer.tsx          # Site footer with social links
│   │   ├── ProjectCard.tsx     # Project grid cards
│   │   ├── ProjectTOC.tsx      # Sticky project table of contents with scrollspy
│   │   ├── Marquee.tsx         # Infinite scrolling skills marquee
│   │   ├── TestimonialCarousel.tsx # Testimonial slider
│   │   └── ExpertiseAccordion.tsx  # Expandable skills breakdown
│   └── data/                   # Centralized data files (Edit your content here!)
│       ├── site.ts             # Bio, headline, experience, FAQ items
│       ├── projects.ts         # All projects, case study sections, and links
│       ├── skills.ts           # Tech stack icons and marquee data
│       ├── socials.ts          # Social profile URLs (GitHub, LinkedIn, etc.)
│       └── testimonials.ts     # Client and peer reviews
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Quick Start

### 1. Clone or Download the Template
```bash
git clone https://github.com/stephli6/stephanie-portfolio.git
cd stephanie-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ✏️ How to Customize

All content in this template is cleanly decoupled into the `src/data/` directory. You can customize the entire portfolio in just a few minutes without touching complex component code:

1. **Personal Information (`src/data/site.ts`)**:
   - Update your name, title, bio, years of experience, and location.
   - Edit the FAQ questions and answers displayed on the contact page.

2. **Projects & Case Studies (`src/data/projects.ts`)**:
   - Add your own projects with custom slugs, descriptions, tech stacks, and live demo links.
   - Write in-depth case study sections (Problem, Solution, Key Features, Outcomes).

3. **Skills & Tools (`src/data/skills.ts`)**:
   - Customize the infinite marquee with the technologies and tools you use.

4. **Social Profiles (`src/data/socials.ts`)**:
   - Update your GitHub, LinkedIn, Twitter/X, and Email links.

6. **Images (`public/`)**:
   - Place your profile photo in `public/images/`.
   - Place your project screenshots inside `public/projects/`.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository and click **Deploy**. Vercel will automatically detect Next.js and handle build optimizations.

### Deploy to Netlify / Other Hosts
```bash
npm run build
```
Deploy the output according to your hosting provider's Next.js guidelines.

---

## 📄 License

The underlying template is MIT-licensed (see the original [Portfolio-Template-02](https://github.com/AliAskariGithub/Portfolio-Template-02)). Stephanie's content, resume, and project images are her own.
