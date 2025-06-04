// app/projects/page.tsx

import { ProjectCard } from "@/components/ProjectCard";
import { projectCardsMock } from "@/mock/index";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
	// Déclare la variable pour éviter "projects is not defined"
	const featuredProjects = [...projectCardsMock]
		.sort((a, b) => b.lastUpdate.getTime() - a.lastUpdate.getTime())
		.slice(0, 3);

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
				{featuredProjects.map((p) => (
					<ProjectCard key={p.title} {...p} />
				))}
			</div>
			<div className="flex justify-center mt-10">
				<Link 
				href="/projects" 
				className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:from-indigo-600 hover:to-purple-600 transition"
				>
					Voir tous mes projets!
					<FaArrowRight className="ml-1" />
				</Link>
			</div>
		</div>
	);
}
