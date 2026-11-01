import { CaseStudy, Contribution } from "@/types";

export const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/#work" },
  { name: "Process", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export const contributions: Contribution[] = [
  {
    name: "Pactos",
    role: "Full-Stack Developer",
    description: "Full-stack product engineering for a German contingent workforce platform.",
    website: "https://www.pactos.ai/en",
    image: {
      src: "/work/contributions/pactos.webp",
      alt: "Pactos contingent workforce management platform homepage",
    },
  },
  {
    name: "SmartTeach",
    role: "Front-End Developer",
    description: "Accessible design-system and product UI work for an early-learning platform.",
    website: "https://teachingstrategies.com/platform/",
    image: {
      src: "/work/contributions/smartteach.webp",
      alt: "SmartTeach connected early-learning platform homepage",
    },
  },
  {
    name: "Zelus Wallet",
    role: "Front-End Developer",
    description: "Web and mobile product engineering across wallet and NFT experiences.",
    website: "https://www.zelus.io/solutions/zelus-wallet",
    image: {
      src: "/work/contributions/zelus-wallet.webp",
      alt: "Zelus Wallet product homepage",
    },
  },
  {
    name: "Web3 Invest Dashboard",
    role: "Front-End Developer",
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
    category: "Everyday stablecoin payments",
    summary:
      "A stablecoin product needed a simpler way to manage wallets and cards. I helped build the web experience and iOS app within a small team.",
    role: "Full-Stack & Mobile Developer",
    scope: "Product definition · UX · Delivery",
    stage: "Web beta · iOS TestFlight",
    timeline: "Jun 2025 - Present",
    website: "https://girex.io/",
    ownershipLabel: "Product definition, UX, prioritization and cross-functional delivery",
    context: [
      "The founder brought the business vision and crypto-market knowledge. I shaped the product definition, user journeys, business rules, requirements and phased delivery plan, working with a designer, frontend developer and backend developer.",
      "The product evolved through wallet, P2P, offline-exchange and mobile iterations. The current release focuses on a simpler everyday card journey for people who receive and use stablecoins. The founder handles business relationships and direct early-user contact; feedback informs our priorities and fixes.",
    ],
    owned: [
      "Implemented wallet and transaction workflows, API integrations, validation, permissions and operation states across the UI and backend.",
      "Built the React Native/Expo iOS app against existing backend APIs and delivered it to TestFlight.",
      "Translated the founder’s business concept into product requirements, user journeys, business rules and acceptance criteria, structuring development into manageable delivery phases.",
      "Shaped product UX, navigation and feature priorities, challenging proposals and aligning the founder, designer and engineers around a coherent user experience.",
      "Coordinated design, frontend and backend delivery through backlog prioritization, implementation reviews and regular founder demos.",
      "Recommended in-house React Native development using the existing backend and API, helping the team deliver the initial mobile version to TestFlight in two months.",
      "Led a two-week effort to focus the release on the core card journey and deliver a limited production web beta, now used by early users to create accounts and cards and make payments.",
    ],
    decisions: [
      {
        title: "Turn the concept into a delivery plan",
        body: "The founder brought the business concept and market knowledge. I translated it into user journeys, business rules, acceptance criteria and phased delivery, coordinating design and engineering and reviewing progress through regular demos.",
      },
      {
        title: "Model offline exchange around offices",
        body: "Finite-volume P2P advertisements did not fit the ongoing work of an exchange office. I proposed one persistent office profile with its address, currencies, rates and conditions, searchable by what a user wanted to buy or sell. The model was implemented, while the feature remains outside the current first-release scope.",
      },
      {
        title: "Keep mobile development in the team",
        body: "I reviewed an external Flutter option and recommended React Native with our existing backend and API. The team delivered the initial version to TestFlight in two months. Keeping development in-house also made subsequent changes easier to coordinate and maintain.",
      },
      {
        title: "Focus the release on everyday card use",
        body: "I challenged a broad launch scope and helped define the core card journey, bringing cards and frequent actions onto one main screen and deferring secondary features. A focused two-week effort aligned positioning, UX, documentation and delivery for an early production web beta.",
      },
    ],
    delivered: [
      "Product requirements, user journeys, business rules and acceptance criteria.",
      "Phased delivery plans, backlog priorities, implementation reviews and founder demos.",
      "A coherent card-first UX with wallets and frequent actions on one main screen.",
      "An initial React Native client delivered to TestFlight in two months.",
      "A limited production web beta with working account creation, cards and payments.",
    ],
    outcome:
      "The web beta is running in production with early users who have created accounts and cards and can make payments. The founder is collecting feedback and issues while we refine the experience. The updated iOS version is in TestFlight. The recent two-week release effort is one milestone in my ongoing work with the team.",
    reflection:
      "The most useful shift was moving from a broad set of capabilities to one clear user journey. The next step is to learn from early usage, establish useful product measures and expand the experience in priority order.",
    cover: {
      src: "/work/girex/native/cover.png",
      alt: "Girex iOS app with card management, home and swap screens in iPhone mockups",
    },
    media: {
      theme: "dark",
      lead: {
        src: "/work/girex/current/dashboard.webp",
        alt: "Girex web dashboard with wallets, card balance and frequent actions",
        caption: "Wallets and cards",
      },
      grid: [
        {
          src: "/work/girex/current/wallet-history.webp",
          alt: "Girex web wallet with deposit, withdrawal, swap and transaction history",
          caption: "Wallet activity",
        },
      ],
      mobile: [
        {
          src: "/work/girex/native/02-card-plus-usd.png",
          alt: "Girex iOS Plus USD card with top-up and card management",
          caption: "Card management",
          portrait: true,
        },
        {
          src: "/work/girex/native/01-home.png",
          alt: "Girex iOS home with balance, cards and wallets",
          caption: "Home",
          portrait: true,
        },
        {
          src: "/work/girex/native/09-swap-quote.png",
          alt: "Girex iOS swap with source and destination amounts, rate and fee",
          caption: "Swap",
          portrait: true,
        },
        {
          src: "/work/girex/native/08-usdt-wallet.png",
          alt: "Girex iOS USDT wallet with balance and transaction history",
          caption: "Wallet overview",
          portrait: true,
        },
        {
          src: "/work/girex/native/06-card-topup-review.png",
          alt: "Girex iOS card top-up review with amount, rate and fees",
          caption: "Top-up review",
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
      "An outdated clinic website made it hard for patients to find information and book. I proposed and built a multilingual replacement, now live on the practice’s domain.",
    role: "Full-Stack Developer",
    scope: "Strategy · UX · Design · Copy · Engineering",
    stage: "Live",
    timeline: "Built in one month · Launched Jul 2026",
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
      "Localized content and metadata across three languages.",
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
      "A Labrador breeder needed a website they could manage independently. Working with a designer, I built a multilingual catalogue, content tools and enquiry forms.",
    role: "Full-Stack Developer",
    scope: "Architecture · CMS · Frontend · Mobile UX",
    stage: "Live",
    timeline: "Apr — May 2025",
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
