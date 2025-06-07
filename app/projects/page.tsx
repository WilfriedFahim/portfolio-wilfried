"use client";

import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projectCardsMock } from "@/mock/index";
import Container from "@/components/Container";

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

	// -----> SCROLL TO TOP DE LA SECTION AU CHANGEMENT DE PAGE <-----
	useEffect(() => {
		const section = document.getElementById("project-list-section");
		if (section) {
			// Offset de 24px pour laisser respirer sous le header sticky si besoin
			const y = section.getBoundingClientRect().top + window.pageYOffset - 24;
			window.scrollTo({ top: y, behavior: "smooth" });
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [page]);
	// ---------------------------------------------------------------

	return (
		<Container className="py-0">
			<div className="w-full mx-auto" id="project-list-section">
				<section className="pb-15 pt-16 px-2">
					<div className="max-w-6xl mx-auto">

						<h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-br from-gray-700 via-blue-500 to-black text-transparent bg-clip-text tracking-tight mb-4">
							Bienvenue dans mon monde
						</h2>
						<div className="mx-auto mt-4 flex justify-center">
							<span className="inline-block mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 opacity-50 shadow"></span>
						</div>
						<p className="text-xl sm:text-2xl mt-6 text-gray-800 font-semibold text-center mb-4 leading-tight">
							<span className="bg-gradient-to-br from-gray-700 via-blue-500 to-black text-transparent bg-clip-text tracking-tight font-bold">Des projets qui allient technique et créativité</span>
						</p>
						<p className="text-base sm:text-lg text-gray-600 max-w-5xl mx-auto text-center leading-relaxed">
							Chaque réalisation présentée ici, qu&rsquo;il s&rsquo;agisse d&rsquo;un <span className="text-gray-600 font-medium">clone</span> de plateforme, d&rsquo;un <span className="text-gray-700 font-medium">SaaS</span> ou d&rsquo;une <span className="text-gray-600 font-medium">application mobile</span>, incarne mon exigence, ma curiosité et mon envie de donner vie à des idées ambitieuses. <br />
							<span className="font-semibold text-gray-700">Transformer l&rsquo;inspiration en solutions concrètes</span>, élégantes et utiles : voilà mon métier.
						</p>
					</div>
				</section>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{paginatedProjects.map((p) => (
						<ProjectCard key={p.title} {...p} />
					))}
				</div>

				{/* PAGINATION */}
				{totalPages > 1 && (
					<div className="flex justify-center mt-12 mb-16 gap-2">
						<button
							onClick={() => setPage((p) => Math.max(1, p - 1))}
							disabled={page === 1}
							className="px-4 py-2 rounded-l-xl bg-gray-100 text-gray-600 font-bold border border-gray-200 hover:bg-gray-200 disabled:opacity-50"
						>
							Précédent
						</button>
						{[...Array(totalPages)].map((_, idx) => (
							<button
								key={idx}
								onClick={() => setPage(idx + 1)}
								className={`px-4 py-2 font-bold border-t border-b border-gray-200 ${page === idx + 1 ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
							>
								{idx + 1}
							</button>
						))}
						<button
							onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
							disabled={page === totalPages}
							className="px-4 py-2 rounded-r-xl bg-gray-100 text-gray-600 font-bold border border-gray-200 hover:bg-gray-200 disabled:opacity-50"
						>
							Suivant
						</button>
					</div>
				)}
			</div>
		</Container>
	);
}
