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
    icon: meta, // replace with actual logo if available
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

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
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
    // {
    //     name: "Job IT",
    //     description:
    //         "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //     tags: [
    //         {
    //             name: "react",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "restapi",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "scss",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: jobit,
    //     source_code_link: "https://github.com/",
    // },
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
