export type ProjectCardType = {
	title: string;
	description: string;
	stack: string[];
	liveUrl: string;
	githubUrl: string;
	logo?: string;
	badge?: "Production" | "Perso" | "Beta";
	stats?: { label: string; value: string }[];
};
