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
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#cases" },
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
    title: "Free Consultation",
    description:
      "Get expert advice and insights on your project, technology stack, or digital strategy at no cost.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "I start by understanding your business, goals, target audience, and requirements through in-depth consultation.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Based on the discovery, I create a strategic roadmap outlining the project scope, timeline, and deliverables.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "I create wireframes and visual mockups that align with your brand identity and user experience goals.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "I build your product using clean, efficient code and modern development practices.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Rigorous testing ensures your product works flawlessly across all devices, browsers, and user scenarios.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Once approved, I deploy your product and provide guidance on content management and maintenance.",
  },
];

export const projectsData: ProjectDetails[] = [
  {
    id: 5,
    title: "Girex — P2P Crypto Exchange",
    category: "Fintech",
    link: "https://girex.io/",
    description:
      "A full-featured P2P cryptocurrency exchange platform — trade crypto and cash peer-to-peer, manage multi-chain wallets, and communicate with counterparties in real time.",
    challenge:
      "Build a secure, scalable P2P exchange from scratch: user auth with 2FA, multi-blockchain wallets (ETH, BSC, Solana, BTC), order matching, real-time trading chat, an admin analytics dashboard, and a companion React Native mobile app.",
    solution:
      "I led full product delivery as project lead and frontend architect. Architected the React/TypeScript frontend using FSD, implemented real-time order chat via WebSockets (Socket.io), built multi-chain wallet flows, and shipped a React Native mobile client in parallel. Managed the backend developer and designer throughout.",
    features: [
      "P2P order book & matching",
      "Real-time chat via WebSockets",
      "Multi-chain wallets (ETH, BSC, Solana, BTC)",
      "Cash & crypto trading flows",
      "Admin dashboard with analytics",
      "React Native mobile app (in progress)",
      "Two-factor authentication & Google OAuth",
    ],
    images: [
      "/cases/girex/girex.webp",
      "/cases/girex/girex1.webp",
      "/cases/girex/girex3.webp",
      "/cases/girex/girex2.webp",
      "/cases/girex/girex8.webp",
      "/cases/girex/girex4.webp",
      "/cases/girex/girex5.webp",
      "/cases/girex/girex7.webp",
      "/cases/girex/girex6.webp",
    ],
    technologies: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Redux Toolkit", icon: "/icons/redux.svg" },
      { name: "NestJS", icon: "/icons/nestjs.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    ],
  },
  {
    id: 1,
    title: "Web3 Invest Dashboard",
    category: "Web3",
    description: "A web application for investing crypto through smart contracts.",
    challenge:
      "Client needed a web application for internal usage for investing crypto through smart contracts.",
    solution:
      "I built a web application with a login by phone number and wallet authentication, dashboard for reviewing and managing investments and other pages for signing new contracts and managing your profile. I also added a small admin panel for reviewing contracts of all users.",
    features: [
      "Web3 Staking",
      "Wallet Authentication",
      "Smart Contract Interaction",
      "Admin Panel",
      "Translations",
    ],
    images: [
      "/cases/web3-invest/photo1.jpeg",
      "/cases/web3-invest/photo2.jpeg",
      "/cases/web3-invest/photo3.jpg",
    ],
    technologies: [
      { name: "Next.js", icon: "/icons/next-js.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Wagmi", icon: "/icons/wagmi.svg" },
      { name: "WalletConnect", icon: "/icons/wallet-connect.svg" },
      { name: "Material UI", icon: "/icons/mui.svg" },
    ],
    client: {
      name: "NDA",
      description: "International FinTech company",
      country: "Ukraine",
    },
  },
  {
    id: 2,
    title: "Gimecs",
    category: "Corporate",
    link: "https://gimecs.com/",
    description: "A website for a German IT company which specializes on industrial IoT solutions.",
    challenge:
      "Client needed a website to showcase and present their company, their services and case studies.",
    solution:
      "I built a custom CMS with a simple interface for managing almost all the content on the website. I also added a contact form with email notifications to the client.",
    features: ["Custom CMS", "Translations", "Contact form", "Mobile friendly", "SEO"],
    images: ["/cases/gimecs/photo1.webp", "/cases/gimecs/photo2.webp", "/cases/gimecs/photo3.webp"],
    technologies: [
      { name: "Next.js", icon: "/icons/next-js.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Payload CMS", icon: "/icons/payload.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    ],
    client: {
      name: "Gimecs",
      description: "Industrial IoT Solutions",
      country: "Germany",
    },
  },
  {
    id: 3,
    title: "Chocolatin Labs",
    category: "E-commerce",
    link: "https://www.chocolatinlabs.com/",
    description:
      "A modern website for a Labrador kennel — built to showcase dogs, receive requests, and manage all content easily through a simple, custom CMS.",
    challenge:
      "The client needed a professional website to present their dogs, handle adoption requests, and share updates — all without relying on developers for every edit.",
    solution:
      "I created a custom CMS-powered website with automated request handling, multilingual support, and responsive design — giving the client full control and a smooth user experience for visitors.",
    features: ["Custom CMS", "Email notifications", "Translations", "Mobile friendly", "SEO"],
    images: [
      "/cases/chocolatin-labs/photo1.webp",
      "/cases/chocolatin-labs/photo2.webp",
      "/cases/chocolatin-labs/photo3.webp",
      "/cases/chocolatin-labs/photo4.webp",
      "/cases/chocolatin-labs/photo5.webp",
    ],
    technologies: [
      { name: "Next.js", icon: "/icons/next-js.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Payload CMS", icon: "/icons/payload.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    ],
    client: {
      name: "Chocolatin Labs",
      description: "Premium Labrador Kennel",
      country: "Italy",
    },
  },
  {
    id: 4,
    title: "Thermalink",
    category: "E-commerce",
    link: "https://www.thermalink.pl/",
    description:
      "A website for a Warsaw-based client selling stylish home radiators and towel warmers, featuring a multi-page layout with catalogue, product pages, and online checkout.",
    challenge:
      "Client needed a website to sell premium home heating products online, showcase the catalogue with filtering options, and allow customers to place orders and pay directly on the site, all with a clean, minimalistic premium design.",
    solution:
      "I built a multi-page Wix website with a main landing page, 'About Us' section, payment and delivery info pages, and a fully functional product catalogue. Customers can filter products, view product details, add items to the cart, and complete checkout. The website also includes contact forms for inquiries.",
    features: [
      "Product catalogue with filters",
      "Online cart and checkout",
      "Contact forms",
      "Mobile friendly",
      "SEO",
    ],
    images: [
      "/cases/thermalink/photo1.webp",
      "/cases/thermalink/photo2.webp",
      "/cases/thermalink/photo3.webp",
    ],
    technologies: [{ name: "Wix", icon: "/icons/wix.svg" }],
    client: {
      name: "Thermalink",
      description: "Stylish Home Heating Products",
      country: "Poland",
    },
  },
];

const projectCategoriesOrdered = [...projectsData]
  .sort((a, b) => b.id - a.id)
  .reduce<string[]>((categories, project) => {
    if (!categories.includes(project.category)) {
      categories.push(project.category);
    }
    return categories;
  }, []);

export const projectCategories = ["All", ...projectCategoriesOrdered];
