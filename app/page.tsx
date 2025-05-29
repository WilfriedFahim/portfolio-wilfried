import Link from "next/link";
import Container from "@/components/Container";
import AnimatedAvatar from "@/components/ui/AnimatedAvatar";
import "./globals.css";
import { FaEye, FaPaperPlane } from "react-icons/fa"

export default function Home() {
	return (
		<main>
			<div className="w-full bg-gradient-to-br from-blue-600 via-blue-400 to-violet-700 shadow-lg">
				<Container className="py-10 flex flex-col lg:flex-row items-center justify-between">
					{/* zone texte*/}
					<div className="flex-1 flex flex-col items-start text-left">
						{/* Nom/Prénom en gros*/}
						<h1 className="text-white text-4xl md:text-5xl font-bold mb-5">
							Hello, je suis{" "}
							<span className="text-yellow-300">
								[Wilfried <br /> KOUASSI]
							</span>
						</h1>

						{/*Job title / rôle */}
						<p className="typewriter text-2xl lg-text-3xl font-bold mb-5 text-white">
							Développeur Front-end Junior
						</p>

						{/* Baseline/présentation courte */}
						<p className="max-w-2xl text-white text-lg mb-3">
							Passioné de tech, je transforme des idées en expériences web
							interactives et élégantes. Chaque Ligne de code est une
							opportunité de créer quelque chose d&rsquo;extraordinaire.
							Curieux, exigeant et prêt à livrer des projets concrets.
						</p>

						{/* Boutons d'actions */}
						<div className="flex flex-col lg:flex-row gap-4 mt-4">
							<Link
								href="/projects"
								className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center"
							>
								<FaEye className="text-lg mr-2" />
								Voir mes projets
							</Link>
							<Link
								href="/contact"
								className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center"
							>
								<FaPaperPlane className="text-lg mr-2" />
								Me contacter
							</Link>
						</div>
					</div>

					{/* zone image*/}
					<div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
						<AnimatedAvatar />
					</div>
				</Container>
			</div>

			<Container>
				<h1>Hello</h1>
			</Container>
		</main>
	);
}
