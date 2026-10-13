export const faq = [
  {
    question: "What do you actually take on?",
    answer:
      "Whole products, or a well-defined slice of one. That usually means an API and database schema, a web client, a React Native app, or all three together. I'm most useful when I can own a feature end to end rather than hand off at the boundary between the client and the service.",
  },
  {
    question: "Do you build mobile apps, or just responsive websites?",
    answer:
      "Genuine native apps. React Native and Expo, built for iOS and Android, with EAS builds, store submission, push notifications, in-app payments and offline behaviour. I've shipped apps for marketplaces, membership organisations, hiring platforms and AI assistants - and separate driver-side apps where the product needed one.",
  },
  {
    question: "What does working together look like?",
    answer:
      "A short scoping conversation to agree on what's actually being built, then regular visible progress rather than a long silence and a reveal. You get working software early, deployed where you can use it, and honest reporting when something is harder than estimated.",
  },
  {
    question: "How do you keep a codebase from rotting?",
    answer:
      "Conventions written down and enforced. Strict layering so business rules never leak into a controller, hard limits on file size so nothing becomes a monolith, TypeScript in strict mode from the schema through to the button, and validation at every boundary where data enters. Every project I run carries its conventions in the repo, so the next person - including future me - inherits the decisions instead of guessing them.",
  },
  {
    question: "Can you take over an existing project?",
    answer:
      "Yes, and I've done it more than once - including carrying a live members portal through a full visual redesign, module by module, without a rewrite and without downtime. Inheriting a codebase means reading it and respecting the decisions already paid for before changing anything.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Maintenance and support, if you want it: fixes, dependency and SDK upgrades, store resubmissions, and new features as the product grows. Mobile especially needs someone on it - the platforms move whether or not your app does.",
  },
] as const;
