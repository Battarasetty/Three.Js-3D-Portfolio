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
    etiled,
    dockerImage,
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
        icon: etiled,
        iconBg: "#fff",
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
        iconBg: "#fff",
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
            "A full-stack real estate web application that allows users to browse, search, and book houses listed by brokers. The platform includes property listings, detailed house views, user authentication, and booking management, providing a smooth experience for both users and property owners.",
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
        source_code_link: "https://github.com/Battarasetty/real-estate",
    },

    {
        name: "Docker Nginx MERN Micro Stack",
        description:
            "A Dockerized MERN microservices architecture using Nginx as a reverse proxy. The project includes multiple backend services (Auth, Profile, Todo), a React frontend, MongoDB containers, Docker Compose orchestration, and detailed documentation for request flow, network flow, and volume management.",
        tags: [
            {
                name: "docker",
                color: "blue-text-gradient",
            },
            {
                name: "nginx",
                color: "green-text-gradient",
            },
            {
                name: "mern",
                color: "pink-text-gradient",
            },
        ],
        image: dockerImage, 
        source_code_link:
            "https://github.com/Battarasetty/Docker-nginx-mern-micro-stack",
    },
];


export { services, technologies, experiences, projects };
