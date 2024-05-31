import CustomBtn from "./Reusables/CustomBtn";
import CustomNav from "./Reusables/CustomNav";
import GradientTxt from "./Reusables/GradientTxt";
import profImg from "../../../../public/prof_img.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="my-[80px] gap-16 xl:flex">
      <div>
        <h1 className="mb-4 text-[40px] font-bold leading-[110%] md:text-[68px] lg:text-[75px]">
          <GradientTxt tagName="span" txt="I design products" /> that delights
          and inspire people.
        </h1>

        <p className="mb-16 text-[19px] text-[#666] lg:text-[22px]">
          Hi! I'm Abdullah, a Fullstack Web Developer based in Nigeria. I create
          user-friendly interfaces for fast-growing startups.
        </p>

        <div className="mb-16 flex flex-col gap-4 md:flex-row">
          <CustomBtn txt="Book a call" className="w-[150px]" />
          <CustomNav
            txt="Download CV"
            className="flex items-center gap-2 text-lg font-bold"
          />
        </div>
      </div>

      <Image
        src={profImg}
        alt="profile image"
        loading="lazy"
        className="mx-auto w-full lg:w-[500px]"
      />
    </section>
  );
}
