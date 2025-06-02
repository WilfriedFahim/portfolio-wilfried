import {
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiFirebase,
	SiTailwindcss,
	SiTypescript,
	SiJavascript,
	SiPython,
	SiCss3,
	SiHtml5,
	SiMysql,
	SiGit,
	SiDocker,
	SiKubernetes,
	SiApple,
	SiIos,
	SiAndroid,
} from "react-icons/si";

interface TechInfo {
	color: string;
	icon: React.ComponentType;
}

const techInfo: Record<string, TechInfo> = {
	React: {
		color: "bg-[#61DAFB]/10 text-[#61DAFB]",
		icon: SiReact,
	},
	"Next.js": {
		color: "bg-black/10 text-black",
		icon: SiNextdotjs,
	},
	"Node.js": {
		color: "bg-[#339933]/10 text-[#339933]",
		icon: SiNodedotjs,
	},
	Firebase: {
		color: "bg-[#FFCA28]/10 text-[#FFCA28]",
		icon: SiFirebase,
	},
	Tailwind: {
		color: "bg-[#06B6D4]/10 text-[#06B6D4]",
		icon: SiTailwindcss,
	},
	Typescript: {
		color: "bg-[#3178C6]/10 text-[#3178C6]",
		icon: SiTypescript,
	},
	Javascript: {
		color: "bg-[#F7DF1E]/10 text-[#F7DF1E]",
		icon: SiJavascript,
	},
	Python: {
		color: "bg-[#3776AB]/10 text-[#3776AB]",
		icon: SiPython,
	},
	Css: {
		color: "bg-[#1572B6]/10 text-[#1572B6]",
		icon: SiCss3,
	},
	Html: {
		color: "bg-[#E34F26]/10 text-[#E34F26]",
		icon: SiHtml5,
	},
	Sql: {
		color: "bg-[#4479A1]/10 text-[#4479A1]",
		icon: SiMysql,
	},
	Git: {
		color: "bg-[#F05032]/10 text-[#F05032]",
		icon: SiGit,
	},
	Docker: {
		color: "bg-[#2496ED]/10 text-[#2496ED]",
		icon: SiDocker,
	},
	Kubernetes: {
		color: "bg-[#326CE5]/10 text-[#326CE5]",
		icon: SiKubernetes,
	},
	MacOS: {
		color: "bg-[#000000]/10 text-[#000000] dark:bg-white/10 dark:text-white",
		icon: SiApple,
	},
	IOS: {
		color: "bg-[#000000]/10 text-[#000000] dark:bg-white/10 dark:text-white",
		icon: SiIos,
	},
	Android: {
		color: "bg-[#3DDC84]/10 text-[#3DDC84]",
		icon: SiAndroid,
	},
};

export function getTechInfo(tech: string): TechInfo {
	return (
		techInfo[tech] ?? {
			color: "bg-indigo-50 text-indigo-600",
			icon: SiReact, // Icône par défaut
		}
	);
}
