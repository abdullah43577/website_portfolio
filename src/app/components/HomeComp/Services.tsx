"use client";

import GradientTxt from "../Reusables/GradientTxt";
import Image from "next/image";
import FadeUp from "@/animations/FadeUp";
import { useEffect, useState } from "react";
import type { Services } from "../../../../types/Services";
import { getServices } from "../../../../sanity/sanity-utils";
import { toast } from "react-toastify";

export default function Services() {
  const [services, setServices] = useState<Services[]>([]);

  useEffect(() => {
    const fetchServices = async function () {
      try {
        const services = await getServices();
        setServices(services);
      } catch (error) {
        toast.error("Failed to fetch services. Please try again later.");
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="services" className="mb-[80px]">
      <FadeUp tag="div" className="mb-16">
        <GradientTxt
          tagName="h6"
          txt="SERVICES"
          className="mb-4 text-center text-[22px] font-bold"
        />
        <h2 className="mx-auto mb-10 max-w-[800px] text-center text-[36px] font-bold leading-[120%] tracking-[0.5px] lg:text-[54px]">
          Code that solves problems, one product at a time.
        </h2>
      </FadeUp>

      <FadeUp
        tag="div"
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <div key={service._id}>
            <Image
              width={70}
              height={70}
              src={service.icon}
              alt={service.alt}
              priority
            />
            <h6 className="my-4 mb-6 text-[19px] font-bold leading-[110%] lg:mt-10">
              {service.title}
            </h6>
            <p className="mb-4 leading-[22px] text-[#666]">
              {service.description}
            </p>
            <ul className="inline-flex flex-col gap-3 pl-5 md:pl-0">
              {service.lists.map((list, i) => (
                <li key={i} className="list-disc font-bold">
                  {list}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </FadeUp>
    </section>
  );
}
