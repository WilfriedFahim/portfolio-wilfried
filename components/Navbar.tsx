"use client";

// components/Navbar.tsx

// 1. On importe le composant Link de Next.js
//    pour naviguer sans rafraîchir la page entière.
import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import Image from "next/image";

// 2. On exporte par défaut la fonction Navbar,
//    ce qui permet de l'importer facilement ailleurs.

export default function Navbar() {
	const [open, setOpen] = useState(false);
	console.log("Menu open ?", open);
	return (
		<nav className="fixed w-full bg-white shadow-md z-50">
			<Container className="py-0">
				<div className="flex justify-between items-center h-16">
					{/* logo*/}
					<div className="flex-shrink-0">
						<Link href="/" className="flex items-center">
							<Image
								src="/images/logo.svg"
								alt="logo WK"
								width={48}
								height={48}
								className="mr-2"
							/>
							<span className="hidden lg:inline text-xl font-bold">
								Portfolio Builder
							</span>
						</Link>
					</div>

					{/* Liens desktop */}
					<div className="hidden lg:flex space-x-8">
						<Link
							href="/#home"
							className="nav-link px-3 py-2 transition-colors duration-200 hover:text-blue-600"
						>
							Accueil
						</Link>
						<Link
							href="/#projects"
							className="nav-link px-3 py-2 transition-colors duration-200 hover:text-blue-600"
						>
							Projets
						</Link>
						<Link
							href="/#skills"
							className="nav-link px-3 py-2 transition-colors duration-200 hover:text-blue-600"
						>
							Compétences
						</Link>
						<Link
							href="/#about"
							className="nav-link px-3 py-2 transition-colors duration-200 hover:text-blue-600"
						>
							À Propos
						</Link>
						<Link
							href="/#contact"
							className="rounded-xl bg-blue-500 text-white px-4 py-2 transition-colors duration-200 hover:bg-blue-600"
						>
							Contactez-moi
						</Link>
					</div>
					{/* Burger mobile */}
					<button
						id="menu-btn"
						className="block lg:hidden focus:outline-none z-50 relative w-6 h-6 cursor-pointer"
						aria-label="Ouvrir le menu mobile"
						aria-expanded={open}
						onClick={() => setOpen(!open)}
					>
						<span
							className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
								open ? "rotate-45 top-3" : "top-1"
							}`}
						></span>
						<span
							className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
								open ? "opacity-0" : "top-3"
							}`}
						></span>
						<span
							className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
								open ? "-rotate-45 top-3" : "top-5"
							}`}
						></span>
					</button>
				</div>
			</Container>

			{/* Menu mobile */}
			<div
				id="mobile-menu"
				className={`${open ? "block" : "hidden"} lg:hidden bg-white shadow-lg`}
			>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<Link
						href="/#home"
						className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
					>
						Accueil
					</Link>
					<Link
						href="/#projects"
						className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
					>
						Projets
					</Link>
					<Link
						href="/#skills"
						className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
					>
						Compétences
					</Link>
					<Link
						href="/#about"
						className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50"
					>
						À propos
					</Link>
					<Link
						href="/#contact"
						className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600"
					>
						Contactez-moi
					</Link>
				</div>
			</div>
		</nav>
	);
}
