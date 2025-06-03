// app/projects/page.tsx

import { ProjectCard } from "@/components/ProjectCard";
import { ProjectCardType, projectCardsMock } from "@/mock";

export default function Projects() {
	// Déclare la variable pour éviter "projects is not defined"
	const projects: ProjectCardType[] = projectCardsMock;

	return (
		<div className="w-full mx-auto">
			<h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
				Mes Réalisations
			</h2>
			<div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
			<p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16 text-center">
				Découvrez mes projets qui illustrent ma passion pour le développement et
				ma capacité à transformer des concepts en réalité.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((p) => (
					<ProjectCard key={p.title} {...p} />
				))}
			</div>
		</div>
	);
}
