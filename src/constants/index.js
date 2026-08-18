import project0 from "../assets/projects/project-0.png";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

/** Rotating roles shown in the hero (animated) */
export const PROFILE_ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "Backend Developer",
  "Generative AI Engineer",
  "Prompt Engineer",
];

/** Supporting line (headline / intent) */
export const PROFILE_ROLE_SECONDARY =
  "MERN stack developer · Actively seeking full-time opportunities · Open to collaborations";

/** Hero intro — distilled from your LinkedIn & current role */
export const HERO_CONTENT = `Backend engineer who ships production-grade APIs and leans on AI tools like Claude and Cursor to build faster without cutting corners. NestJS · Node.js · AWS.`;
/** Longer about section */
export const ABOUT_TEXT = `I'm a backend-focused Software Engineer building scalable services with NestJS, Node.js, and Express — REST and GraphQL APIs, MySQL/Sequelize, AWS, and Docker in production. Currently at OzziTech in Chennai, and previously at Webizze, where I spent over a year deepening my skills in Node.js, Express, and MongoDB.

AI tools are part of how I build. I use Claude and Cursor daily for prototyping, debugging, and exploring architecture options, and ChatGPT for research and documentation — while owning every design decision and every line that ships. That workflow shows up directly in projects like TaskFlow AI, where I integrated the OpenAI API to power AI-generated task breakdowns.

I have a Bachelor's in Computer Application and certifications in Full Stack Development and Generative AI from Coding Ninjas. I'm actively open to new full-time opportunities — especially roles where backend engineering and AI-assisted development come together.`;

export const PROFILE_LOCATION = "Chennai, Tamil Nadu, India";

//  Uncomment when ready to start taking freelance work.
export const FREELANCE_AVAILABLE = true;

export const FREELANCE_TAGLINE = "Available for freelance / contract work";

export const SERVICES = [
  {
    title: "Backend & API Development",
    description:
      "REST and GraphQL APIs built with NestJS, Node.js, and Express — clean architecture, MySQL/MongoDB, auth, and deployment on AWS with Docker.",
  },
  {
    title: "AI-Integrated Features",
    description:
      "Adding AI capabilities to existing apps or new builds using the OpenAI API and Claude — smart summaries, task automation, chatbots, and AI-assisted workflows.",
  },
  {
    title: "MVP & Full Stack Builds",
    description:
      "End-to-end MERN/Next.js applications from idea to deployment, for startups and founders who need a working product fast.",
  },
];

export const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "OzziTech",
    companyUrl: "https://www.linkedin.com/company/ozzitech",
    period: "Dec 2025 – Present",
    location: "Chennai, Tamil Nadu, India",
    highlights: [
      "Designing and developing scalable backend services with NestJS, Node.js, and Express, with clean architecture and solid practices.",
      "Building and maintaining RESTful and GraphQL APIs for data-driven applications.",
      "MySQL with Sequelize ORM: schema design, query optimization, and data integrity.",
      "AWS for deployment and scalability; Docker for containerized workflows.",
      "Collaborating across teams, code reviews, testing, debugging, and performance tuning.",
    ],
  },
  {
    role: "Associate Software Engineer (Backend Developer)",
    company: "Webizze",
    companyUrl: "https://www.linkedin.com/company/webizze",
    period: "Nov 2024 – Dec 2025",
    location: "Chennai, Tamil Nadu, India",
    highlights: [
      "Backend architecture for reliable, scalable services.",
      "API optimization, database integration, and data security.",
      "Node.js, Express, and MongoDB in production; cross-functional delivery.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "TaskFlow AI",
    image: project0,
    description:
      "AI-powered project management tool where I designed the prompt pipeline and API integration that turns a single task title into a structured, actionable breakdown via the OpenAI API. Also includes Google/GitHub OAuth, JWT refresh token rotation, role-based workspaces (Owner/Admin/Member), and drag-and-drop Kanban boards. Built with a production-grade NestJS backend and Next.js 14 App Router frontend.",
    technologies: [
      "Next.js 14",
      "NestJS",
      "MySQL",
      "Sequelize ORM",
      "OpenAI API",
      "JWT Auth",
      "OAuth 2.0",
      "Tailwind CSS",
      "Docker",
      "REST API",
    ],
    live: "https://github.com/MdIrfan-ul/task_flow",
  },
  {
    title: "Expense Tracker",
    image: project1,
    description:
      "Helps users manage personal finances: track income and expenses, categorize transactions, set budgets, get alerts, and see graphical reports and analytics for planning.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    live: "https://github.com/MdIrfan-ul/ExpenseTracker",
  },
  {
    title: "ChatterUp",
    image: project2,
    description:
      "Real-time chat for seamless communication—interactive messaging with an emphasis on engagement and a smooth user experience (MERN stack).",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    live: "https://github.com/MdIrfan-ul/ChatsUp",
  },
  {
    title: "BuyBusy",
    image: project3,
    description:
      "E‑commerce style web app for customers: React on the frontend, Firebase for data, and Firebase Authentication for secure user access.",
    technologies: ["CSS", "React", "Redux", "Firebase"],
    live: "https://github.com/MdIrfan-ul/BuyBusy",
  },
  {
    title: "Issue Tracker",
    image: project4,
    description:
      "Create projects and track issues or bugs in one place—built with Node.js and EJS so teams can organize and prioritize work.",
    technologies: ["Bootstrap", "Node.js", "Express.js", "MongoDB"],
    live: "https://github.com/MdIrfan-ul/IssueTracker",
  },
];