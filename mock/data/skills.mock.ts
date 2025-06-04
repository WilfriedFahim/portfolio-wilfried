// mock/skillsMock.ts

import {
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiJavascript,
	SiTailwindcss,
	SiHtml5,
	SiCss3,
	SiRedux,
	SiFramer,
	SiPython,
	SiNodedotjs,
	SiExpress,
	SiFirebase,
	SiMongodb,
	SiMysql,
	SiPostgresql,
	SiFastapi,
	SiGit,
	SiFigma,
	SiDocker,
	SiLinux,
	SiPostman,
	SiJirasoftware,
	SiTrello,
	SiNotion,
	SiApple,
	SiIos,
	SiAndroid,
} from "react-icons/si";
import {
	FaUserCheck,
	FaHandsHelping,
	FaComments,
	FaTasks,
	FaBrain,
	FaBolt,
	FaClock,
	FaBook,
	FaCode,
} from "react-icons/fa";

import { SkillType } from "../types/skill.types";

// Mock centralisé complet
export const skillsMock: SkillType[] = [
	// FRONTEND
	{
		label: "React",
		group: "Frontend",
		icon: SiReact,
		color: "bg-[#61DAFB]/10 text-[#61DAFB]",
	},
	{
		label: "Next.js",
		group: "Frontend",
		icon: SiNextdotjs,
		color: "bg-black/10 text-black",
	},
	{
		label: "TypeScript",
		group: "Frontend",
		icon: SiTypescript,
		color: "bg-[#3178C6]/10 text-[#3178C6]",
	},
	{
		label: "JavaScript (ES6+)",
		group: "Frontend",
		icon: SiJavascript,
		color: "bg-[#F7DF1E]/10 text-[#f3d909]",
	},
	{
		label: "Tailwind CSS",
		group: "Frontend",
		icon: SiTailwindcss,
		color: "bg-[#06B6D4]/10 text-[#06B6D4]",
	},
	{
		label: "HTML5",
		group: "Frontend",
		icon: SiHtml5,
		color: "bg-[#E34F26]/10 text-[#E34F26]",
	},
	{
		label: "CSS3",
		group: "Frontend",
		icon: SiCss3,
		color: "bg-[#1572B6]/10 text-[#1572B6]",
	},
	{
		label: "Redux",
		group: "Frontend",
		icon: SiRedux,
		color: "bg-[#764ABC]/10 text-[#764ABC]",
	},
	{
		label: "Framer Motion",
		group: "Frontend",
		icon: SiFramer,
		color: "bg-[#0055FF]/10 text-[#0055FF]",
	},

	// BACKEND
	{
		label: "Python",
		group: "Backend",
		icon: SiPython,
		color: "bg-[#3776AB]/10 text-[#3776AB]",
	},
	{
		label: "Node.js",
		group: "Backend",
		icon: SiNodedotjs,
		color: "bg-[#339933]/10 text-[#339933]",
	},
	{
		label: "Express.js",
		group: "Backend",
		icon: SiExpress,
		color: "bg-black/10 text-black",
	},
	{
		label: "Firebase",
		group: "Backend",
		icon: SiFirebase,
		color: "bg-[#FFCA28]/10 text-[#FFCA28]",
	},
	{
		label: "MongoDB (NoSQL)",
		group: "Backend",
		icon: SiMongodb,
		color: "bg-[#47A248]/10 text-[#47A248]",
	},
	{
		label: "SQL (MySQL)",
		group: "Backend",
		icon: SiMysql,
		color: "bg-[#4479A1]/10 text-[#4479A1]",
	},
	{
		label: "SQL (PostgreSQL)",
		group: "Backend",
		icon: SiPostgresql,
		color: "bg-[#336791]/10 text-[#336791]",
	},
	{
		label: "REST API",
		group: "Backend",
		icon: FaBolt,
		color: "bg-yellow-100 text-yellow-600",
	},
	{
		label: "FAST API",
		group: "Backend",
		icon: SiFastapi,
		color: "bg-[#009688]/10 text-[#009688]",
	},
	{
		label: "Authentification (JWT/OAuth)",
		group: "Backend",
		icon: FaUserCheck,
		color: "bg-green-100 text-green-600",
	},

	// DESIGN & OUTILS
	{
		label: "Git & GitHub",
		group: "Outils",
		icon: SiGit,
		color: "bg-[#F05032]/10 text-[#F05032]",
	},
	{
		label: "Excel (Dashboard VBA)",
		group: "Outils",
		icon: FaTasks,
		color: "bg-green-50 text-green-700",
	},
	{
		label: "Figma",
		group: "Outils",
		icon: SiFigma,
		color: "bg-[#F24E1E]/10 text-[#F24E1E]",
	},
	{
		label: "Docker (bases)",
		group: "Outils",
		icon: SiDocker,
		color: "bg-[#2496ED]/10 text-[#2496ED]",
	},
	{
		label: "Visual Studio Code",
		group: "Outils",
		icon: FaCode,
		color: "bg-[#007ACC]/10 text-[#007ACC]",
	},
	{
		label: "Linux (bases)",
		group: "Outils",
		icon: SiLinux,
		color: "bg-black/10 text-black",
	},
	{
		label: "Postman (API)",
		group: "Outils",
		icon: SiPostman,
		color: "bg-[#FF6C37]/10 text-[#FF6C37]",
	},
	{
		label: "Jira (gestion projet)",
		group: "Outils",
		icon: SiJirasoftware,
		color: "bg-[#0052CC]/10 text-[#0052CC]",
	},
	{
		label: "Trello (gestion projet)",
		group: "Outils",
		icon: SiTrello,
		color: "bg-[#0079BF]/10 text-[#0079BF]",
	},
	{
		label: "Notion",
		group: "Outils",
		icon: SiNotion,
		color: "bg-black/10 text-black",
	},

	// MOBILE
	{
		label: "MacOS",
		group: "Mobile",
		icon: SiApple,
		color: "bg-black/10 text-black dark:bg-white/10 dark:text-white",
	},
	{
		label: "iOS",
		group: "Mobile",
		icon: SiIos,
		color: "bg-black/10 text-black dark:bg-white/10 dark:text-white",
	},
	{
		label: "Android",
		group: "Mobile",
		icon: SiAndroid,
		color: "bg-[#3DDC84]/10 text-[#3DDC84]",
	},

	// SOFT SKILLS
	{
		label: "Autonomie",
		group: "Soft Skills",
		icon: FaUserCheck,
		color: "bg-green-50 text-green-700",
	},
	{
		label: "Esprit d'équipe",
		group: "Soft Skills",
		icon: FaHandsHelping,
		color: "bg-purple-50 text-purple-700",
	},
	{
		label: "Communication claire",
		group: "Soft Skills",
		icon: FaComments,
		color: "bg-blue-50 text-blue-700",
	},
	{
		label: "Rigueur",
		group: "Soft Skills",
		icon: FaTasks,
		color: "bg-yellow-50 text-yellow-700",
	},
	{
		label: "Curiosité",
		group: "Soft Skills",
		icon: FaBrain,
		color: "bg-indigo-50 text-indigo-700",
	},
	{
		label: "Capacité d'apprentissage rapide",
		group: "Soft Skills",
		icon: FaBook,
		color: "bg-orange-50 text-orange-700",
	},
	{
		label: "Organisation",
		group: "Soft Skills",
		icon: FaTasks,
		color: "bg-yellow-50 text-yellow-700",
	},
	{
		label: "Gestion du temps",
		group: "Soft Skills",
		icon: FaClock,
		color: "bg-gray-50 text-gray-700",
	},
];
