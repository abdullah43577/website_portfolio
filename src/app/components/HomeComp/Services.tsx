"use client";

import GradientTxt from "../Reusables/GradientTxt";
import Image from "next/image";
import FadeUp from "@/animations/FadeUp";
import { useEffect, useState } from "react";
import type { Services } from "../../../../types/Services";
import { getServices } from "../../../../sanity/sanity-utils";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

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
    <section id="services" className="py-20">
      <div className="container mx-auto px-5 lg:px-20">
        {/* Header */}
        <FadeUp tag="div" className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <GradientTxt
              tagName="h6"
              txt="SERVICES"
              className="text-sm font-bold tracking-[4px]"
            />
            <Sparkles className="h-4 w-4 text-purple-500" />
          </div>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.2] md:text-4xl lg:text-5xl">
            Code that solves problems, <br />
            <GradientTxt tagName="span" txt="one product at a time" />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            I provide high-quality development services tailored to your needs
          </p>
        </FadeUp>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            // Generate a unique gradient for each card
            const gradients = [
              "from-blue-50 to-indigo-50",
              "from-purple-50 to-pink-50",
              "from-green-50 to-emerald-50",
              "from-orange-50 to-red-50",
              "from-cyan-50 to-blue-50",
              "from-rose-50 to-pink-50",
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Gradient Background */}
                  <div className="relative mb-6 inline-block">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-10 blur-xl transition-opacity duration-300 group-hover:opacity-30" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <Image
                        width={40}
                        height={40}
                        src={service.icon}
                        alt={service.alt}
                        priority
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold leading-[1.2] text-gray-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5">
                    {service.lists.map((list, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-sm font-medium text-gray-700"
                      >
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                        <span>{list}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Decorative Bottom Bar */}
                  {/* <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full" /> */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
