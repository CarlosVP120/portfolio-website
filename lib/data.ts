import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import apeironai from "@/public/apeironai.png";
import solfund from "@/public/solfund.png";
import soldnoche from "@/public/soldnoche.png";
import chatpdf from "@/public/chatpdf.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Automation Engineer Intern",
    location: "Guadalajara, JAL",
    description:
      "I worked as an automation engineer intern in Avnet, inc. for 6 months. I learned about the manufacturing industry and how to automate the daily tasks of the sales team.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Hackathon Winner",
    location: "Guadalajara, JAL",
    description:
      "I won the first place in the 2023 Blockchain Hackathon. I created a web app that allows users to create and fund projects using the Ethereum blockchain.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Hackathon Winner",
    location: "Guadalajara, JAL",
    description:
      "I won the first place in the 2023 Hidrohack Hackathon. I created a Python program to predict the quality of the water in the city of Guadalajara based on the data provided by the government.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Founder & CEO",
    location: "Guadalajara, JAL",
    description:
      "I founded ApeironAI, an AI Automation Agency that helps companies automate their business using AI tools like AI Chatbots, Content Generation Systems, and AI enhanced automations.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "ApeironAI",
    description:
      "I created this full-stack project in a period of 2 months. Users can use AI to make their daily tasks easier.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "GPT-3"],
    imageUrl: apeironai,
    link: "https://www.apeiron-ai.com/",
  },
  {
    title: "ChatPDF",
    description:
      "Full Stack SaaS: AI Chatbot that allows users to ask questions about a PDF document using vector embeddings.",
    tags: ["React", "Neon", "Tailwind", "Pinecone", "Node.js", "GPT"],
    imageUrl: chatpdf,
    link: "https://gpt-chatpdf.vercel.app/",
  },
  {
    title: "SolFund",
    description:
      "Full Stack Descentralized Application (DApp) that allows users to create and fund projects using the Ethereum blockchain.",
    tags: ["Next.js", "Tailwind", "Solidity", "Ethereum", "Web3"],
    imageUrl: solfund,
    link: "https://sol-funding.vercel.app/",
  },
  {
    title: "Sol D Noche: E-Commerce",
    description:
      "Full Stack E-Commerce website that allows users to buy beaded bags and jewelry.",
    tags: ["React", "Firebase", "Tailwind", "Stripe", "Node.js"],
    imageUrl: soldnoche,
    link: "https://www.soldnoche.com/",
  },
] as const;

export const skillsData = [
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Firebase",
  "MySQL",
  "ThreeJS",
  "Express",
  "Python",
  "Solidity",
  "Matlab",
] as const;
