import Link from "next/link";
import GradientTxt from "../../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactDetails() {
  const date = new Date().getFullYear();

  const navLinks = [
    {
      name: "About",
      path: "/#about",
      icon: null,
    },
    {
      name: "Services",
      path: "/#services",
      icon: null,
    },
    {
      name: "Experience",
      path: "/#experience",
      icon: null,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: null,
    },
    {
      name: "Articles",
      path: "/articles",
      icon: null,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: null,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/ayo540",
      icon: FaLinkedin,
    },
    {
      name: "Twitter",
      path: "https://x.com/officialayo540",
      icon: FaTwitter,
    },
    {
      name: "GitHub",
      path: "https://github.com/abdullah43577",
      icon: FaGithub,
    },
  ];

  return (
    <section className="pt-[80px] xl:pt-[300px]">
      <FadeUp tag="div" className="mb-8">
        <h2 className="text-[36px] font-bold tracking-[0.5px] text-white md:text-[50px] xl:text-[54px]">
          Ready to create something amazing?
        </h2>
        <GradientTxt
          tagName="h4"
          txt="Let's hop on a call."
          className="call sharedStyles cursor-pointer text-[30px] font-bold tracking-[0.5px] md:text-[50px] xl:text-[54px]"
        />
      </FadeUp>

      <div className="flex flex-col xl:flex-row xl:justify-between">
        <div>
          <h2 className="font-medium italic text-white sm:text-base md:text-[24px] lg:font-bold">
            {" <React"}
            <GradientTxt tagName="span" txt="Mode />." />
          </h2>

          <div className="mt-3 flex items-center gap-2 text-[#8a95ad]">
            <FaMapMarkerAlt className="h-4 w-4" />
            <span className="text-sm">Lagos, Nigeria</span>
          </div>

          <div className="mt-2 flex items-center gap-3">
            <FaEnvelope className="h-4 w-4 text-[#8a95ad]" />
            <Link
              href="mailto:officialayo540@gmail.com"
              target="_blank"
              className="text-[15px] font-medium text-[#8a95ad] transition-colors duration-300 hover:text-white"
            >
              officialayo540@gmail.com
            </Link>
          </div>

          {/* Social Icons - New Section */}
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/ayo540"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2.5 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/officialayo540"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2.5 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
              aria-label="Twitter"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/abdullah43577"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2.5 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 xl:mt-0 xl:grid-cols-3 xl:gap-10">
          {navLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <Link
                key={i}
                href={link.path}
                target={link.path.startsWith("http") ? "_blank" : "_self"}
                rel={
                  link.path.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`links sharedStyles flex items-center gap-2 border-b border-[#8a95ad] pb-4 text-white transition-all duration-300 hover:pl-2 hover:text-gray-300 xl:border-none xl:pb-0 ${
                  Icon ? "hover:scale-105" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="h-4 w-4" />}
                  <span className="block md:text-xl">{link.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <p className="pb-10 pt-[100px] text-center text-sm text-[#8a95ad] md:text-base">
        Copyright &copy; {date}{" "}
        <GradientTxt tagName="span" txt="<ReactMode/>." /> all rights reserved.
        Built using NextJS, Typescript, TailwindCSS, Framer motion, Sanity and
        NodeJS.
      </p>
    </section>
  );
}
