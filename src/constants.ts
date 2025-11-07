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
    title: "Web3 Invest Dashboard",
    category: "Web3",
    description: "A web application for investing crypto through smart contracts.",
    challenge:
      "Client needed a web application for internal usage for investing crypto through smart contracts.",
    solution:
      "We built a web application with a login by phone number and wallet authentication, dashboard for revieving and managing investments and other pages for signing new contracts and managing your profile. Also we add small admin panel for reviewing contracts of all users.",
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
    description: "A website for a German IT company which specializes on indastrial IoT solutions.",
    challenge:
      "Client needed a website to showcase present their company, their services and case studies.",
    solution:
      "We built a custom CMS with a simple interface for managing almost all the content on the website. We also added a contact form with sending emails to the client.",
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
      "We created a custom CMS-powered website with automated request handling, multilingual support, and responsive design — giving the client full control and a smooth user experience for visitors.",
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
      "We built a multi-page Wix website with a main landing page, “About Us” section, payment and delivery info pages, and a fully functional product catalogue. Customers can filter products, view product details, add items to the cart, and complete checkout. The website also includes contact forms for inquiries.",
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
