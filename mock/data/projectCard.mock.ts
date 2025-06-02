// mock/data/projectCard.mock.ts

import { ProjectCardType } from "../types/projectCard.types";

export const projectCardsMock: ProjectCardType[] = [
	{
		title: "TaskMaster Pro",
		description:
			"Plateforme révolutionnaire pour freelances et agences, gestion des tâches, analyse de perf, et plus. avec React et Firebase. avec React et Firebase.",
		stack: ["React", "Node.js", "Firebase", "Javascript"],
		liveUrl: "https://...",
		githubUrl: "https://...",
		logo: "/images/project_1.png",
		badge: "Production",
		stats: [
			{ label: "LIGNES", value: "15K" },
			{ label: "TESTS", value: "87%" },
			{ label: "NOTE", value: "4.9" },
		],
	},
	{
		title: "LinkedIn Clone",
		description:
			"Une application complète avec authentification, base de données et interface intuitive construite avec React et Firebase.",
		stack: ["Next.js", "React", "Tailwind"],
		liveUrl: "https://github.com/WilfriedFahim/linkedin-clone",
		githubUrl: "https://github.com/WilfriedFahim/linkedin-clone",
		logo: "/images/project_1.png",
		badge: "Perso",
		stats: [
			{ label: "UTILISATEURS", value: "500+" },
			{ label: "DEMO", value: "Oui" },
			{ label: "TESTS", value: "90%" },
		],
	},
	{
		title: "Galaxy Explorer",
		description:
			"Expérience immersive 3D explorant notre système solaire avec rendu réaliste. base de données et interface intuitive construite avec React et Firebase.",
		stack: ["React", "Three.js", "Next.js"],
		liveUrl: "https://github.com/WilfriedFahim/linkedin-clone",
		githubUrl: "https://github.com/WilfriedFahim/linkedin-clone",
		logo: "/images/project_1.png",
		badge: "Beta",
		stats: [
			{ label: "FPS", value: "60" },
			{ label: "TECHNOS", value: "WebGL" },
			{ label: "VR", value: "Oui" },
		],
	},
];
