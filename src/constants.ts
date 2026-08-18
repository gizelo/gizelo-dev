import { CaseStudy, Contribution } from "@/types";

export const navLinks = [
  { name: "Work", href: "/#work" },
  { name: "Experience", href: "/#experience" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export const contributions: Contribution[] = [
  {
    name: "Pactos",
    description: "Full-stack product engineering for a German contingent workforce platform.",
    website: "https://www.pactos.ai/en",
    image: {
      src: "/work/contributions/pactos.webp",
      alt: "Pactos contingent workforce management platform homepage",
    },
  },
  {
    name: "SmartTeach",
    description: "Accessible design-system and product UI work for an early-learning platform.",
    website: "https://teachingstrategies.com/platform/",
    image: {
      src: "/work/contributions/smartteach.webp",
      alt: "SmartTeach connected early-learning platform homepage",
    },
  },
  {
    name: "Zelus Wallet",
    description: "Web and mobile product engineering across wallet and NFT experiences.",
    website: "https://www.zelus.io/solutions/zelus-wallet",
    image: {
      src: "/work/contributions/zelus-wallet.webp",
      alt: "Zelus Wallet product homepage",
    },
  },
  {
    name: "Web3 Invest Dashboard",
    description: "Frontend delivery for an investment product under NDA.",
    nda: true,
    image: {
      src: "/work/contributions/web3-invest.webp",
      alt: "Web3 investment dashboard interface",
    },
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "girex",
    name: "Girex",
    category: "Crypto exchange platform",
    summary:
      "Turning a founder's high-level exchange concept into a coherent web and mobile product for people who need a simpler way to move between crypto and fiat.",
    role: "Technical Product Manager & Product Engineer",
    scope: "Product definition · Web · Mobile",
    stage: "Final internal testing",
    timeline: "Jun 2025 — Present",
    website: "https://girex.io/",
    ownershipLabel: "Led product definition and delivery · Built the web frontend and mobile app",
    context: [
      "The founder brought the original idea, market knowledge and major capabilities. I turned that direction into product flows, requirements, delivery stages and a working product the team could build and prepare for release.",
      "The first goal was deliberately narrow: prove that a user could register, find an offer and complete a basic P2P exchange flow on test networks. After the alpha and a pause, development continued with the backend/DevOps engineer and me working part-time toward a production-oriented beta.",
    ],
    owned: [
      "Translated business requests into user flows, requirements, stages and delivery scope.",
      "Assembled and coordinated the initial backend, frontend and design team.",
      "Ran planning calls and maintained working documentation and the delivery backlog.",
      "Challenged requirements through user scenarios, edge cases, business logic and UX reasoning.",
      "Rebuilt and owned the production-oriented frontend architecture and design system.",
      "Defined, designed and built the React Native application.",
    ],
    decisions: [
      {
        title: "Protect the P2P core",
        body: "I recommended postponing merchant and offline functionality in the first phase and defining the alpha around one complete P2P journey. That gave the part-time team a concrete proof-of-concept target delivered in roughly three months.",
      },
      {
        title: "Model offline exchange around locations",
        body: "I identified that a physical exchange point was not another advert and reframed the location as the primary entity, with rates, liquidity, opening hours and supported assets attached to it—creating a clearer foundation for discovery and merchant operations.",
      },
      {
        title: "Build mobile capability in-house",
        body: "After reviewing an external Flutter proposal, the existing React product and long-term maintenance, I recommended React Native and internal delivery. I defined the mobile scope, navigation and interaction patterns, then built the application myself.",
      },
    ],
    delivered: [
      "Customer web and React Native applications.",
      "Online P2P offers, deals, chat, appeals and support flows.",
      "Wallets, transaction history, profiles, verification and reputation.",
      "Offline exchange-point discovery, rates, liquidity and orders.",
      "Merchant tools for exchange points, orders, wallets and analytics.",
      "Admin tools for users, offers, appeals, KYC and platform operations.",
    ],
    outcome:
      "Girex moved from a name, brand color and broad concept to a working product spanning customer, merchant, admin, web and mobile experiences. The platform is now undergoing final internal testing, security hardening and release preparation before its public launch.",
    reflection:
      "The biggest lesson was to protect shorter release-and-feedback cycles more firmly. I would now define success criteria and event tracking earlier, test the smallest reliable version with external users sooner, and hold the agreed scope more tightly.",
    cover: {
      src: "/work/girex/p2p-market.webp",
      srcSmall: "/work/girex/p2p-market-960.webp",
      alt: "Girex P2P marketplace showing exchange offers and payment methods",
    },
    media: {
      theme: "dark",
      lead: {
        src: "/work/girex/deal-chat.webp",
        srcSmall: "/work/girex/deal-chat-960.webp",
        alt: "Girex P2P deal flow with payment details and real-time chat",
        caption: "A complete P2P deal flow with clear states and counterparty communication.",
      },
      grid: [
        {
          src: "/work/girex/offline-map.webp",
          srcSmall: "/work/girex/offline-map-960.webp",
          alt: "Girex offline exchange discovery map with exchange-point rates",
          caption: "Exchange points became the core entity for offline discovery and operations.",
        },
        {
          src: "/work/girex/profile.webp",
          srcSmall: "/work/girex/profile-960.webp",
          alt: "Girex customer profile with balances, wallets and verification status",
          caption: "Balances, wallets, verification and reputation meet in one customer view.",
        },
        {
          src: "/work/girex/merchant-dashboard.webp",
          srcSmall: "/work/girex/merchant-dashboard-960.webp",
          alt: "Girex merchant operations dashboard",
          caption: "Merchant tools support exchange points, orders, wallets and operating data.",
        },
        {
          src: "/work/girex/admin-overview.webp",
          srcSmall: "/work/girex/admin-overview-960.webp",
          alt: "Girex administration overview for platform operations",
          caption:
            "Operational tooling covers users, merchants, KYC, appeals and platform activity.",
        },
      ],
      mobile: [
        {
          src: "/work/girex/native-dashboard.webp",
          alt: "Girex native mobile dashboard with wallets and bottom navigation",
          portrait: true,
        },
        {
          src: "/work/girex/native-market.webp",
          alt: "Girex native mobile P2P marketplace with bottom navigation",
          portrait: true,
        },
        {
          src: "/work/girex/native-offline.webp",
          alt: "Girex native mobile exchange-point map with bottom navigation",
          portrait: true,
        },
      ],
    },
  },
  {
    slug: "house-of-smile",
    name: "House of Smile",
    category: "Dental clinic website",
    summary:
      "A self-initiated redesign that turned an outdated clinic website into a clear, credible and booking-focused digital presence for a German dental practice.",
    role: "Independent Product Builder",
    scope: "Strategy · UX · Design · Copy · Engineering",
    stage: "Live",
    timeline: "Launched Jul 2026",
    website: "https://www.houseofsmile.de/",
    ownershipLabel: "Self-initiated and delivered end-to-end",
    context: [
      "I approached the clinic after noticing that its old website made it unnecessarily difficult for prospective patients to understand the practice or book an appointment. The information was outdated, the clinic was presented weakly and the site did not meet modern technical, SEO or usability expectations.",
      "I proposed a concrete redesign plan and built a quick visual demo. Once the client approved the direction, I shaped the complete product: information architecture, pages, positioning, copy, imagery, calls to action, responsive behavior, accessibility, legal content, engineering and launch.",
    ],
    owned: [
      "Identified the opportunity and sold the redesign through a concrete product argument.",
      "Defined the site structure, user journeys and booking-focused information hierarchy.",
      "Researched and wrote the service presentation and supporting copy in three languages.",
      "Designed every screen and created or sourced the visual material.",
      "Implemented responsive, accessible and SEO-ready pages.",
      "Handled German legal requirements, GDPR consent behavior and production launch.",
    ],
    decisions: [
      {
        title: "Make booking the primary path",
        body: "The old site did not give prospective patients an obvious next step. The new experience keeps appointment booking visible across the core journey while preserving direct access to services, the team and practical information.",
      },
      {
        title: "Build trust through specific information",
        body: "Instead of generic marketing language, the site explains the clinic's actual services, qualifications, team, languages and patient process. That makes the practice easier to evaluate before a first visit.",
      },
      {
        title: "Treat compliance as product quality",
        body: "The launch included multilingual legal pages, consent-gated third-party content, accessible interaction states, security headers and a static deployment compatible with the client's existing IONOS hosting.",
      },
    ],
    delivered: [
      "A complete responsive website across 21 production routes.",
      "German, English and Russian content with localized metadata.",
      "Clear Doctolib booking paths and clinic contact information.",
      "Service, team, gallery, contact, FAQ and legal experiences.",
      "GDPR-aware maps and consent management.",
      "Static deployment, redirects, security headers and launch verification.",
    ],
    outcome:
      "The new website launched on the clinic's existing domain in July 2026. It now gives prospective patients a current, credible view of the practice and a clear path to booking, while the clinic retains a straightforward rollback path to the previous site.",
    cover: {
      src: "/work/house-of-smile/home.webp",
      srcSmall: "/work/house-of-smile/home-960.webp",
      alt: "House of Smile dental clinic homepage with team portrait and booking call to action",
    },
    gallery: [
      {
        src: "/work/house-of-smile/services.webp",
        srcSmall: "/work/house-of-smile/services-960.webp",
        alt: "House of Smile services page presenting dental treatment categories",
        caption: "Detailed service information replaces the outdated and incomplete presentation.",
      },
      {
        src: "/work/house-of-smile/about.webp",
        srcSmall: "/work/house-of-smile/about-960.webp",
        alt: "House of Smile about page presenting the clinic team and practice",
        caption: "The team and practice are presented as concrete trust signals.",
      },
    ],
  },
  {
    slug: "chocolatin-labs",
    name: "Chocolatin Labs",
    category: "Breeder website & CMS",
    summary:
      "A multilingual product website and content system that gives a Labrador breeder full control over dogs, litters, puppies, articles and incoming enquiries.",
    role: "Product Engineer",
    scope: "Architecture · CMS · Frontend · Mobile UX",
    stage: "Live",
    timeline: "Client project",
    website: "https://www.chocolatinlabs.com/",
    ownershipLabel: "Built collaboratively with a designer",
    context: [
      "The client arrived with a clear need for a website centered on a dog catalogue and an initial idea of the structure. A designer shaped the overall visual direction and desktop layouts; I took ownership of the technical product architecture and delivery.",
      "The goal was not just to publish a polished website. It was to give the client a maintainable system that could run independently, without returning to a development team whenever a dog, litter, translation, article or image changed.",
    ],
    owned: [
      "Designed the content model and relationships between dogs, parents, litters and puppies.",
      "Built a Payload CMS where the client can create, edit, translate, sort and link content.",
      "Translated the desktop design into responsive behavior and created the mobile layouts.",
      "Implemented filters, dog and puppy detail journeys, multilingual content and the blog.",
      "Added general and puppy-specific enquiry flows with email notifications.",
      "Created client-owned infrastructure and deployed the system on sustainable free tiers.",
    ],
    decisions: [
      {
        title: "Model relationships, not flat pages",
        body: "Dogs, parents, litters and puppies are connected entities. I designed the underlying content structure so those relationships can be managed once and reused consistently across the public website.",
      },
      {
        title: "Put ongoing control with the client",
        body: "All core text, images, translations, dogs, puppies and articles can be managed inside one approachable CMS. This reduced future maintenance dependency and made the website practical as a long-lived business tool.",
      },
      {
        title: "Keep operations simple and sustainable",
        body: "I chose infrastructure that fits the actual traffic and workflow: client-owned accounts, free hosting and database tiers, and a free email-notification service. The only recurring cost is the domain.",
      },
    ],
    delivered: [
      "Responsive multilingual marketing and catalogue website.",
      "Editable dogs, pedigrees, litters, puppies and availability states.",
      "Blog and fully managed translated content.",
      "Filtering and content relationships across the catalogue.",
      "General and puppy-specific enquiry forms with email notifications.",
      "Client-owned deployment and content infrastructure.",
    ],
    outcome:
      "The site is live and operates without ongoing development work or monthly infrastructure fees beyond the domain. The client manages content independently, is happy with the result and has already received enquiries through the website.",
    cover: {
      src: "/work/chocolatin-labs/home.webp",
      srcSmall: "/work/chocolatin-labs/home-960.webp",
      alt: "Chocolatin Labs homepage featuring the breeder and a Labrador puppy",
    },
    gallery: [
      {
        src: "/work/chocolatin-labs/dogs.webp",
        srcSmall: "/work/chocolatin-labs/dogs-960.webp",
        alt: "Chocolatin Labs dog catalogue with filters and availability states",
        caption: "Structured catalogue content is managed through the connected CMS.",
      },
      {
        src: "/work/chocolatin-labs/puppies.webp",
        srcSmall: "/work/chocolatin-labs/puppies-960.webp",
        alt: "Chocolatin Labs puppy and litter content",
      },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((project) => project.slug === slug);
