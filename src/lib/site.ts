// Single source of truth for portfolio content.
// Only verified information goes here. No invented employers, metrics or certifications.

export const site = {
  name: "Chinecherem",
  fullName: "Kingsley Chinecherem Ibeh",
  // No custom domain yet: on Vercel, use the project's production *.vercel.app address.
  // Once you own a domain, set SITE_URL in Vercel (e.g. https://chinecherem.dev).
  url:
    process.env.SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  role: "Software Engineer",
  tagline: "Software engineer. I build backend systems and the products on top of them.",
  description:
    "Chinecherem is a full-stack software engineer with a backend focus, building scalable, production-ready systems with Node.js, NestJS, PostgreSQL, Redis and Next.js.",
  email: "kingsleyibeh363@gmail.com",
  available: true,
  links: {
    github: "https://github.com/kingsleychinecheremibeh",
    linkedin: "https://www.linkedin.com/in/kingsley-ibeh-930a073a6",
    whatsapp: "https://wa.me/2348137511883",
    cv: "/cv.pdf",
  },
};

export const about = [
  "I'm a software engineer with about three years of experience, working across the stack with a strong lean towards the backend. I like understanding the business problem first, then designing the system, then taking it all the way to a deployed, monitored product.",
  "I care about reliability over shortcuts, security from day one, and architecture that stays maintainable as it grows. I'm especially interested in backend systems, distributed processing, AI integration and developer infrastructure.",
];

export type Project = {
  title: string;
  kind: string;
  summary: string;
  points: string[];
  stack: string[];
  href?: string;
  confidential?: boolean;
};

export const projects: Project[] = [
  {
    title: "Shoppe",
    kind: "Full-stack e-commerce platform",
    summary:
      "An end-to-end storefront with an admin side, built with a production-oriented backend.",
    points: [
      "JWT auth with HTTP-only cookies, refresh token rotation and role-based access control",
      "Admin dashboard for products, inventory, orders, users, shipping and analytics",
      "Stripe and Paystack payments, Cloudinary media, Swagger API docs, Redis caching",
    ],
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "Redis", "Stripe", "Paystack", "Cloudinary"],
    href: "https://github.com/kingsleychinecheremibeh/shoppe",
  },
  {
    title: "Eshop",
    kind: "Multi-vendor e-commerce platform · In progress",
    summary:
      "A scalable marketplace supporting customers, vendors and administrators.",
    points: [
      "Email verification, password reset and role-based access control",
      "REST APIs for products, carts, orders, payments, reviews and wishlists",
      "Redis caching to reduce database load; Jest and Supertest backend tests",
    ],
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "Redis", "AWS S3", "Stripe", "Paystack"],
  },
  {
    title: "AI-assisted marketing intelligence platform",
    kind: "Client work, under NDA",
    summary:
      "A platform combining business data, intelligence gathering, AI-assisted analysis, campaign recommendations and marketing execution workflows. Client details are confidential.",
    points: [
      "Backend architecture and database design",
      "Frontend engineering",
      "API and AI integrations",
      "Infrastructure and performance optimisation",
    ],
    stack: [], // stack not confirmed for this project, so none is listed
    confidential: true,
  },
  {
    title: "QueueFlow",
    kind: "Queue management platform",
    summary: "Streamlines customer service workflows with queue creation, customer management and status tracking.",
    points: ["Secure REST APIs and a responsive interface for desktop and mobile"],
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL"],
  },
];

export const education = {
  school: "New Horizons Nigeria, Lagos",
  course: "Full Stack Software Development · Completed June 2026",
  certs: ["Certified Front-End Developer", "Certified Back-End Developer"],
};

export const stack = [
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Express", "REST APIs", "Auth & authorisation", "Background jobs", "Stripe & Paystack integrations"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Performance optimisation"],
  },
  {
    group: "Data & infra",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle", "BullMQ", "Docker", "Linux & VPS", "CI/CD", "Cloudflare", "AWS S3", "Cloudinary"],
  },
  {
    group: "Practices",
    items: ["API security", "Load testing", "Database optimisation", "Logging & monitoring", "Automated testing (Jest, Supertest)", "Production troubleshooting"],
  },
];

export const principles = [
  { title: "Reliability over shortcuts", body: "Systems that behave under real workloads, with failure modes thought through up front." },
  { title: "Security from the start", body: "Authentication, authorisation and API hardening are designed in, not bolted on." },
  { title: "Performance without needless complexity", body: "Measure first, then optimise where it matters." },
  { title: "Ownership end to end", body: "From idea and architecture through deployment and production troubleshooting." },
];

export const services = [
  "Backend systems and APIs",
  "Full-stack product builds (MVP to production)",
  "AI integration into practical products",
  "Deployment, infrastructure and production support",
];
