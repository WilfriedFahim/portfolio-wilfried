// components/ProjectCard.tsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

{
	/* C'est du typage de base je dois lui crée un dossier spécifique, mais vu  que le projet est mineur je le laisse là */
}
interface ProjectProps {
	title: string;
	description: string;
	stack: string[];
	liveUrl: string;
	githubUrl: string;
	logo?: string;
}

export function ProjectCard({
	title,
	description,
	stack,
	liveUrl,
	githubUrl,
	logo,
}: ProjectProps) {
	return (
		<div className="bg-white rounded-xl shadow-lg flex flex-col hover:-translate-y-2 hover:shadow-2xl transition duration-300">
			{logo && (
				<div className="w-full h40 rounded-t-xl overflow-hidden mb-4">
					<Image
						src={logo}
						width={400}
						height={160}
						alt="Logo Projet"
						className="w-full h-full object-cover transition duration-500 hover:scale-110"
						priority
					/>
				</div>
			)}
			<div className="pl-6 pr-6 pb-6 flex flex-col flex-1">
				<div className="flex gap-2 mb-3 flex-wrap">
					{stack.map((tech: string) => (
						<span
							key={tech}
							className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-medium"
						>
							{tech}
						</span>
					))}
				</div>
				<h3 className="text-xl font-bold mb-1">{title}</h3>
				<p className="text-gray-600 mb-4">{description}</p>
				<div className="flex gap-3 mt-auto justify-between items-center">
					<a
						href={liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition text-xs"
					>
						<FaExternalLinkAlt /> Voir le projet
					</a>
					<a
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300 transition text-xs"
					>
						<FaGithub /> Code Source
					</a>
				</div>
			</div>
		</div>
	);
}
