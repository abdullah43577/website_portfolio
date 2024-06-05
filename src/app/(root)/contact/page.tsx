"use client";

import { Toast } from "@/app/components/Reusables/Toast";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

function hasEmptyStrings(obj: any) {
  return Object.values(obj).some((value) => value === "");
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    budget: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleFormUpdate = function (e: ChangeEvent<HTMLInputElement | any>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectedPricing = function (e: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async function (e: FormEvent) {
    e.preventDefault();
    if (hasEmptyStrings(formData)) return alert("Please fill all fields");

    try {
      setIsSending(true);
      Toast({ icon: "info", title: "Sending your message..." });
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
      Toast({ icon: "success", title: data.message });
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
      Toast({ icon: "error", title: error as string });
    }
  };

  return (
    <section>
      <div className="container mx-auto mt-[80px] flex flex-col justify-between gap-10 px-5 pt-5 lg:px-20 xl:flex-row">
        <div className="xl:w-[40%]">
          <h2 className="text-[37px] font-bold md:text-[56px]">Get in touch</h2>
          <p className="mb-10 mt-8 text-lg text-[#5c5c5c] md:text-xl">
            Have a project in mind? Looking to partner or work together? Reach
            out through the form and I'll get back to you in the next 48 hours.
          </p>
          <Link
            href="mailto:officialayo540@gmail.com"
            className="mb-4 flex items-center gap-2 text-xl font-bold text-[#5c5c5c]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#5c5c5c"
              className="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            <span>officialayo540@gmail.com</span>
          </Link>
          <Link
            href="tel:+2347089111679"
            className="mb-8 flex items-center gap-2 text-xl font-bold text-[#5c5c5c]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#5c5c5c"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            <span>+234-7089-111-679</span>
          </Link>
        </div>

        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="max-w-[655px] xl:w-[60%]"
        >
          <div className="mb-6 flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              <label htmlFor="First Name" className="font-bold">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                required
                className="mt-4 w-full bg-[#f2f6f7] py-[28px] pl-[24px] pr-[12px] text-[#333] outline-none md:py-[20px]"
                onChange={(e) => handleFormUpdate(e)}
              />
            </div>

            <div className="w-full">
              <label htmlFor="Last Name" className="font-bold">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                required
                className="mt-4 w-full bg-[#f2f6f7] py-[28px] pl-[24px] pr-[12px] text-[#333] outline-none md:py-[20px]"
                onChange={(e) => handleFormUpdate(e)}
              />
            </div>
          </div>

          <div className="mb-6 w-full">
            <label htmlFor="Email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              required
              className="mt-4 w-full bg-[#f2f6f7] py-[28px] pl-[24px] pr-[12px] text-[#333] outline-none md:py-[20px]"
              onChange={(e) => handleFormUpdate(e)}
            />
          </div>

          <div className="mb-6 w-full">
            <label htmlFor="budget" className="block font-bold">
              Your Budget
            </label>
            <div className="relative mt-4 flex w-full items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#666"
                className="bi bi-currency-dollar absolute left-0"
                viewBox="0 0 16 16"
              >
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
              </svg>
              <select
                name="budget"
                required
                className="w-full bg-[#f2f6f7] py-[28px] pl-[32px] pr-[24px] text-[#666] outline-none md:py-[20px]"
                onChange={(e) => handleSelectedPricing(e)}
              >
                <option value="0-500">0-500</option>
                <option value="500-1k">500-1k</option>
                <option value="1k-2k">1k-2k</option>
                <option value="2k-5k">2k-5k</option>
                <option value="5k-1k">5k-10k</option>
                <option value="More than 10k">More than 10k</option>
              </select>
            </div>
          </div>

          <div className="mb-6 w-full">
            <label htmlFor="message" className="font-bold">
              Tell me a bit more what you're looking for?
            </label>
            <textarea
              cols={30}
              rows={10}
              className="mt-4 w-full bg-[#f2f6f7] py-[28px] pl-[24px] pr-[12px] text-[#333] outline-none md:py-[20px]"
              name="message"
              value={formData.message}
              required
              placeholder="Enter your message here..."
              onChange={(e) => handleFormUpdate(e)}
            />
          </div>

          <div className="relative h-[60px] w-[200px] bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
            <motion.button
              initial={{ right: "8px", bottom: "8px" }}
              whileHover={{ right: 0, bottom: 0 }}
              className="absolute h-[60px] w-[200px] bg-black text-lg font-medium text-white"
            >
              {isSending ? "Submitting..." : "Submit Now!"}
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}
