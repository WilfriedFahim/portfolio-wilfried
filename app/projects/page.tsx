// app/projects/page.tsx

import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
	const projects = [
		{
			title: "LinkedIn Clone",
			description:
				"Une application complète avec authentification, base de données et interface intuitive construite avec React et Firebase.",
			stack: ["Next.js", "React", "Tailwind"],
			liveUrl: "https://github.com/WilfriedFahim/linkedin-clone",
			githubUrl: "https://github.com/WilfriedFahim/linkedin-clone",
			logo: "/images/project_1.png",
		},

		//... autre projets ...
	];
	return (
		<div className="max-w-6xl mx-auto">
			<h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
				Mes Réalisations
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((p) => (
					<ProjectCard key={p.title} {...p} />
				))}
			</div>
		</div>
	);
}
