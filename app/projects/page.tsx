"use client";

import { useState } from "react";
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

	return (
		<Container className="py-0">
			<div className="w-full mx-auto">
				<section className="pb-20 pt-16 px-2">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-500 text-transparent bg-clip-text tracking-tight mb-4">
      <span className="inline-block align-middle mr-2">👨‍💻</span>
      Bienvenue dans mon monde
      <span className="inline-block align-middle ml-2">🎨</span>
    </h2>
    <div className="mx-auto my-4 flex justify-center">
      <span className="inline-block h-1 w-24 rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 opacity-50 shadow"></span>
    </div>
    <p className="text-xl sm:text-2xl text-gray-800 font-semibold text-center mb-4 leading-tight">
      <span className="text-blue-600 font-bold">Des projets qui allient technique et créativité</span>
    </p>
    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
      Chaque réalisation présentée ici – qu’il s’agisse d’un <span className="text-indigo-600 font-medium">clone</span> de plateforme, d’un <span className="text-blue-700 font-medium">SaaS</span> ou d’une <span className="text-violet-600 font-medium">application mobile</span> – incarne mon exigence, ma curiosité et mon envie de donner vie à des idées ambitieuses. <br />
      <span className="font-semibold text-blue-700">Transformer l’inspiration en solutions concrètes</span>, élégantes et utiles : voilà mon métier.
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
							className="px-4 py-2 rounded-r-x bg-gray-100 text-gray-600 font-bold border border-gray-200 hover:bg-gray-200 disabled:opacity-50"
						>
							Suivant
						</button>
					</div>
				)}
			</div>
		</Container>
	);
}
