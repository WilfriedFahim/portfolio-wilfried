// app/projects/page.tsx
"use client";

import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectCardsMock } from "@/mock/index";
import Container from "@/components/Container";
import { ParticlesBackground } from "@/components/ParticlesBackground";

export default function Projects() {
	// PAGINATION
	const projectsPerPage = 6;
	const [page, setPage] = useState(1);

	const allProjects = [...projectCardsMock].sort(
		(a, b) => b.lastUpdate.getTime() - a.lastUpdate.getTime()
	);

	const totalPages = Math.ceil(allProjects.length / projectsPerPage);
	const paginatedProjects = allProjects.slice(
		(page - 1) * projectsPerPage,
		page * projectsPerPage
	);

	// Scroll to top de la section au changement de page
	useEffect(() => {
		const section = document.getElementById("project-list-section");
		const y = section
			? section.getBoundingClientRect().top + window.pageYOffset - 24
			: 0;
		window.scrollTo({ top: y, behavior: "smooth" });
	}, [page]);

	return (
		<>
			<ParticlesBackground />
			<main className="pt-24 pb-16 bg-primary-dark min-h-screen relative z-10 text-white">
				<Container className="py-0" id="project-list-section">
					{/* HEADER */}
					<section className="pb-15 pt-16 px-4 text-center">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
									Bienvenue dans mon monde
								</span>
							</h2>
							<p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
								Des projets qui allient technique et créativité
							</p>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed">
								Chaque réalisation présentée ici, qu’il s’agisse d’un{" "}
								<span className="font-medium">clone</span> de plateforme, d’un{" "}
								<span className="font-medium">SaaS</span> ou d’une{" "}
								<span className="font-medium">application mobile</span>, incarne
								mon exigence, ma curiosité et mon envie de donner vie à des
								idées ambitieuses.
							</p>
						</div>
					</section>

					{/* PROJECT CARDS */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{paginatedProjects.map((project) => (
							<ProjectCard key={project.title} {...project} />
						))}
					</div>

					{/* PAGINATION */}
					{totalPages > 1 && (
						<div className="flex justify-center mt-12 mb-16 gap-2">
							<button
								onClick={() => setPage((p) => Math.max(1, p - 1))}
								disabled={page === 1}
								className="px-4 py-2 rounded-l-xl bg-gray-700 text-gray-300 font-bold border border-gray-600 hover:bg-gray-600 disabled:opacity-50"
							>
								Précédent
							</button>
							{[...Array(totalPages)].map((_, idx) => (
								<button
									key={idx}
									onClick={() => setPage(idx + 1)}
									className={`px-4 py-2 font-bold border-t border-b border-gray-600 ${page === idx + 1
										? "bg-indigo-500 text-white"
										: "bg-gray-700 text-gray-300 hover:bg-gray-600"
										}`}
								>
									{idx + 1}
								</button>
							))}
							<button
								onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
								disabled={page === totalPages}
								className="px-4 py-2 rounded-r-xl bg-gray-700 text-gray-300 font-bold border border-gray-600 hover:bg-gray-600 disabled:opacity-50"
							>
								Suivant
							</button>
						</div>
					)}
				</Container>
			</main>
		</>
	);
}
