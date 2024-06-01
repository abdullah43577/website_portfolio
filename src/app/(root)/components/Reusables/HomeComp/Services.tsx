import GradientTxt from "../GradientTxt";
import servicesIcon1 from "../../../../../../public/services_1.svg";
import servicesIcon2 from "../../../../../../public/services_2.svg";
import servicesIcon3 from "../../../../../../public/services_3.svg";
import Image from "next/image";

export default function Services() {
  return (
    <section className="mb-[80px]">
      <GradientTxt
        tagName="h6"
        txt="SERVICES"
        className="mb-4 text-center text-[22px] font-bold"
      />
      <h2 className="mx-auto mb-10 max-w-[800px] text-center text-[36px] font-bold leading-[120%] tracking-[0.5px] lg:text-[54px]">
        Code that solves problems, one product at a time.
      </h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <Image src={servicesIcon1} alt="services icon 1" />
          <h6 className="my-4 mb-6 text-[19px] font-bold leading-[110%] lg:mt-10">
            What I can do for you
          </h6>
          <p className="mb-4 leading-[22px] text-[#666]">
            Deliver faster, better products that your users will love. Here are
            the services I provide:
          </p>
          <ul>
            <li className="list-disc font-bold">Design Strategy</li>
            <li className="my-2 list-disc font-bold">
              Web and Mobile App Design
            </li>
            <li className="list-disc font-bold">Front-end Development</li>
            <li className="my-2 list-disc font-bold">Back-end Development</li>
            <li className="list-disc font-bold">Fullstack Development</li>
          </ul>
        </div>

        <div>
          <Image src={servicesIcon2} alt="services icon 2" />
          <h6 className="my-4 mb-6 text-[19px] font-bold leading-[110%] lg:mt-10">
            Applications I'm fluent in
          </h6>
          <p className="mb-4 leading-[22px] text-[#666]">
            Every designer needs the right tools to craft the perfect product.
            Thankfully, I'm proficient in multiple platforms:
          </p>
          <ul>
            <li className="list-disc font-bold">Sketch</li>
            <li className="my-2 list-disc font-bold">Webflow</li>
            <li className="list-disc font-bold">Figma</li>
          </ul>
        </div>

        <div>
          <Image src={servicesIcon3} alt="services icon 3" />
          <h6 className="my-4 mb-6 text-[19px] font-bold leading-[110%] lg:mt-10">
            What you can expect
          </h6>
          <p className="mb-4 leading-[22px] text-[#666]">
            I design products that go beyond aesthetics—they're shippable and
            usable.
          </p>
          <ul>
            <li className="list-disc font-bold">
              Clean and Functional: Intuitive designs that prioritize
              functionality.
            </li>
            <li className="my-2 list-disc font-bold">
              Device and User Friendly: Seamless experiences across all devices.
            </li>
            <li className="list-disc font-bold">
              Efficient and Maintainable: Code that is easy to manage and scale.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
