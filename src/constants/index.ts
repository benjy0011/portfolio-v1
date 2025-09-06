import Me from "@/assets/Me.png";
import Challenge from "@/assets/Tech4Good.png";
import Hackathon from "@/assets/Hackaten.png";
import { type ExperienceObj } from "@/features/Experiences";

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
    id: "portfolio",
    name: "Portfolio",
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
      "Contributed to an IoT R&D web app project, focusing on screen design and frontend development within a team.",
    ],
    skillTags: [
      { text: "React", color: "blue" },
      { text: ".NET", color: "purple" },
      { text: "MSSQL", color: "green" },
      { text: "Blazor", color: "yellow" },
      { text: "MUI", color: "blue" },
      { text: "Shadcn", color: "red" },
      { text: "TailwindCSS", color: "purple" },
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