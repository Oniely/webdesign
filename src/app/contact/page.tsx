"use client";

import { MoveDownRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/contact/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <section className="min-h-dvh w-full pt-[8rem] padding-container max-container pb-[10rem]">
      <div className="grid grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col gap-8 col-span-2">
          <h1 className="text-[8vw] font-semibold leading-none">
            How can <br /> we help?
          </h1>
          <p className="">
            Let us know where we can help you, we are always available on
            weekdays! <br /> Fill out the following form and we will get back to
            you within the day.
          </p>
        </div>
        <a href="#contact-us" className="relative size-50 mt-6 md:mt:0">
          <div
            className="w-full h-full rounded-full relative animate-spin"
            style={{
              animationDuration: "10s",
            }}
          >
            <Image src="/images/circle.png" alt="circle" fill />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <MoveDownRight className="size-10" />
          </div>
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-20 gap-8">
        <div className="col-span-2" id="contact-us">
          <form
            action=""
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-8"
          >
            <div className="flex flex-col">
              <label>What&apos;s your name?</label>
              <input
                type="text"
                placeholder="Add your full name"
                className="px-2 py-3 border-b border-foreground w-full md:w-[75%]"
                value={formData.name}
                onChange={handleChange}
                name="name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label>What&apos;s your email address?</label>
              <input
                type="email"
                placeholder="Add your email address"
                className="px-2 py-3 border-b border-foreground w-full md:w-[75%]"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label>What&apos;s your phone number?</label>
              <input
                type="text"
                placeholder="Add your phone number"
                className="px-2 py-3 border-b border-foreground w-full md:w-[75%]"
                value={formData.number}
                onChange={handleChange}
                name="number"
                required
              />
            </div>
            <div className="flex flex-col">
              <label>What&apos;s your Inquiry?</label>
              <textarea
                className="px-2 py-3 border border-foreground w-full md:w-[75%]"
                placeholder="Add inquiry here..."
                value={formData.message}
                onChange={handleChange}
                name="message"
                required
              />
            </div>
            <button
              type="submit"
              className="text-center bg-primary py-4 w-full md:w-[75%] text-background hover:bg-primary/90"
            >
              Submit
            </button>
          </form>
          {message && (
            <p
              className={`mt-4 text-center ${
                message.includes("successful")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
        <div className="space-y-10">
          <div className="flex flex-col">
            <h3 className="text-primary font-medium mb-2">Call Us</h3>
            <p>+123 456 7890</p>
            <p>+123 456 7890</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-primary font-medium mb-2">Address</h3>
            <p>Southland College</p>
            <p>BetterFuture Building</p>
            <p>Pennsylvania(PA), 19462</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
