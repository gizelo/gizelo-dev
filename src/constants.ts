import {
  Briefcase,
  ShoppingCart,
  MonitorSmartphone,
  LayoutDashboard,
  Paintbrush,
  MessagesSquare,
} from "lucide-react";
import { ProjectDetails } from "./types";

export const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Cases", href: "#cases" },
];

export const services = [
  {
    icon: Briefcase,
    title: "Business Website",
    description:
      "Professional and scalable business websites designed to establish your online presence and attract customers.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Store",
    description:
      "Custom-built online stores with secure payment gateways, inventory management, and a seamless shopping experience.",
  },
  {
    icon: MonitorSmartphone,
    title: "Landing Page",
    description:
      "High-converting landing pages tailored to your marketing goals, optimized for engagement and lead generation.",
  },
  {
    icon: LayoutDashboard,
    title: "Web Application",
    description:
      "Advanced web applications with modern technologies, delivering interactive and dynamic user experiences.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description:
      "User-centric design solutions that enhance usability, improve engagement, and create visually stunning interfaces.",
  },
  {
    icon: MessagesSquare,
    title: "...or consult you for FREE",
    description:
      "Get expert advice and insights on your project, technology stack, or digital strategy at no cost.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, target audience, and requirements through in-depth consultation.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Based on the discovery, we create a strategic roadmap outlining the project scope, timeline, and deliverables.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our designers create wireframes and visual mockups that align with your brand identity and user experience goals.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our developers build your website using clean, efficient code and modern development practices.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Rigorous testing ensures your website works flawlessly across all devices, browsers, and user scenarios.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Once approved, we deploy your product and provide training on content management and maintenance.",
  },
];

export const projectsData: ProjectDetails[] = [
  {
    id: 1,
    title: "Chocolatin Labs",
    category: "E-commerce",
    description:
      "A website for a labrador kennel in Europe with catalogue of dogs to request through the form and connected CMS for managing all the content on the website.",
    features: [
      "Custom CMS",
      "Email notifications",
      "Translations",
      "Mobile friendly",
    ],
    images: [
      "/cases/chocolatin-labs/photo1.jpeg",
      "/cases/chocolatin-labs/photo2.jpeg",
      "/cases/chocolatin-labs/photo3.jpeg",
    ],
    technologies: [
      { name: "Next.js", icon: "/icons/nextjs.png" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Payload", icon: "/icons/payload.png" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    ],
    client: {
      name: "Chocolatin Labs",
      description: "Premium Labrador Kennel",
      country: "Germany",
    },
    link: "https://chocolatin-labs.vercel.app/",
  },
  {
    id: 2,
    title: "Gimecs",
    category: "Corporate",
    description:
      "A website for a German IT company which specializes on indastrial IoT solutions.",
    features: ["Custom CMS", "Translations", "Mobile friendly", "SEO"],
    images: [
      "/cases/gimecs/photo1.jpeg",
      "/cases/gimecs/photo2.jpeg",
      "/cases/gimecs/photo3.jpeg",
    ],
    technologies: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.png" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    ],
    client: {
      name: "Gimecs",
      description: "Industrial IoT Solutions Provider",
      country: "Germany",
    },
    link: "https://gimecs.vercel.app/",
  },
  {
    id: 3,
    title: "Web3 Invest Dashboard",
    category: "Web3",
    description:
      "A web application for investing crypto through smart contracts.",
    features: [
      "Web3 Staking",
      "Wallet Authentication",
      "Smart Contract Interaction",
    ],
    images: [
      "/cases/web3-invest/photo1.jpeg",
      "/cases/web3-invest/photo2.jpeg",
      "/cases/web3-invest/photo3.jpeg",
    ],
    technologies: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Ethers.js", icon: "/icons/ethers.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    ],
    client: {
      name: "Confidential",
      description: "Blockchain Investment Platform",
      country: "Switzerland",
    },
  },
];

export const projectCategories = [
  "All",
  ...new Set(projectsData.map((project) => project.category)),
];
