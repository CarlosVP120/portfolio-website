"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently studying{" "}
        <span className="font-medium">Computer Science</span> at Tec de
        Monterrey, in Guadalajara, Jalisco. I am a{" "}
        <span className="font-medium">full-stack web developer</span> focuses on
        technologies like{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. I am also
        familiar with other languages like C++ and Python. I am always looking
        to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">half-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy going for a
        drive, listening to Post Malone, and playing the piano. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">Real Estate</span>.
      </p>
    </motion.section>
  );
}
