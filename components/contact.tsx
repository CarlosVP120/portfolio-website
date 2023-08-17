"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          carlosveryan4@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async () => {
          emailjs
            .send(
              "service_n98qgep",
              "template_yyvrqqr",
              {
                email: email,
                message: message,
              },
              "N00Fs9C1hV_wWVj-x"
            )
            .then(
              (result) => {
                toast.success("Email sent successfully!"); // Show success toast notification
              },
              (error) => {
                toast.error("There was an error sending the email."); // Show error toast notification
                return;
              }
            );
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
