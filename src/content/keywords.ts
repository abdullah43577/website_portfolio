import { site } from "./site";

const identity = [
  site.name,
  "Abdullah Ayoola portfolio",
  site.handle,
  "fullstack engineer",
  "mobile app developer",
  "software engineer Lagos",
  "Nigerian software engineer",
];

const craft = [
  "React developer",
  "Next.js developer",
  "React Native developer",
  "Expo developer",
  "TypeScript engineer",
  "Node.js backend developer",
  "PostgreSQL",
  "REST API development",
  "multi-tenant SaaS",
  "cross-platform mobile development",
];

export const siteKeywords = [...identity, ...craft];

export const workKeywords = [
  ...identity.slice(0, 3),
  "software engineering portfolio",
  "React case studies",
  "React Native app projects",
  "fullstack project portfolio",
  "web and mobile projects",
  ...craft.slice(0, 6),
];

export const contactKeywords = [
  ...identity.slice(0, 3),
  "hire fullstack developer",
  "hire React Native developer",
  "hire Next.js developer",
  "freelance web developer Lagos",
  "contract software engineer",
  "remote fullstack engineer",
];

export function projectKeywords(project: {
  title: string;
  category: string;
  platforms: string[];
  stack: string[];
}) {
  return [
    project.title,
    `${project.title} case study`,
    `${project.category} project`,
    ...project.platforms.map((platform) => `${platform} development`),
    ...project.stack.slice(0, 8),
    site.name,
  ];
}

export const knowsAbout = [
  "Fullstack Web Development",
  "Mobile Application Development",
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "REST API Design",
  "Multi-tenant Architecture",
];
