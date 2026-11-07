import { Code, MonitorSmartphone, ScanText, Wrench } from "lucide-react";
import { CaseStudy, Product } from "@/types";
import girexNativeCardPlusUsd from "@/assets/work/girex/native/02-card-plus-usd.png";
import girexNativeHome from "@/assets/work/girex/native/01-home.png";
import girexNativeSwapQuote from "@/assets/work/girex/native/09-swap-quote.png";
import gimecsProgramExecute from "@/assets/work/gimecs/program-execute.jpg";
import contributionsPactos from "@/assets/work/contributions/pactos.webp";
import houseOfSmileHome from "@/assets/work/house-of-smile/home.webp";
import chocolatinLabsHome from "@/assets/work/chocolatin-labs/home.webp";
import contributionsSmartteach from "@/assets/work/contributions/smartteach.webp";
import contributionsZelusWallet from "@/assets/work/contributions/zelus-wallet.webp";
import web3InvestDashboard from "@/assets/work/web3-invest/dashboard.jpg";
import girexCurrentDashboard from "@/assets/work/girex/current/dashboard.webp";
import girexCurrentWalletHistory from "@/assets/work/girex/current/wallet-history.webp";
import girexCurrentCardTopUp from "@/assets/work/girex/current/card-top-up.webp";
import gimecsProgramEdit from "@/assets/work/gimecs/program-edit.jpg";
import gimecsWpsMonitoring from "@/assets/work/gimecs/wps-monitoring.jpg";
import gimecsWpsSpecification from "@/assets/work/gimecs/wps-specification.jpg";
import houseOfSmileServices from "@/assets/work/house-of-smile/services.webp";
import houseOfSmileAbout from "@/assets/work/house-of-smile/about.webp";
import chocolatinLabsDogs from "@/assets/work/chocolatin-labs/dogs.webp";
import chocolatinLabsPuppies from "@/assets/work/chocolatin-labs/puppies.webp";

export const navLinks = [
  { name: "Work", href: "/#work" },
  { name: "What I do", href: "/#what-i-do" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

const girexPhones = [
  {
    src: girexNativeCardPlusUsd,
    alt: "Girex iOS card screen with top-up and card actions",
  },
  { src: girexNativeHome, alt: "Girex iOS home with balance, cards and wallets" },
  { src: girexNativeSwapQuote, alt: "Girex iOS swap with rate and fee" },
];

export const skills = ["React", "Next.js", "TypeScript", "Node.js", "React Native"];

export const whatIDo = [
  {
    icon: Code,
    title: "Web apps and MVPs",
    body: "From the first version to release, with the backend and database behind it.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile and desktop apps",
    body: "iOS apps in React Native and Expo. Offline desktop apps in Electron that talk to real hardware.",
  },
  {
    icon: ScanText,
    title: "AI integrations",
    body: "I use an LLM to read PDFs and CVs and fill in the form, so people only check and save.",
  },
  {
    icon: Wrench,
    title: "Improving existing apps",
    body: "New features, fixes and cleanup in an existing codebase, alongside your team or as extra hands for a studio.",
  },
];

export const howIWork = [
  {
    title: "Understand the problem",
    body: "Whether it’s a ticket or an idea, I start by asking who it’s for and what has to work.",
  },
  {
    title: "Agree on a plan",
    body: "What to build first, what can wait and how long it takes. Written down, so everyone can check it.",
  },
  {
    title: "Build in small steps",
    body: "Working versions early and often, so feedback comes in while changes are still cheap.",
  },
  {
    title: "Release and hand over",
    body: "I take it to production and make sure the team or the owner can run it without me.",
  },
];

export const products: Product[] = [
  {
    id: "girex",
    name: "Girex",
    kind: "Stablecoin cards and payments",
    platforms: "Web · iOS",
    summary:
      "An everyday app for holding and spending stablecoins: cards, Apple Pay, swaps and transfers to contacts.",
    role: "lead",
    myPart:
      "Put together a team of up to five, planned the releases with the founder and was the main developer on the web app, backend and iOS app.",
    phones: girexPhones,
    caseSlug: "girex",
    website: "https://girex.io/",
  },
  {
    id: "gimecs",
    name: "Welding Program Designer & WPS",
    kind: "Software for industrial teams",
    platforms: "Desktop · Web",
    client: "for Gimecs GmbH",
    summary:
      "A desktop app and a web app for industrial teams, with real-time machine data, user roles and AI that turns PDF specs into filled forms. In use at Gimecs customers.",
    detail: "Made for welding: runs welding programs and reads live machine data over OPC UA.",
    role: "solo",
    myPart:
      "Built both alone, from scratch: from learning the domain to a working app and client demos.",
    image: {
      src: gimecsProgramExecute,
      alt: "Welding Program Designer running a program with live machine gauges and a task list",
    },
    caseSlug: "gimecs",
  },
  {
    id: "pactos",
    name: "Pactos",
    kind: "Workforce platform",
    platforms: "Web",
    client: "Contract · for an industrial client",
    summary:
      "A platform for managing contractors: timesheets, approvals, cost centres and candidate placements.",
    role: "team",
    myPart:
      "In a team of about ten, built AI autofill of candidate profiles from CVs end to end (UI, backend and prompt) and worked on timesheets and approvals.",
    image: {
      src: contributionsPactos,
      alt: "Pactos contingent workforce platform homepage",
    },
    website: "https://www.pactos.ai/en",
  },
  {
    id: "house-of-smile",
    name: "House of Smile",
    kind: "Dental clinic website",
    platforms: "Web",
    summary: "A clinic website in three languages with clear booking paths. Live since July 2026.",
    role: "solo",
    myPart: "Noticed the outdated site, offered a redesign and did all of it in a month.",
    image: {
      src: houseOfSmileHome,
      alt: "House of Smile dental clinic homepage with team portrait and booking button",
    },
    caseSlug: "house-of-smile",
    website: "https://www.houseofsmile.de/",
  },
  {
    id: "chocolatin-labs",
    name: "Chocolatin Labs",
    kind: "Breeder website with CMS",
    platforms: "Web · CMS",
    summary:
      "A multilingual catalogue of dogs and litters, run by the breeder without a developer.",
    role: "solo",
    myPart: "Built the site, the CMS and the enquiry forms, working from a designer’s layouts.",
    image: {
      src: chocolatinLabsHome,
      alt: "Chocolatin Labs homepage with the breeder and a Labrador puppy",
    },
    caseSlug: "chocolatin-labs",
    website: "https://www.chocolatinlabs.com/",
  },
  {
    id: "smartteach",
    name: "SmartTeach",
    kind: "Early-learning platform",
    platforms: "Web",
    client: "at Teaching Strategies",
    summary: "A connected platform for early-learning teachers.",
    role: "team",
    myPart:
      "Front end for the launch: teacher modules, complex forms and tables, design-system components, accessibility and translations.",
    image: {
      src: contributionsSmartteach,
      alt: "SmartTeach early-learning platform homepage",
    },
    website: "https://teachingstrategies.com/platform/",
  },
  {
    id: "zelus-wallet",
    name: "Zelus Wallet",
    kind: "Crypto wallet",
    platforms: "Web · Mobile",
    client: "at Visible Magic",
    summary: "A Web3 wallet with onboarding, a portfolio and an NFT marketplace.",
    role: "team",
    myPart:
      "Front end on the web and in React Native: onboarding, portfolio and the NFT marketplace.",
    image: {
      src: contributionsZelusWallet,
      alt: "Zelus Wallet product homepage",
    },
    website: "https://www.zelus.io/solutions/zelus-wallet",
  },
  {
    id: "web3-invest-dashboard",
    name: "Web3 Invest Dashboard",
    kind: "Investment dashboard",
    platforms: "Web",
    client: "Client under NDA · Web3",
    summary: "An investment dashboard for a Web3 product. The details stay under NDA.",
    role: "team",
    myPart:
      "Built the whole front end from scratch, paired with one backend developer, plus a designer and a project manager.",
    image: {
      src: web3InvestDashboard,
      alt: "Web3 Invest Dashboard with contracts, reports and investment cards",
    },
  },
];

export const featuredProductCount = 3;

export const caseStudies: CaseStudy[] = [
  {
    slug: "girex",
    name: "Girex",
    kind: "Stablecoin cards and payments · Web and iOS",
    role: "lead",
    roleTitle: "Lead Full-Stack & Mobile Developer (Freelance)",
    timeline: "Jun 2025–present",
    stack: "React, React Native (Expo), NestJS, PostgreSQL, Redis",
    status: "Web beta live · iOS in TestFlight",
    website: "https://girex.io/",
    summary: "An everyday app for holding and spending stablecoins, on the web and on iPhone.",
    problem:
      "The founder wanted an app that lets ordinary people keep stablecoins and spend them like money. The business idea was there; it needed a product plan, a team and a first release.",
    myPart:
      "I estimated scope and timeline, found the developers and the designer and split the work into stages. I was the main developer on the web app, backend and iOS app, and reviewed the front-end developer’s code.",
    outcome:
      "The web beta is in production: early users create accounts and cards and pay with them. The iOS app is in TestFlight.",
    phones: girexPhones,
    screens: [
      {
        src: girexCurrentDashboard,
        alt: "Girex web dashboard with wallets, card balance and frequent actions",
        caption: "Web: wallets and cards on one screen.",
      },
      {
        src: girexCurrentWalletHistory,
        alt: "Girex web wallet with deposit, withdrawal, swap and transaction history",
        caption: "Web: wallet activity.",
      },
      {
        src: girexCurrentCardTopUp,
        alt: "Girex card top-up with amount, rate and fee",
        caption: "Web: topping up a card.",
      },
    ],
    built: [
      "Card issuing and payments, swaps and transfers to other Girex users.",
      "Wallets on EVM, BSC, Solana and Bitcoin, with KYC, two-factor auth and Google and Apple sign-in.",
      "P2P trading with escrow, appeals and a live chat between both sides of a deal.",
      "The iOS app in React Native and Expo on the existing API, in TestFlight about two months after the start.",
      "An admin panel with a log of critical actions, CI deploys with migrations and error tracking.",
    ],
  },
  {
    slug: "gimecs",
    name: "Welding Program Designer & WPS",
    kind: "Desktop and web app",
    client: "Gimecs GmbH",
    role: "solo",
    roleTitle: "Full-Stack Developer (Freelance)",
    timeline: "Sep–Dec 2025",
    stack: "Electron, React, TypeScript, MUI, Node.js, Express, MongoDB, node-opcua, Anthropic API",
    status: "In use at Gimecs customers",
    summary:
      "A desktop app and a web app I built alone, from scratch, for Gimecs GmbH. Both work with live machine data and user roles, and AI turns PDF specs into filled forms.",
    detail:
      "Made for industrial welding: the desktop app works offline on shop-floor PCs and reads live machine data over OPC UA.",
    problem:
      "Gimecs makes industrial automation software. Its customers’ operators needed to prepare welding procedure specifications (WPS), run welding programs and watch the machines live, offline on shop-floor PCs.",
    myPart:
      "As the only developer, I went from learning the welding domain and what the client needed to a working app and demos: the desktop app, the web app and the machine integration.",
    outcome:
      "Gimecs sold and installed the app at a few of its customers, who now use it in their work.",
    cover: {
      src: gimecsProgramExecute,
      alt: "Welding Program Designer running a welding program with live machine gauges and the task list",
      caption: "Desktop app: running a welding program with live machine values.",
    },
    screens: [
      {
        src: gimecsProgramEdit,
        alt: "Program editor with start and finish positions for each pass",
        caption: "Desktop app: editing program positions and passes.",
      },
      {
        src: gimecsWpsMonitoring,
        alt: "Web app monitoring a welding machine with current, voltage, wire feed and travel speed gauges",
        caption: "Web app: live monitoring of a welding machine.",
      },
      {
        src: gimecsWpsSpecification,
        alt: "Web app editing a welding procedure specification",
        caption: "Web app: editing a welding procedure specification.",
      },
    ],
    built: [
      "An Electron and React desktop app that runs offline on shop-floor PCs, with a local database.",
      "Live current and voltage from the welding machines over OPC UA, plus starting, pausing and stopping programs.",
      "Welding procedure specifications created and edited through forms or a visual editor.",
      "A four-stage converter that moves legacy welding programs into JSON schemas.",
      "Feature access by user role and by operating mode, General or Embedded.",
      "A web app for specifications with live monitoring over WebSockets, and AI autofill that reads PDF specs through the Anthropic API.",
    ],
    scale: [
      { value: "120+", label: "React components" },
      { value: "50+", label: "TypeScript files in the desktop core" },
      { value: "20+", label: "custom hooks" },
      { value: "1", label: "developer, from scratch" },
    ],
  },
  {
    slug: "house-of-smile",
    name: "House of Smile",
    kind: "Dental clinic website",
    role: "solo",
    roleTitle: "Full-Stack Developer (own initiative)",
    timeline: "Built in one month · live since Jul 2026",
    stack: "Next.js, TypeScript, static hosting",
    status: "Live",
    website: "https://www.houseofsmile.de/",
    summary: "A new website in three languages for a dental clinic, with clear booking paths.",
    problem:
      "The clinic’s old website was out of date and made it hard for patients to understand the practice or book an appointment.",
    myPart:
      "I noticed it, proposed a redesign with a quick demo and, once the clinic agreed, did all of it: structure, copy in three languages, design, code, legal pages and launch.",
    outcome:
      "Live on the clinic’s own domain since July 2026, with Doctolib booking visible across the site.",
    cover: {
      src: houseOfSmileHome,
      alt: "House of Smile dental clinic homepage with team portrait and booking button",
    },
    screens: [
      {
        src: houseOfSmileServices,
        alt: "House of Smile services page presenting dental treatment categories",
        caption: "Services explained for patients.",
      },
      {
        src: houseOfSmileAbout,
        alt: "House of Smile about page presenting the clinic team and practice",
        caption: "The team and the practice.",
      },
    ],
    built: [
      "21 pages in three languages, each with its own metadata.",
      "Doctolib booking paths and contact details on every key page.",
      "Service, team, gallery, FAQ and legal pages.",
      "GDPR-aware maps and consent management.",
      "Static deployment on the clinic’s existing hosting, with redirects and security headers.",
    ],
  },
  {
    slug: "chocolatin-labs",
    name: "Chocolatin Labs",
    kind: "Breeder website with CMS",
    role: "solo",
    roleTitle: "Full-Stack Developer, with a designer",
    timeline: "Apr–May 2025",
    stack: "Next.js, Payload CMS, MongoDB",
    status: "Live",
    website: "https://www.chocolatinlabs.com/",
    summary: "A multilingual website and CMS for a Labrador breeder, run without a developer.",
    problem:
      "A Labrador breeder needed a website that could be kept up to date without a developer: dogs, litters, puppies, translations and articles.",
    myPart:
      "A designer shaped the look and the desktop layouts. I planned the build, chose the stack and architecture, made the mobile layouts and built the site, the CMS and the enquiry forms.",
    outcome:
      "Live. The breeder manages all content, the only running cost is the domain, and enquiries have already come in through the site.",
    cover: {
      src: chocolatinLabsHome,
      alt: "Chocolatin Labs homepage with the breeder and a Labrador puppy",
    },
    screens: [
      {
        src: chocolatinLabsDogs,
        alt: "Chocolatin Labs dog catalogue with filters and availability states",
        caption: "A catalogue managed in the CMS.",
      },
      {
        src: chocolatinLabsPuppies,
        alt: "Chocolatin Labs puppy and litter pages",
        caption: "Litters and puppies that stay current.",
      },
    ],
    built: [
      "A content model that links dogs, parents, litters and puppies.",
      "A Payload CMS for creating, translating, sorting and linking all content.",
      "Filters, dog and puppy pages, a blog and multilingual content.",
      "General and puppy-specific enquiry forms with email notifications.",
      "Client-owned accounts on free hosting and database tiers.",
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((project) => project.slug === slug);
