"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import GradientTxt from "./Reusables/GradientTxt";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Header() {
  const [isNavClicked, setIsNavClicked] = useState(false);
  const pathname = usePathname();

  // Close mobile nav on route change
  useEffect(() => {
    setIsNavClicked(false);
  }, [pathname]);

  // Prevent scroll when mobile nav is open
  useEffect(() => {
    if (isNavClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNavClicked]);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/articles", label: "Articles" },
  ];

  return (
    <header className="relative z-50">
      <div className="container mx-auto px-5 pt-5 lg:px-20">
        <nav>
          <div className="flex items-center justify-between pb-3">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-medium italic md:text-2xl lg:font-bold"
            >
              {"<React"}
              <GradientTxt tagName="span" txt="Mode />." />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-gray-600 ${
                    pathname === link.href ||
                    (link.href !== "/#about" &&
                      link.href !== "/#services" &&
                      pathname.includes(link.href.replace("/", "")))
                      ? "text-gray-600"
                      : "text-gray-900"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                      pathname === link.href ||
                      (link.href !== "/#about" &&
                        link.href !== "/#services" &&
                        pathname.includes(link.href.replace("/", "")))
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}

              {/* Book a call button - Desktop */}
              <Link
                href="/contact"
                className={`group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  pathname === "/contact" ? "opacity-80" : ""
                }`}
              >
                <span>Book a call</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsNavClicked(!isNavClicked)}
              className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 hover:bg-gray-200 lg:hidden"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isNavClicked ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Navigation - Improved */}
          <AnimatePresence>
            {isNavClicked && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                  onClick={() => setIsNavClicked(false)}
                />

                {/* Mobile Menu */}
                <motion.div
                  initial={{
                    x: "100%",
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    x: "100%",
                    opacity: 0,
                  }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                  }}
                  className="fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl lg:hidden"
                >
                  <div className="flex h-full flex-col">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between border-b border-gray-100 p-6">
                      <Link
                        href="/"
                        className="text-lg font-medium italic"
                        onClick={() => setIsNavClicked(false)}
                      >
                        {"<React"}
                        <GradientTxt tagName="span" txt="Mode />." />
                      </Link>
                      <button
                        onClick={() => setIsNavClicked(false)}
                        className="rounded-full p-2 hover:bg-gray-100"
                        aria-label="Close menu"
                      >
                        <X className="h-5 w-5 text-gray-700" />
                      </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex-1 overflow-y-auto p-6">
                      <div className="space-y-1">
                        {navLinks.map((link, index) => (
                          <motion.div
                            key={link.href}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              href={link.href}
                              className={`flex items-center rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-gray-50 ${
                                pathname === link.href ||
                                (link.href !== "/#about" &&
                                  link.href !== "/#services" &&
                                  pathname.includes(link.href.replace("/", "")))
                                  ? "bg-gray-50 text-gray-900"
                                  : "text-gray-600"
                              }`}
                              onClick={() => setIsNavClicked(false)}
                            >
                              {link.label}
                              {pathname === link.href ||
                                (link.href !== "/#about" &&
                                  link.href !== "/#services" &&
                                  pathname.includes(
                                    link.href.replace("/", ""),
                                  ) && (
                                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                                  ))}
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className="my-6 h-px bg-gray-200" />

                      {/* Mobile CTA */}
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Link
                          href="/contact"
                          className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3.5 text-center text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                          onClick={() => setIsNavClicked(false)}
                        >
                          <span>Book a call</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </motion.div>

                      {/* Social Links - Mobile */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        className="mt-8 flex items-center justify-center gap-4"
                      >
                        <a
                          href="https://github.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full p-2 text-gray-400 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
                          aria-label="GitHub"
                        >
                          <FaGithub className="h-5 w-5" />
                        </a>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full p-2 text-gray-400 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin className="h-5 w-5" />
                        </a>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full p-2 text-gray-400 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
                          aria-label="Twitter"
                        >
                          <FaTwitter className="h-5 w-5" />
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
