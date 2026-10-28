export type ProjectCategory = "fullstack" | "mobile" | "web";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  category: ProjectCategory;
  platforms: string[];
  role: string;
  period: string;
  featured: boolean;
  status: "shipped" | "in-development" | "archived";
  stack: string[];
  highlights: string[];
  links?: { live?: string; github?: string; playStore?: string };
  published?: boolean;
};

export const projects: Project[] = [
  {
    slug: "e-metric-suite",
    title: "E-Metric Suite",
    tagline: "A multi-tenant HR and performance platform",
    summary:
      "An enterprise HRIS covering payroll, KPIs, 360° appraisals, leave, onboarding, career paths, learning and org structure - one codebase serving many organisations, each in its own isolated database schema.",
    category: "fullstack",
    platforms: ["Web", "API", "iOS", "Android"],
    role: "Fullstack — React dashboard, Express API, companion Expo app",
    period: "2025 — Present",
    featured: true,
    status: "shipped",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Expo",
      "Socket.IO",
    ],
    highlights: [
      "Schema-per-tenant isolation on PostgreSQL, with a CLI for creating, listing, migrating and retiring tenants instead of hand-run SQL against production.",
      "Around thirty feature modules - payroll, KPI, appraisal 360, objectives, leave, shift management, conduct, document management, strategy deck - each a self-contained folder with its own routes, hooks and API layer.",
      "Swagger specs generated from the controllers themselves, so the published API documentation cannot drift away from the routes that exist.",
      "Analytics built on Nivo: bar, line, pie, radar and radial-bar views over a shared query layer, plus in-browser PDF report export.",
      "Real-time announcements and messaging over Socket.IO, with Sentry instrumented across both the build and the runtime.",
    ],
    links: { live: "https://emetricsuite.com" },
  },
  {
    slug: "elevra",
    title: "Elevra",
    tagline: "An AI job-application coach, from the posting to the thank-you",
    summary:
      "A mobile app that takes a job seeker through one application at a time: a resume tailored to the posting, a matching cover letter, the interview questions they are likely to face with spoken practice, and the follow-up afterwards. Built solo - the app, the API, and the web landing page and admin dashboard.",
    category: "mobile",
    platforms: ["Android", "API", "Web"],
    role: "Solo — React Native app, Node/Prisma API and Next.js web",
    period: "2026",
    featured: true,
    status: "in-development",
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Next.js",
    ],
    highlights: [
      "AI that never invents facts about the user, enforced in code rather than by the prompt: employers, titles, dates and numbers only come from the user's own history, every keyword a tailored resume adds must cite a real line from the original, and cover-letter sentences that cannot be traced to a source are removed before the draft is shown.",
      "Match scores and the \"what changed\" list after tailoring are computed in code, not generated - a model describing its own edits proved unreliable.",
      "Spoken interview practice: a runner that records each answer, then transcribes it and reports pace, filler words and STAR structure, with a tighter version that has to stay mostly in the user's own words.",
      "Applications start from a pasted job link or the Android share sheet, and the career profile can be filled from an existing resume PDF - nothing is guessed, and missing dates are left for the user to fill in.",
      "A resume studio with six ATS-safe templates and on-device HTML-to-PDF export that produces real selectable text, not a screenshot of a document.",
      "Offline-first throughout: a persisted TanStack Query cache, online detection, and screens that degrade to stale data rather than to a spinner.",
      "The AI sits behind a Pro tier checked on both client and server, with a paywall and RevenueCat store integration. Every backend query is scoped by user id at the repository layer, which is the whole authorisation model.",
    ],
    links: {
      live: "https://elevra.reactmode.dev",
      github: "https://github.com/abdullah43577/Elevra-Mobile-2026",
    },
  },
  {
    slug: "rel8",
    title: "Rel8",
    tagline: "Membership management for associations",
    summary:
      "Dues, events, meetings, elections, projects, credentials and support tickets for member organisations - delivered as three clients against one API: a members portal, an admin console and a mobile app.",
    category: "fullstack",
    platforms: ["Web", "API", "iOS", "Android"],
    role: "Fullstack — members portal, admin console, React Native app",
    period: "2025 — Present",
    featured: true,
    status: "shipped",
    stack: [
      "React",
      "TypeScript",
      "Chakra UI",
      "Node.js",
      "Express",
      "MongoDB",
      "Expo",
      "TanStack Query",
    ],
    highlights: [
      "Three clients kept honest against a single Express/MongoDB API, with one shared status vocabulary for payments and membership so the portal, the admin and the app never disagree about what a record means.",
      "A members portal carried through a full visual redesign - sixteen modules migrated onto a new token set and a shared primitive library, without a rewrite.",
      "An admin console rebuilt on React 19 and Chakra 3, including drag-and-drop ordering with dnd-kit for elections and content arrangement.",
      "A React Native member app, published on Google Play, bringing dues, events, elections, chat and credentials to association members' phones - built to mirror the portal's behaviour rather than reinvent it.",
      "An applicant pipeline and member support ticketing built on top of the same membership records.",
      "One deployment serving many associations: the admin console lives at alumsapp.com, and each association's members portal runs on its own subdomain, named after its short name (nimn.alumsapp.com, for example).",
    ],
    links: {
      live: "https://alumsapp.com",
      playStore: "https://play.google.com/store/apps/details?id=ng.rel8.membership",
    },
  },
  {
    slug: "emetric-jobs",
    title: "E-Metric Jobs",
    tagline: "A job marketplace with real-time hiring workflows",
    summary:
      "A hiring platform serving three distinct audiences from one API - job seekers, employers and an internal admin team - with real-time messaging, subscriptions and queue-backed notifications. A Next.js web app and an Expo client for candidates on the move.",
    category: "fullstack",
    platforms: ["Web", "API", "iOS", "Android"],
    role: "Fullstack — Express/Prisma API, Next.js app, Expo client",
    period: "2024 — Present",
    featured: true,
    status: "shipped",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "BullMQ",
      "Redis",
    ],
    highlights: [
      "Three role-scoped surfaces - seeker, employer and admin - built as parallel slices through the same four layers, so a route table never touches Prisma and a service never touches req or res.",
      "Authorisation mounted once at the admin router rather than per sub-route. The previous arrangement left every admin endpoint authenticated but unauthorised - any signed-in job seeker could reach a user-deletion route.",
      "Background work moved off the request path onto BullMQ and Redis - transactional email, notification fan-out and scheduled sweeps run as jobs, not as blocking handlers.",
      "Real-time messaging between employers and applicants over Socket.IO, alongside a REST surface validated with Zod at every boundary.",
      "An admin console covering user management, listings, subscriptions, broadcast and analytics, with trend figures computed from real data rather than hardcoded into the stat cards.",
      "A separate Expo app for job seekers, published on Google Play, sharing the same API and auth model as the web app.",
    ],
    links: {
      live: "https://emetricjobs.com",
      playStore: "https://play.google.com/store/apps/details?id=com.emetric.jobs",
    },
  },
  {
    slug: "hesed-fasttrack",
    title: "HESED FastTrack",
    tagline: "A shipping platform: compare courier quotes, book and track",
    summary:
      "A logistics product for a client: customers compare quotes from courier partners side by side, book a shipment, pay from a wallet and track it to the door. Built solo - the API, the website with its customer and admin dashboards, and an Expo app that is yet to ship.",
    category: "fullstack",
    platforms: ["Web", "API", "iOS", "Android"],
    role: "Solo — Express/Prisma API, Next.js web and admin, Expo app",
    period: "2026",
    featured: true,
    status: "shipped",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Expo",
      "Paystack",
    ],
    highlights: [
      "Couriers sit behind one provider interface: a quote fans out to every registered courier and returns the priced options side by side, and a courier that errors is dropped from the comparison rather than failing the whole quote.",
      "A wallet built as a ledger: every amount is an integer in kobo, balances are re-derived from transaction rows rather than incremented in place, and each customer is funded through their own Paystack dedicated virtual account.",
      "One status machine owns every shipment transition, writing the timeline event, notifying the customer and emailing them, with courier tracking updates mapped into the same machine on a schedule.",
      "KYC reviewed per document, with a mandatory reason on every rejection and resubmission that only re-queues what was rejected; verification gates payment, never quoting.",
      "An admin dashboard for shipments, users, KYC, withdrawals and wallet adjustments, with a single seeded super admin who alone manages the other admins.",
    ],
    links: {
      live: "https://hesedfastrack.com",
    },
  },
  {
    slug: "afripantry",
    title: "Afripantry",
    tagline: "An African grocery marketplace, plus its driver app",
    summary:
      "Two React Native apps for one marketplace serving Canada, the US and Nigeria: a consumer app for ordering African groceries, and a separate driver app for the people delivering them.",
    category: "mobile",
    platforms: ["iOS", "Android"],
    role: "Mobile — consumer and driver clients",
    period: "2026",
    featured: true,
    status: "in-development",
    published: false,
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "NativeWind",
      "TanStack Query",
      "Zustand",
      "Stripe",
    ],
    highlights: [
      "Two apps built as one system - the driver client inherits the consumer app's conventions, primitives and design language rather than starting over.",
      "Stripe PaymentSheet checkout wired for Apple Pay and Google Pay, with merchant country handled as configuration because the apps ship across three markets.",
      "Live order tracking on react-native-maps, with push notifications for status changes.",
      "Tokens held in expo-secure-store behind a single storage module, so no screen touches credentials directly.",
      "A deliberate register of what is knowingly unfinished - payouts, live API runs, the Stripe account decision - kept in the repo so nothing unshipped is mistaken for an oversight.",
    ],
  },
  {
    slug: "compas-pilot",
    title: "Compas Pilot",
    tagline: "An AI assistant that plugs into the tools you already use",
    summary:
      "A cross-platform productivity app that connects a user's existing software and answers through an assistant - chat with thread history, task views, and an onboarding flow that maps their working setup.",
    category: "mobile",
    platforms: ["iOS", "Android"],
    role: "Frontend — React Native client",
    period: "2025 — 2026",
    featured: true,
    status: "shipped",
    published: false,
    stack: [
      "Expo",
      "React Native",
      "React 19",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Reanimated",
    ],
    highlights: [
      "A chat interface with persisted thread history and a context viewer, backed by Zustand stores written through to AsyncStorage so a cold start restores the last session.",
      "An onboarding flow that captures a job profile and connects the user's software before the assistant is ever used, so first answers have context.",
      "A single axios client with interceptors handling auth refresh, keeping token logic out of every feature.",
      "Interaction detail built on Reanimated 4, with a reusable UI primitive set (Button, Card, TextInput, Avatar) shared across auth, onboarding and dashboard.",
    ],
  },
  {
    slug: "heed",
    title: "Heed",
    tagline: "An AI inbox assistant that never sends without your tap",
    summary:
      "Connect your Gmail accounts and Heed reads the mail that does not need you, drafts replies for the mail that does, and only asks for your attention to review a draft and tap Send. Built solo - the app, the API and the landing page.",
    category: "mobile",
    platforms: ["Android", "API", "Web"],
    role: "Solo — React Native app, Node/Prisma API and Next.js web",
    period: "2026",
    featured: false,
    status: "in-development",
    published: false,
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Gmail API",
    ],
    highlights: [
      "A triage pipeline where cheap sender rules run before any model call, and anything the AI is unsure about stays unread and untouched rather than being guessed at.",
      "Nothing is ever sent without the user tapping Send: recipients are computed from the message headers in code, never taken from model output, and Send stays disabled while a draft still carries a placeholder only the user can fill.",
      "Inbox sync over Gmail's history API with idempotent workers, so an overlapping poll and a platform cron can both run without double-handling a message.",
      "OAuth tokens encrypted at rest with AES-256-GCM, and every Gmail call routed through one module that is the only place a client is built or a token refreshed.",
      "Ask your inbox: a streamed chat across every connected account whose answers cite the exact emails they used, as tappable rows.",
    ],
    links: {
      live: "https://heed.reactmode.dev",
      github: "https://github.com/abdullah43577/heed",
    },
  },
];

export const publishedProjects = projects.filter((p) => p.published !== false);

export const featuredProjects = publishedProjects.filter((p) => p.featured);

export function getProject(slug: string) {
  return publishedProjects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string) {
  const index = publishedProjects.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return publishedProjects[(index + 1) % publishedProjects.length];
}
