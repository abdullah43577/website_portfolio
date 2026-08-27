export const baseUrl =
  process.env.NEXT_PUBLIC_LIVE_URL || "https://reactmode.dev";

export const site = {
  name: "Abdullah Ayoola",
  shortName: "Abdullah",
  handle: "ReactMode",
  role: "Fullstack & Mobile Engineer",
  currentRole: "Fullstack Developer at E-Metric Suites",
  location: "Lagos, Nigeria",
  email: "officialayo540@gmail.com",
  cv: "/Abdullah Ayoola CV.pdf",
  availability: {
    open: true,
    label: "Available for new work",
  },
  description:
    "Fullstack engineer building production web platforms and cross-platform mobile apps — React, Next.js, React Native and Node, from database schema to shipped interface.",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/abdullah43577",
      handle: "abdullah43577",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayo540",
      handle: "ayo540",
    },
    {
      label: "X",
      href: "https://x.com/officialayo540",
      handle: "officialayo540",
    },
  ],
} as const;

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Stack", href: "/#stack" },
  { label: "Experience", href: "/#experience" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "All work", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Open source", href: "/#open-source" },
  { label: "Contact", href: "/contact" },
] as const;
