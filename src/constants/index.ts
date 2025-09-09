import Me from "@/assets/Me.png";
import Challenge from "@/assets/Tech4Good.png";
import Hackathon from "@/assets/Hackaten.png";

import ProjectRestore from "@/assets/Project-Restore.png";
import ProjectGSAPMojito from "@/assets/Project-GSAP-Mojito.png";
import ProjectDrumMachine from "@/assets/Project-DrumMachine.png";
import ProjectTheNextHokage from "@/assets/Project-TheNextHokage.png";

import { type ExperienceObj } from "@/features/Experiences";
import type { ProjectObj } from "@/features/Projects";

import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

export const portfolioLink = "/portfolio-v1/Benjy_Resume.pdf";

export const navLinks = [
  {
    id: "about",
    name: "About",
  },
  {
    id: "experiences",
    name: "Experiences",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "contactMe",
    name: "Contact Me",
  },
]

export const images = [
  { id: 2, img: Challenge },
  { id: 3, img: Hackathon },
  { id: 1, img: Me },
]

export const ExperiencesInfo: ExperienceObj[] = [
  {
    timeline: "Dec 2024 - Current",
    position: "Junior Software Engineer",
    company: "YNY Technology Sdn Bhd",
    companyCSSClassName: "text-retro-darkblue",
    experienceDescriptions: [
      "Maintained and enhanced the internal HR website, covering design, development (frontend & backend), database, and requirement discussions with the product owner.",
      "Assisted in debugging and feature implementation for an enterprise-level MES software as part of a multi-country development team.",
      "Contributed to an IoT R&D web app project, primarily focusing on screen design and frontend development, while also supporting backend tasks when needed as part of a collaborative team.",
    ],
    skillTags: [
      { text: "React", color: "blue" },
      { text: ".NET", color: "purple" },
      { text: "MSSQL", color: "green" },
      { text: "Blazor", color: "yellow" },
      { text: "MUI", color: "blue" },
      { text: "Shadcn", color: "red" },
      { text: "TailwindCSS", color: "purple" },
      { text: "Express.js", color: "green" },
    ]
  },
  {
    timeline: "Aug 2024 - Nov 2024",
    position: "K-Youth Trainee",
    company: "Umobile",
    companyCSSClassName: "text-retro-orange",
    experienceDescriptions: [
      "Developed internal apps using Power Apps, Power Automate, and SharePoint Lists to streamline workflows.",
      "Created interactive Power BI dashboards to monitor departmental performance and employee efficiency.",
    ],
    skillTags: [
      { text: "Power Apps", color: "red" },
      { text: "Power Automate", color: "blue" },
      { text: "Power BI", color: "yellow" },
      { text: "Sharepoint", color: "green" },
    ]
  },
  {
    timeline: "Oct 2022 - Dec 2022",
    position: "Intern Researcher",
    company: "Kyushu Institute of Technology",
    companyCSSClassName: "text-retro-blue",
    experienceDescriptions: [
      "Developed a voice-controlled object detection system for blind assistance, integrating AI models (YOLOv7, VOSK, OFA) with ROS and depth camera technologies.",
      "Presented research at The 4th International Symposium on Neuromorphic AI Hardware, showcasing findings in AI and machine vision.",
    ],
    skillTags: [
      { text: "Python", color: "yellow" },
      { text: "AI", color: "purple" },
      { text: "Machine Vision", color: "green" },
      { text: "ROS", color: "red" },
    ]
  },
] 



export const ProjectsInfo: ProjectObj[] = [
  {
    projectImg: ProjectRestore,
    projectTitle: "Online Ski Store",
    projectDescription: "A full-stack e-commerce web app I built to practice modern development workflows. The frontend is developed with ReactTS and Redux, styled with Material-UI. The backend uses .NET with MS SQL Server, where I integrated Stripe for payment processing and .NET Identity for secure user authentication and account management.",
    highlightWords: ["ReactTS", "Redux", "Material-UI", ".NET", "MS SQL Server", "Stripe", ".NET Identity"],
    githubLink: "https://github.com/benjy0011/Restore",
  },
  {
    projectImg: ProjectGSAPMojito,
    projectTitle: "Mojito Bar Landing Page",
    projectDescription: "A React and Tailwind CSS landing page project where I explored GSAP animations to create smooth and engaging motion effects. This project helped me strengthen my understanding of UI/UX design and front-end animation techniques.",
    highlightWords: ["React", "Tailwind CSS", "GSAP"],
    githubLink: "https://github.com/benjy0011/GSAP-Mojito",
    projectLink: "https://benjy0011.github.io/GSAP-Mojito/",
  },
  {
    projectImg: ProjectDrumMachine,
    projectTitle: "Drum Machine",
    projectDescription: "My first React project — a simple 3×3 drum pad where users can play sounds either by clicking or using keyboard keys. It includes volume control and a theme switcher, offering 18 different sound variations. Through this project, I strengthened my fundamentals in React and state management while building something interactive.",
    highlightWords: ["React"],
    githubLink: "https://github.com/benjy0011/drum-machine",
    projectLink: "https://benjy0011.github.io/drum-machine/",
  },
  {
    projectImg: ProjectTheNextHokage,
    projectTitle: "The Next Hokage (Hackathon Project – 3rd Place)",
    projectDescription: "Built with Python in a team of three, this game uses YOLOv8 to detect Naruto hand signs and match them into sequences that let players cast jutsu attacks against opponents. This project gave me hands-on experience in computer vision, model training, and designing game logic — and it won us 3rd place in a university hackathon.",
    highlightWords: ["Python", "YOLOv8", "3rd place", "hackathon"],
    githubLink: "https://github.com/yinloonkhor/Hack10-TheNextHokage",
    wonAward: true,
  },
];



export const contactMeList = [
  {
    icon: Github,
    link: "https://github.com/benjy0011",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/benjyyeoh/",
  }
]