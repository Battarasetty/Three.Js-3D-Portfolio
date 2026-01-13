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
    Delcom1,
    Everrise,
    HousingEstate,
    Youtubeclone,
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
    title: "Full-Stack Engineer (React + Node)",
    icon: backend,
  },
  {
    title: "Frontend System Designer",
    icon: creator,
  },
];


const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript (ES6+)", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Next.js", icon: reactjs }, // reuse icon if Next icon not available
  { name: "Redux / Context API", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "Figma", icon: figma },
];


const experiences = [
   {
    title: "Software Engineer – Frontend",
    company_name: "Entitled Arts Pvt Ltd",
    icon: ETiled,
    iconBg: "#1E293B",
    date: "Jan 2024 – Present",
    points: [
      "Built enterprise-grade AI surveillance dashboards used across 50+ residential and commercial properties.",
      "Designed and implemented multi-tenant RBAC and permission-driven UI architecture, reducing authorization issues by 40%.",
      "Developed real-time dashboards handling 1,000+ daily events with robust async state management.",
      "Improved UI performance using debouncing, request cancellation, caching, memoization, and virtualization.",
      "Collaborated closely with backend, AI, and product teams to deliver scalable, secure frontend systems.",
    ],
  },
     {
    title: "Frontend Developer",
    company_name: "EverRise Technologies Pvt Ltd",
    icon: Everrise,
    iconBg: "#383E56",
    date: "Aug 2022 – Dec 2023",
    points: [
      "Developed decentralized Web3 applications with direct smart contract interactions.",
      "Built staking, vault, and token-locking dashboards used by 10,000+ users.",
      "Implemented optimistic UI updates with retries and rollback handling.",
      "Handled complex async flows including wallet connections, transaction states, and error recovery.",
    ],
  },
];

const projects = [
    {
        name: "Housing Estate",
        description:
            "Web-based platform that allows users to search, book, and manage Houses from various providers (Brokers), providing a convenient and efficient solution for Household needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: HousingEstate,
        source_code_link: "https://github.com/",
    },
    {
        name: "Youtube Application",
        description:
            "A personal project which resumbles as same as Youtube Application, in overall Funcationality like Searching, Filtering, Pagination, Navbar, Sidebar, CommentsSection,Authentication, etc.. ",
        tags: [
            {
                name: "React.JS",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "Scss",
                color: "pink-text-gradient",
            },
        ],
        image: Youtubeclone,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
