export type Role = {
  title: string;
  org: string;
  period: string;
  current?: boolean;
  note?: string;
};

export const work: Role[] = [
  {
    title: "Fullstack Developer",
    org: "E-Metric Suites",
    period: "Mar 2026 — Present",
    current: true,
    note: "E-Metric Suite, E-Metric Jobs and Rel8 - web, API and mobile.",
  },
  {
    title: "Frontend Developer",
    org: "CompasAI",
    period: "Aug 2025 — Mar 2026",
    note: "React Native client for an AI productivity assistant.",
  },
  {
    title: "Mobile Developer",
    org: "Claymore Ltd.",
    period: "Mar 2025 — Jan 2026",
    note: "Cross-platform application work in React Native and Expo.",
  },
  {
    title: "Fullstack Developer",
    org: "Sequential Jobs",
    period: "Nov 2024 — Oct 2025",
    note: "Job marketplace - Express and Prisma API, Next.js dashboard, Expo client.",
  },
  {
    title: "Frontend Developer",
    org: "SustainaFinance DataNexus",
    period: "Jan 2024 — Jan 2025",
  },
  {
    title: "Frontend Developer",
    org: "Nexilistings",
    period: "2023 — 2024",
  },
  {
    title: "Backend Developer, Intern",
    org: "HNGx",
    period: "Sep 2023 — Oct 2023",
  },
];

export const education: Role[] = [
  {
    title: "B.Ed, Social Studies",
    org: "Obafemi Awolowo University",
    period: "2019 — 2026",
  },
  {
    title: "CS50P — Introduction to Programming with Python",
    org: "Harvard University (edX)",
    period: "2026",
  },
  {
    title: "CS50x — Introduction to Computer Science",
    org: "Harvard University (edX)",
    period: "2023",
  },
];
