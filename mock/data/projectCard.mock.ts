// mock/data/projectCard.mock.ts

import { ProjectCardType } from "../types/projectCard.types";

export const projectCardsMock: ProjectCardType[] = [
	{
		title: "Mon Portfolio de Builder",
		description:
			"C'est ma vitrine technique : il regroupe mes premiers clones de sites web, une mini-app mobile, mon SaaS personnel EdgeMind et bien d'autres.",
		stack: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "CSS3", "Tailwind CSS"],
		liveUrl: "https://portfolio-wilfried-chi.vercel.app/",
		githubUrl: "https://github.com/WilfriedFahim/portfolio-wilfried",
		logo: "/images/projet_portfolio.jpg",
		badge: "Production",
		lastUpdate: new Date("2024-03-15"),
		stats: [
			{ label: "DEPLOIEMENTS", value: "28" },
			{ label: "TESTS", value: "Soon" },
			{ label: "VERSIONS", value: "v1.0" },
		],
	},
	{
		title: "Mon Portfolio de Builder ",
		description:
			"C'est ma vitrine technique : il regroupe mes premiers clones de sites web, une mini-app mobile, mon SaaS personnel EdgeMind et bien d'autres.",
		stack: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "CSS3", "Tailwind CSS"],
		liveUrl: "https://portfolio-wilfried-chi.vercel.app/",
		githubUrl: "https://github.com/WilfriedFahim/portfolio-wilfried",
		logo: "/images/projet_portfolio.jpg",
		badge: "Production",
		lastUpdate: new Date("2024-03-14"),
		stats: [
			{ label: "DEPLOIEMENTS", value: "28" },
			{ label: "TESTS", value: "Soon" },
			{ label: "MIS À JOUR", value: "06/25" }
		],
	},
	{
		title: "LinkedIn Clone",
		description:
			"Une application complète avec authentification, base de données et interface intuitive construite avec React et Firebase.",
		stack: ["Next.js", "React", "Tailwind CSS"],
		liveUrl: "https://github.com/WilfriedFahim/linkedin-clone",
		githubUrl: "https://github.com/WilfriedFahim/linkedin-clone",
		logo: "/images/project_1.png",
		badge: "Perso",
		lastUpdate: new Date("2024-03-13"),
		stats: [
			{ label: "DEPLOIEMENTS", value: "28" },
			{ label: "TESTS", value: "Soon" },
			{ label: "MIS À JOUR", value: "06/25" }
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
		lastUpdate: new Date("2024-03-12"),
		stats: [
			{ label: "FPS", value: "60" },
			{ label: "TECHNOS", value: "WebGL" },
			{ label: "VR", value: "Oui" },
		],
	},
];
