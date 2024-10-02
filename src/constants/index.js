import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With professional experience, I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;



export const PROJECTS = [
  {
    title: "Expense Tracker",
    image: project1,
    description:
      "Expense Tracker application is designed to help users to manage their personal finances.It allows users to track their income and expenses, categorize their transactions, set budgets, and receive alerts.",
    technologies: ["MongoDB","Express.js","React.js", "Node.js"],
    live:"https://github.com/MdIrfan-ul/ExpenseTracker",
  },
  {
    title: "ChatsUp",
    image: project2,
    description:
      "chatsUp is a real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js). It features a modern, responsive design with Tailwind CSS and DaisyUI, utilizes Context API for state management, and provides real-time notifications with React Hot Toast.",
    technologies: ["MongoDB","Express.js","React.js", "Node.js","Tailwind CSS"],
    live:"https://github.com/MdIrfan-ul/ChatsUp"
  },
  {
    title: "BuyBusy",
    image: project3,
    description:
      "buybusy is a web application for the customers of an e-commerce business.This project uses React for the frontend, Firebase for the database, and Firebase Authentication for user authentication.",
    technologies: ["CSS","React","Redux", "Firebase"],
    live:"https://github.com/MdIrfan-ul/BuyBusy"
  },
  {
    title: "Issue Tracker",
    image: project4,
    description:
      "Issue Tracker is a simple web application built with Node.js and EJS that allows users to track issues/bugs for various projects. Users can create new projects and add issues to those projects, making it easier to manage and prioritize tasks.",
    technologies: ["HTML","CSS","JavaScript","BootStrap","Node.js","Express.js","MongoDB"],
    live:"https://github.com/MdIrfan-ul/IssueTracker"
  },
];

