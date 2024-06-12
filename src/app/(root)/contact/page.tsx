import ClientContact from "./client/ClientContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me! Whether you have questions, want to discuss a project, or just want to connect, feel free to reach out. I'm always open to new opportunities and collaborations.",
  openGraph: {
    description:
      "Get in touch with me! Whether you have questions, want to discuss a project, or just want to connect, feel free to reach out. I'm always open to new opportunities and collaborations.",
  },
};

export default function Contact() {
  return <ClientContact />;
}
