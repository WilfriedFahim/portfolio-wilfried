"use client";

// components/Navbar.tsx

// 1. On importe le composant Link de Next.js
//    pour naviguer sans rafraîchir la page entière.
import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import Image from 'next/image';

// 2. On exporte par défaut la fonction Navbar,
//    ce qui permet de l'importer facilement ailleurs.

export default function Navbar() {

	const [open, setOpen] = useState(false);

	return (
		<nav className="fixed w-full bg-white shadow-md z-50">
			<Container className="py-0">
				<div className="flex justify-between items-center h-16">
					{/* logo*/}
					<div className="flex-shrink-0">
						<Link href="/" className="flex items-center">
							<Image src="/images/logo.svg" alt="logo WK" width={48} height={48} className="mr-2" />
							<span className="hidden md:inline text-xl font-bold">
								Portfolio Builder
							</span>
						</Link>
					</div>

					{/* Liens desktop */}
					<div className="hidden md:flex space-x-8">
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
					<div className="md:hidden">
						<button
							id="menu-btn"
							className="focus:outline-none"
							aria-label="Ouvrir le menu mobile"
							onClick={() => setOpen(!open)}
						>
							<span className="block w-6 h-0.5 bg-black mb-1"></span>
							<span className="block w-6 h-0.5 bg-black mb-1"></span>
							<span className="block w-6 h-0.5 bg-black"></span>
						</button>
					</div>

					{/* Menu mobile */}
					<div
						id="mobile-menu"
						className={`${
							open ? "flex" : "hidden"
						} flex-col space-y-2 mt-4 md:hidden`}
					>
						<Link href="/#home" className="nav-link block py-2">
							Accueil
						</Link>
						<Link href="/#projects" className="nav-link block py-2">
							Projets
						</Link>
						<Link href="/#skills" className="nav-link block py-2">
							Compétences
						</Link>
						<Link href="/#about" className="nav-link block py-2">
							À Propos
						</Link>
						<Link href="/#contact" className="nav-link block py-2">
							Contactez-moi
						</Link>
					</div>
				</div>
			</Container>
		</nav>
	);
}
