// component/ProjectCard.tsx

import Image from "next/image";
import {
	FaGithub,
	FaExternalLinkAlt,
	FaRocket,
	FaHeart,
	FaFlask,
	FaWrench,
	FaRegClock,
	FaRegCalendarAlt,
} from "react-icons/fa";
import { skillsMock } from "@/mock";
import type { ProjectCardType } from "@/mock";
import FormattedDate from "./ui/FormattedDate";
import { ProjectDescription } from "./ui/ProjectDescription";

export function ProjectCard({
	title,
	description,
	stack,
	liveUrl,
	githubUrl,
	logo,
	badge,
	stats,
	lastUpdate,
}: ProjectCardType) {
	return (
		<div className="bg-white rounded-2xl shadow-2xl flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-200 max-w-[370px] mx-auto">
			{/* Ligne colorée en haut */}
			<div className="absolute top-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 opacity-90 z-10" />
			{/* Badge status */}
			{badge && badge.length > 0 && (
				<div className="absolute top-4 right-4 z-20 flex gap-2 flex-row-reverse">
					{badge.map((badge, idx) => (
						<span
							key={badge + idx}
							className={`
									flex items-center gap-2
									px-3 py-1
									rounded-full text-xs font-bold shadow
									backdrop-blur-sm bg-slate-900/30 border
									whitespace-nowrap
									max-w-fit   
									min-w-[70px]
									truncate       
									text-center
									${badge === "Production" ? "text-green-700 border-green-300/30" : ""}
									${badge === "Perso" ? "text-pink-700 border-pink-300/30" : ""}
									${badge === "Beta" ? "text-yellow-700 border-yellow-300/30" : ""}
									${badge === "En Construction" ? "text-orange-700 border-orange-300/30" : ""}
									${badge === "À venir" ? "text-indigo-700 border-indigo-300/30" : ""}
									${badge === "Prochainement" ? "text-gray-300 border-gray-400/30" : ""}
								`}
							title={badge} // Affiche le texte complet au survol si "truncate"
						>
							{badge === "Production" && <FaRocket className="text-xs" />}
							{badge === "Perso" && <FaHeart className="text-xs" />}
							{badge === "Beta" && <FaFlask className="text-xs" />}
							{badge === "En Construction" && <FaWrench className="text-xs" />}
							{badge === "À venir" && <FaRegClock className="text-xs" />}
							{badge === "Prochainement" && (
								<FaRegCalendarAlt className="text-xs" />
							)}
							<span className="truncate">{badge}</span>
						</span>
					))}
				</div>
			)}

			{/* Image projet */}
			{logo && (
				<div className="w-full h-[260px] overflow-hidden rounded-t-2xl relative">
					<Image
						src={logo}
						alt={title}
						width={400}
						height={260}
						className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
						priority
					/>
					{/* Glow effet */}
					<div className="absolute -top-12 -left-12 w-[300px] h-[300px] rounded-full bg-indigo-300 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700"></div>
				</div>
			)}

			{/* Contenu */}
			<div className="p-6 flex flex-col flex-1 bg-gray-100">
				{/* Badges stack */}
				<div className="flex flex-wrap gap-2 mb-2 justify-center">
					{stack.map((tech, index) => {
						const skill = skillsMock.find((s) => s.label === tech);
						return (
							<div
								key={index}
								className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-semibold text-xs ${skill?.color || "bg-indigo-100 text-indigo-700"
									}`}
							>
								{skill?.icon && (
									<skill.icon className="text-current" size={16} />
								)}
								<span>{tech}</span>
							</div>
						);
					})}
				</div>

				<div className="flex-1 flex flex-col justify-start border-t border-gray-300 mt-3">
					{/* Titre */}
					<h3 className="text-xl font-bold text-gray-900 mb-1 mt-2">{title}</h3>

					{/* Description */}
					<ProjectDescription description={description} title={title} />
				</div>

				{/* Date de mise à jour */}
				{lastUpdate && (
					<div className="text-right text-xs text-gray-400 italic pr-2">
						Dernière maj&nbsp; : <FormattedDate date={lastUpdate} format="fr" />
					</div>
				)}

				{/* Stats */}
				{stats && stats.length > 0 && (
					<div className="flex justify-between border-t border-gray-300 pt-4 mt-4 mb-3">
						{stats.map((s, i) => (
							<div
								key={i}
								className={`
										flex-1 text-center
										${i !== stats.length - 1 ? "border-r border-gray-300" : ""}
									`}
							>
								<div className="text-indigo-500 text-2xl font-extrabold">
									{s.value}
								</div>
								<span className="block w-6 h-0.5 rounded-full bg-pink-400 mx-auto mt-2 mb-2"></span>
								<div className="text-gray-400 text-xs font-semibold mt-1">
									{s.label}
								</div>
							</div>
						))}
					</div>
				)}

				{/* Boutons */}
				<div className="flex gap-4 mt-3">
					{githubUrl && (
						<a
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="action-btn flex-1 flex items-center gap-2 justify-center px-4 py-3 rounded-xl font-semibold text-xs transition-all duration-200 shadow-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 hover:scale-105"
							title="Voir le code sur GitHub"
						>
							<FaGithub className="text-lg" />
							Code
						</a>
					)}
					<a
						href={liveUrl || "#"}
						target="_blank"
						rel="noopener noreferrer"
						className={`action-btn flex-1 flex items-center gap-2 justify-center px-4 py-3 rounded-xl font-semibold text-xs transition-all duration-200 shadow-md
							${liveUrl
								? "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:scale-105"
								: "bg-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
							}
							`}
						tabIndex={liveUrl ? 0 : -1}
						aria-disabled={!liveUrl}
						title={
							liveUrl ? "Voir le code sur GitHub" : "Code source Privée"
						}
					>
						<FaExternalLinkAlt className="text-lg" />
						Live
					</a>
				</div>
			</div>
		</div>
	);
}
