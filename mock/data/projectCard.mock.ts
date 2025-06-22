import { ProjectCardType } from "../types/projectCard.types";

export const projectCardsMock: ProjectCardType[] = [
	{
		title: "Portfolio Builder",
		description:
			"C'est la vitrine interactive de mes compétences, découvrez mes clones (LinkedIn, Twitch), mon SaaS EdgeMind, des mini-apps, et bien plus. Portfolio développé en Next.js, Tailwind, TypeScript et animations Framer Motion. Responsive et entièrement personnalisé.",
		stack: [
			"React",
			"Next.js",
			"JavaScript (ES6+)",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
		],
		liveUrl: "https://portfolio-wilfried-chi.vercel.app/",
		githubUrl: "https://github.com/WilfriedFahim/portfolio-wilfried",
		logo: "/images/projet_portfolio.jpg",
		badge: ["Production"],
		lastUpdate: new Date("2025-06-21"),
		stats: [
			{ label: "COMMITS", value: "54" },
			{ label: "TESTS", value: "." },
			{ label: "VERSIONS", value: "v1.0" },
		],
	},
	{
		title: "EdgeMind (SaaS trading IA)",
		description:
			"EdgeMind est une plateforme SaaS de coaching mental assistée par IA, dédiée aux traders : analyse comportementale en temps réel, mentor IA personnalisé, détection d’erreurs psychologiques et suivi des performances pour progresser durablement.",
		stack: [
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"Python",
			"FASTAPI",
		],
		liveUrl: "https://edgemind.app/", // à ajuster si tu as une vraie URL live
		githubUrl: "", // privé ou en cours : laisse vide pour test bouton désactivé
		logo: "/images/en_construction.jpg", // change le nom/image si besoin
		badge: ["En Construction"],
		lastUpdate: new Date("2025-06-22"),
		stats: [
			{ label: "UTILISATEURS", value: "." },
			{ label: "TESTS", value: "." },
			{ label: "VERSION", value: "MVP" },
		],
	},
	{
		title: "Yamo",
		description:
			"Yamo est une application mobile pensée pour l’Afrique, qui permet de localiser en temps réel la pharmacie la plus proche, ouverte et disponible autour de soi. Elle facilite la recherche d’établissements fiables, propose une navigation intuitive, et garantit l’accès rapide aux médicaments, partout et à tout moment.",
		stack: ["React Native", "Expo", "TypeScript", "Tailwind CSS"],
		liveUrl: "",
		githubUrl: "",
		logo: "/images/en_construction.jpg",
		badge: ["En Construction"],
		lastUpdate: new Date("2025-06-22"),
		stats: [
			{ label: "UTILISATEURS", value: "." },
			{ label: "COMMITS", value: "." },
			{ label: "VERSION", value: "MVP" },
		],
	},
	{
		title: "CarEasy",
		description:
			"CarEasy est une future application mobile conçue pour simplifier les déplacements en Afrique. Restez connectés pour découvrir toutes ses fonctionnalités innovantes dédiées à la mobilité urbaine et interurbaine !",
		stack: ["React Native", "Expo", "TypeScript", "Tailwind CSS"],
		liveUrl: "",
		githubUrl: "",
		logo: "/images/en_construction.jpg",
		badge: ["Prochainement"],
		lastUpdate: new Date("2025-06-01"),
		stats: [
			{ label: "UTILISATEURS", value: "." },
			{ label: "COMMITS", value: "." },
			{ label: "VERSION", value: "." },
		],
	},
	{
		title: "Youtube Clone",
		description:
			"Clone complet de Youtube: authentification sécurisée, feed dynamique, profils, messagerie et notifications en temps réel. Construit en Next.js/Vercel, responsive, avec animations soignées et design moderne.",
		stack: [
			"Next.js",
			"React",
			"Tailwind CSS",
			"Firebase",
			"TypeScript",
			"JavaScript (ES6+)",
		],
		liveUrl: "", // fictif ou vrai
		githubUrl: "https://github.com/WilfriedFahim/linkedin-clone",
		logo: "/images/en_construction.jpg",
		badge: ["Prochainement"],
		lastUpdate: new Date("2025-05-01"),
		stats: [
			{ label: "UTILISATEURS", value: "." },
			{ label: "TESTS", value: "." },
			{ label: "VERSION", value: "." },
		],
	},
	{
		title: "Portfolio Mobile",
		description:
			"Version mobile dédiée de mon portfolio, optimisée pour smartphone : navigation simplifiée, design épuré, animations adaptées, accessibilité renforcée. Stack React Native & Expo.",
		stack: ["React Native", "Expo", "TypeScript", "Tailwind CSS"],
		liveUrl: "", // bientôt en prod ? bouton désactivé
		githubUrl: "https://github.com/WilfriedFahim/portfolio-mobile",
		logo: "/images/en_construction.jpg",
		badge: ["Prochainement"],
		lastUpdate: new Date(""),
		stats: [
			{ label: "UTILISATEURS", value: "." },
			{ label: "TESTS", value: "." },
			{ label: "VERSION", value: "." },
		],
	},
];
