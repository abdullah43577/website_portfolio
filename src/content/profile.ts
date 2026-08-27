export const about = {
  lede: "I build the whole product — the API, the database schema, the web client and the app you install on your phone.",
  paragraphs: [
    "I'm a fullstack engineer based in Lagos. Most of what I've shipped since 2023 has been the unglamorous kind of software people actually depend on: a multi-tenant HR and performance platform, a job marketplace with real-time messaging and queued background work, a membership system handling dues, elections and events for associations, and a handful of React Native apps in the App Store and Play Store.",
    "The web and mobile split isn't a résumé line — it's how I work day to day. A feature usually lands as a Prisma or Mongoose model, a service layer, a set of routes, a React dashboard and an Expo screen, and I'd rather own all five than hand off at the boundary and argue about the contract later.",
    "I care a lot about the parts that don't demo well. Strict layering so business rules never leak into a controller. Every query scoped by owner, because that's the entire authorisation model. Offline-first caching so the app still works on Lagos mobile data. Semantic design tokens so dark mode isn't a bolt-on. It's slower on day one and much faster for the next two years.",
  ],
  principles: [
    {
      title: "Small files, strict layers",
      body: "Controller to service to repository, never skipped. Screens orchestrate and compose; they don't hold three hundred lines of JSX. A monolith is a decision you pay for every sprint after.",
    },
    {
      title: "Typed end to end",
      body: "TypeScript in strict mode from the schema to the button, Zod at every boundary where data enters. If it compiles and the schema parses, a whole category of bug never reaches staging.",
    },
    {
      title: "Built for the network people have",
      body: "Persisted query caches, optimistic writes, real offline states, and lists that stay usable on a slow connection. Assume the network fails, because for most of my users it regularly does.",
    },
    {
      title: "Design systems, not screens",
      body: "Semantic tokens, a shared primitive set, one way to build a header. Consistency comes from having somewhere obvious to put things, not from discipline in review.",
    },
  ],
} as const;

export const stats = [
  { value: "3+", label: "Years shipping" },
  { value: "6", label: "Mobile apps" },
  { value: "10+", label: "Production services" },
  { value: "2", label: "npm packages" },
] as const;
