import Image from "next/image";
import {
	FaGithub,
	FaExternalLinkAlt,
	FaRocket,
	FaHeart,
	FaFlask,
} from "react-icons/fa";
import type { ProjectCardType } from "@/mock";
import { getTechInfo } from "./ui/ColoredStack";

export function ProjectCard({
	title,
	description,
	stack,
	liveUrl,
	githubUrl,
	logo,
	badge,
	stats,
}: ProjectCardType) {
	return (
		<div className="bg-white rounded-2xl shadow-2xl flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-200 max-w-[370px] mx-auto">
			{/* Ligne colorée en haut */}
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 opacity-90 z-10" />

			{/* Badge status */}
			{badge && (
				<div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
					<span
						className={`
              flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold shadow
    backdrop-blur-sm bg-slate-900/30 border
              ${
								badge === "Production"
									? "text-green-700 border border-green-300/30"
									: ""
							}
              ${
								badge === "Perso"
									? "text-pink-700 border border-pink-300/30"
									: ""
							}
              ${
								badge === "Beta"
									? "text-yellow-700 border border-yellow-300/30"
									: ""
							}
            `}
					>
						{badge === "Production" && <FaRocket className="text-xs" />}
						{badge === "Perso" && <FaHeart className="text-xs" />}
						{badge === "Beta" && <FaFlask className="text-xs" />}
						{badge}
					</span>
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
					{/* Glow effet optionnel */}
					<div className="absolute -top-12 -left-12 w-[300px] h-[300px] rounded-full bg-indigo-300 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700"></div>
				</div>
			)}

			{/* Contenu */}
			<div className="p-6 flex flex-col flex-1">
				{/* Badges stack */}
				<div className="flex flex-wrap gap-2 mb-2">
					{stack.map((tech) => {
						const { color, icon: TechIcon } = getTechInfo(tech);
						return (
							<span
								key={tech}
								className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-semibold text-xs ${color}`}
							>
								<TechIcon />
								{tech}
							</span>
						);
					})}
				</div>
				{/* Titre */}
				<h3 className="text-xl font-bold text-gray-900 mb-1 mt-2">{title}</h3>
				{/* Description */}
				<p className="text-gray-600 text-sm mb-4">{description}</p>
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
								<div className="text-indigo-500 text-lg font-extrabold">
									{s.value}
								</div>
								<span className="block w-6 h-0.5 rounded-full bg-pink-400 mx-auto mt-2"></span>
								<div className="text-gray-400 text-xs font-semibold mt-1">
									{s.label}
								</div>
							</div>
						))}
					</div>
				)}
				{/* Boutons */}
				<div className="flex gap-4 mt-3">
					<a
						href={liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="action-btn bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-3 rounded-xl flex items-center gap-2 font-semibold hover:from-indigo-600 hover:to-purple-600 transition text-xs flex-1 justify-center"
					>
						<FaGithub className="text-lg" /> Live
					</a>
					<a
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="action-btn bg-gray-100 text-gray-800 px-4 py-3 rounded-xl flex items-center gap-2 font-semibold hover:bg-gray-200 transition text-xs flex-1 justify-center"
					>
						<FaExternalLinkAlt className="text-lg" /> Code
					</a>
				</div>
			</div>
		</div>
	);
}
