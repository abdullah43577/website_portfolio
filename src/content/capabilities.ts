export const capabilities = [
  {
    id: "mobile",
    title: "Mobile applications",
    body: "Cross-platform iOS and Android apps in React Native and Expo — the real kind, with auth, payments, push notifications, offline behaviour and a store release at the end of it.",
    items: [
      "Expo Router, EAS builds and store submission",
      "Offline-first data with persisted caches",
      "Stripe, RevenueCat and in-app entitlements",
      "Push notifications and deep links",
    ],
  },
  {
    id: "web",
    title: "Web platforms",
    body: "Dashboards and products that hold up under real data — dense tables, live updates, charts, exports, and interfaces that stay usable on a phone.",
    items: [
      "React and Next.js with strict TypeScript",
      "Design systems and semantic theming",
      "Data-heavy tables, charts and PDF export",
      "Accessibility and mobile-first layout",
    ],
  },
  {
    id: "backend",
    title: "APIs and infrastructure",
    body: "The service behind the screen: schema design, layered business logic, background jobs, real-time transport, and the operational tooling that keeps it maintainable.",
    items: [
      "Node, Express, Prisma, Mongoose",
      "PostgreSQL and MongoDB schema design",
      "Queues and background jobs with BullMQ",
      "Multi-tenancy, auth and role models",
    ],
  },
] as const;
