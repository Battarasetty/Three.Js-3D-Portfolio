import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Engineer",
    icon: web,
  },
  {
    title: "React / Next.js Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Web3 & AI Tooling",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer — Frontend & Full-Stack",
    company_name: "Entitled Arts Pvt Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2024 – Present",
    points: [
      "Architected the complete frontend for Bluebird AI (blue-bird.ai) — a live AI-powered enterprise security SaaS trusted by 1,000+ businesses across the USA, built across two separate portals: Admin Portal and User Portal.",
      "Built a real-time WebSocket alert pipeline handling 50+ simultaneous camera event streams per property, with live map badge updates under 200ms — from edge camera detection to dashboard.",
      "Engineered a 4-role multi-tenant RBAC system (Company Admin, Company Viewer, Property Admin, Property Viewer) with all routes, navigation, and API calls gated server-side with zero client-side trust.",
      "Built AI vehicle path visualization, canvas-based polygon zone editor for camera detection zones, a 4-step device pairing wizard, and a live Command Centre with virtual rendering supporting 50+ simultaneous camera streams.",
    ],
  },
  {
    title: "Frontend & Full-Stack Developer",
    company_name: "EverRise Technologies Pvt Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2022 – December 2023",
    points: [
      "Built EverSwap and NFT Staking Vault dashboards for a live multi-chain DeFi platform deployed simultaneously across 5 blockchains — Ethereum, BNB Chain, Polygon, Avalanche, and Fantom.",
      "Integrated MetaMask and WalletConnect with full wallet lifecycle management; implemented ERC-20 token approval flows, smart contract read/write via ethers.js, and complete transaction lifecycle UI (pending → confirming → confirmed → failed).",
      "Engineered optimistic UI to mask blockchain latency with instant feedback and automatic rollback on transaction revert; built parallel cross-chain state fetching using Promise.allSettled across 5 networks.",
      "Contributed backend REST API endpoints for token metadata, multi-chain stake position aggregation, and blockchain data integration using Node.js and Express — platform featured in CoinTelegraph, Yahoo Finance, and Business Insider.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Entitled Arts Pvt Ltd",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2022 – August 2022",
    points: [
      "Contributed to early-stage UI development for internal web applications using React.js and Tailwind CSS.",
      "Built reusable component libraries and implemented responsive layouts across desktop and tablet breakpoints.",
      "Collaborated directly with senior engineers and designers to ship production features on time.",
      "Converted Adobe XD designs to pixel-perfect React components, establishing frontend conventions used throughout the product.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Harish built the entire Bluebird AI frontend from scratch — real-time alert maps, RBAC, device management, command centre. His ability to own complex systems end-to-end is exceptional.",
    name: "Rohan Sanil",
    designation: "Co-Founder, Products",
    company: "Bluebird AI",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "The EverSwap and staking vault UI Harish built was fast, reliable, and handled edge cases most developers miss — especially around blockchain latency, multi-chain state, and wallet UX.",
    name: "Tech Lead",
    designation: "Engineering",
    company: "EverRise Technologies",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    testimonial:
      "Harish consistently delivered production-quality work. His understanding of both frontend architecture and backend APIs made him a true full-stack contributor on a demanding product.",
    name: "Engineering Manager",
    designation: "Product & Engineering",
    company: "Entitled Arts Pvt Ltd",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bluebird AI — Enterprise Security Platform",
    description:
      "Live AI-powered physical security SaaS trusted by 1,000+ businesses across the USA. Built the full frontend across 2 portals — real-time WebSocket alert map, 4-role multi-tenant RBAC, AI vehicle path visualization, live Command Centre with 50+ camera streams, and a 4-step canvas-based device pairing wizard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "websockets",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Battarasetty/bluebird-ai-platform",
    live_link: "https://www.blue-bird.ai",
  },
  {
    name: "EverRise — Multi-Chain DeFi Platform",
    description:
      "Live DeFi platform deployed across 5 blockchains simultaneously (Ethereum, BNB, Polygon, Avalanche, Fantom). Built EverSwap token exchange UI and NFT Staking Vault with MetaMask/WalletConnect integration, ERC-20 approval flows, optimistic UI with rollback, and cross-chain state aggregation. Featured in CoinTelegraph, Yahoo Finance, and Business Insider.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "web3/ethers.js",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Battarasetty/everrise-defi",
    live_link: "https://v3app.everrise.com/everswap",
  },
  {
    name: "3D Developer Portfolio",
    description:
      "This portfolio — built with React, Three.js, and React Three Fiber. Features a 3D interactive computer model, animated skill spheres, smooth scroll transitions with Framer Motion, and a fully working EmailJS contact form. Deployed on Netlify.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Battarasetty/Three.Js-3D-Portfolio",
    live_link: "https://harishbportfolio.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };