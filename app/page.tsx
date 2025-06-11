// app/page.tsx

import Link from "next/link";
import Container from "@/components/Container";
import AnimatedAvatar from "@/components/ui/AnimatedAvatar";
import "./globals.css";
import { FaEye, FaPaperPlane } from "react-icons/fa";
import { ProjectList } from "@/components/ProjectList";
import SkillsSection from "@/components/SkillsSection";
import AboutPreview from "@/components/AboutPreview";
import ContactSection from "@/components/ContactSection";

export default function Home() {
	return (
		<main className="bg-white">
			<div className="w-full bg-gradient-to-br from-blue-600 via-blue-400 to-violet-700 shadow-lg">
				<Container className="py-20 flex flex-col xl:flex-row items-center justify-between">
					{/* zone image*/}
					<div className="flex-1 flex justify-center items-center mb-12 xl:mb-0">
						<AnimatedAvatar />
					</div>
					{/* zone texte*/}
					<div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8 w-full max-w-xl mx-auto">
						<h1 className="text-white text-3xl sm:text-4xl xl:text-5xl font-bold mb-4">
							Hello, je suis{" "}
							<span className="text-yellow-300">[Wilfried KOUASSI]</span>
						</h1>

						<p className="typewriter block text-xl sm:text-2xl font-bold mb-4 text-white leading-relaxed">
							Développeur Front-end Junior
						</p>

						<p className="text-white text-base sm:text-lg mb-6 leading-relaxed">
							Passioné de tech, je transforme des idées en expériences web
							interactives et élégantes. Chaque ligne de code est une
							opportunité de créer quelque chose d&apos;extraordinaire. Curieux,
							exigeant et prêt à livrer des projets concrets.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								href="/projects"
								className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center"
							>
								<FaEye className="text-lg mr-2" />
								Voir mes projets
							</Link>
							<Link
								href="#contact"
								className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center"
							>
								<FaPaperPlane className="text-lg mr-2" />
								Me contacter
							</Link>
						</div>
					</div>
				</Container>
			</div>
			<ProjectList />
			<SkillsSection />
			<AboutPreview />
			<div className="w-full px-4" id="#ContactSection">
				<ContactSection />
			</div>
		</main>
	);
}
