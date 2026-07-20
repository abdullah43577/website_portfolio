"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CustomBtnProps {
  className?: string;
  txt: string;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function CustomBtn({
  className = "",
  txt,
  href,
  disabled = false,
  type = "button",
  onClick,
  style,
}: CustomBtnProps) {
  const buttonContent = (
    <div
      className={`relative h-[60px] bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 ${className}`}
      style={style}
    >
      <motion.button
        initial={{ right: "8px", bottom: "8px" }}
        whileHover={{ right: 0, bottom: 0 }}
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`absolute h-[60px] bg-black text-lg font-medium text-white ${className}`}
        style={{
          right: "8px",
          bottom: "8px",
          ...style,
        }}
      >
        {txt}
      </motion.button>
    </div>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
}
