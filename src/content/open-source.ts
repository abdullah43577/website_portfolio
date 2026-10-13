export const packages = [
  {
    name: "@reactmode/unused-file-detector",
    command: "npx @reactmode/unused-file-detector",
    description:
      "Finds files whose exports are never imported, and dependencies in package.json that nothing uses. Built after one too many refactors left dead modules behind.",
    tags: ["CLI", "TypeScript", "Node.js"],
    npm: "https://www.npmjs.com/package/@reactmode/unused-file-detector",
    github: "https://github.com/abdullah43577/unused-file-detector-cli",
  },
  {
    name: "@reactmode/env-check",
    command: "npx @reactmode/env-check",
    description:
      "Validates .env against .env.example before runtime and reports what's missing or extra - so a deploy fails on your machine rather than in production.",
    tags: ["CLI", "Node.js", "DX"],
    npm: "https://www.npmjs.com/package/@reactmode/env-check",
    github: "https://github.com/abdullah43577/env-check",
  },
] as const;
