import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

type Props = {
  tag: "h1" | "h2" | "h3" | "h4" | "p" | "div";
  children: ReactNode;
  className?: string;
  to?: string;
};

export default function FadeUp({ tag, children, className, to }: Props) {
  const router = useRouter();
  const MotionTag = motion[tag];

  const handleNavigation = function () {
    router.push(to as string);
  };

  return (
    <MotionTag
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={className}
      onClick={to ? handleNavigation : () => null}
    >
      {children}
    </MotionTag>
  );
}
