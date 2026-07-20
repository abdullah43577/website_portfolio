"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaEnvelope as FaEmailIcon,
  FaDollarSign,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import GradientTxt from "@/app/components/Reusables/GradientTxt";
import CustomBtn from "@/app/components/Reusables/CustomBtn";

function hasEmptyStrings(obj: any) {
  return Object.values(obj).some((value) => value === "");
}

export default function ClientContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    budget: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleFormUpdate = function (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectedPricing = function (e: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async function (e: FormEvent) {
    e.preventDefault();
    if (hasEmptyStrings(formData)) return toast.info("Please fill all fields");

    try {
      setIsSending(true);
      toast.info("Sending message, please wait...");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/sendMail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      const data = await response.json();
      toast.success(data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        budget: "",
        message: "",
      });
      setIsSending(false);
    } catch (error) {
      setIsSending(false);
      toast.error("Error sending message, please try again!");
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-5 lg:px-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <GradientTxt
            tagName="h2"
            txt="Let's Connect"
            className="text-4xl font-bold md:text-5xl"
          />
          <p className="mt-3 text-gray-500">
            Have a project in mind? Let's work together.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="lg:w-[35%]">
            <div className="sticky top-24">
              <h2 className="text-3xl font-bold md:text-4xl">Get in touch</h2>
              <p className="mb-10 mt-4 text-gray-600 md:text-lg">
                Have a project in mind? Looking to partner or work together?
                Reach out through the form and I'll get back to you in the next
                48 hours.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="mailto:officialayo540@gmail.com"
                  className="group flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition-all hover:border-gray-300 hover:shadow-md"
                >
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3 text-white">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="font-medium text-gray-900 group-hover:text-gray-700">
                      officialayo540@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+2347089111679"
                  className="group flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition-all hover:border-gray-300 hover:shadow-md"
                >
                  <div className="rounded-full bg-gradient-to-r from-green-500 to-teal-500 p-3 text-white">
                    <FaPhone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900 group-hover:text-gray-700">
                      +234-7089-111-679
                    </p>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="mb-4 text-sm font-medium text-gray-500">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/abdullah43577"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-100 p-3 text-gray-600 transition-all hover:bg-gray-200 hover:text-gray-900"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ayo540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-100 p-3 text-gray-600 transition-all hover:bg-gray-200 hover:text-gray-900"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/officialayo540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gray-100 p-3 text-gray-600 transition-all hover:bg-gray-200 hover:text-gray-900"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <form
            onSubmit={(e) => handleFormSubmit(e)}
            className="flex-1 rounded-2xl bg-white p-6 shadow-lg md:p-8"
          >
            <h3 className="mb-6 text-2xl font-bold">Send a Message</h3>

            <div className="mb-6 flex flex-col gap-4 md:flex-row">
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <div className="relative mt-2">
                  <FaUser className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    required
                    className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    onChange={(e) => handleFormUpdate(e)}
                  />
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <div className="relative mt-2">
                  <FaUser className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    required
                    className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    onChange={(e) => handleFormUpdate(e)}
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="relative mt-2">
                <FaEmailIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  id="email"
                  value={formData.email}
                  required
                  className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-4 text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  onChange={(e) => handleFormUpdate(e)}
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700"
              >
                Your Budget
              </label>
              <div className="relative mt-2">
                <FaDollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <select
                  name="budget"
                  id="budget"
                  required
                  className="w-full appearance-none rounded-lg border border-gray-200 py-3 pl-10 pr-10 text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  onChange={(e) => handleSelectedPricing(e)}
                  value={formData.budget}
                >
                  <option value="">Choose Your Budget</option>
                  <option value="0-500">$0 - $500</option>
                  <option value="500-1k">$500 - $1,000</option>
                  <option value="1k-2k">$1,000 - $2,000</option>
                  <option value="2k-5k">$2,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="More than 10k">$10,000+</option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Tell me more about your project
              </label>
              <div className="relative mt-2">
                <textarea
                  cols={30}
                  rows={6}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  name="message"
                  id="message"
                  value={formData.message}
                  required
                  placeholder="Tell me about your project, goals, and timeline..."
                  onChange={(e) => handleFormUpdate(e)}
                />
              </div>
            </div>

            <CustomBtn
              txt={isSending ? "Submitting..." : "Submit Now!"}
              className="ml-auto w-[200px]"
              disabled={isSending}
              type="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
