// Single source of truth for portfolio content.
// Only verified information goes here. No invented employers, metrics or certifications.

export const site = {
  name: "Chinecherem",
  fullName: "Kingsley Chinecherem Ibeh",
  url: "https://chinecherem.dev",
  role: "Software Engineer",
  tagline: "Software engineer. I build backend systems and the products on top of them.",
  description:
    "Chinecherem is a full-stack software engineer with a backend focus, building scalable, production-ready systems with Node.js, NestJS, PostgreSQL, Redis and Next.js.",
  email: "kingsleyibeh363@gmail.com",
  available: true,
  links: {
    github: "https://github.com/kingsleychinecheremibeh",
    // TODO: replace placeholders with real profiles
    linkedin: "https://www.linkedin.com/in/your-handle",
    x: "https://x.com/your-handle",
    cv: "/cv.pdf", // TODO: drop your CV at public/cv.pdf
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
    title: "Full-stack e-commerce platform",
    kind: "Product",
    summary:
      "An end-to-end storefront with an admin side, built with a production-oriented backend.",
    points: [
      "Product and inventory management",
      "Secure authentication with role-based access",
      "Admin and management functionality",
      "Paystack payment integration",
      "Redis integration and Cloudinary media management",
    ],
    stack: ["Redis", "Paystack", "Cloudinary"], // TODO: confirm the rest of the stack, then add it
    // TODO: add href (repo or live demo) when ready
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
    title: "Personal engineering projects",
    kind: "Open source & experiments",
    summary:
      "Independent products I build to explore architecture, solve practical problems and sharpen my engineering.",
    points: ["See the repositories on GitHub"],
    stack: [],
    href: "https://github.com/kingsleychinecheremibeh",
  },
];

export const stack = [
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Express", "REST APIs", "Auth & authorisation", "Background jobs", "Payment & third-party integrations"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Performance optimisation"],
  },
  {
    group: "Data & infra",
    items: ["PostgreSQL", "Redis", "Prisma", "Drizzle", "BullMQ", "Docker", "Linux & VPS", "CI/CD", "Cloudflare"],
  },
  {
    group: "Practices",
    items: ["API security", "Load testing", "Database optimisation", "Logging & monitoring", "Automated testing", "Production troubleshooting"],
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
