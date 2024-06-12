import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { seoKeywords } from "./seoKeywords";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_LIVE_URL as string),
  keywords: seoKeywords,
  title: {
    default: "Home | <ReactMode />",
    template: "%s | <ReactMode />",
  },
  description:
    "Welcome to my professional portfolio repository! This project showcases my journey, skills, and projects as a fullstack developer. It serves as a central repository for all my work, experiences, and achievements in web development.",
  openGraph: {
    description:
      "Welcome to my professional portfolio repository! This project showcases my journey, skills, and projects as a fullstack developer. It serves as a central repository for all my work, experiences, and achievements in web development.",
    images: [
      new URL("/opengraphImg.png", process.env.NEXT_PUBLIC_LIVE_URL as string)
        .href,
    ], // image to be shown of website when linked to different sources
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="32" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
