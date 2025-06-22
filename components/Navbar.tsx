// components/Navbar.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/Container";
import Image from "next/image";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	// close mobile menu on navigation
	const handleNavLinkClick = () => setOpen(false);

	return (
		<nav className="sticky top-0 w-full bg-white shadow-md z-50">
			<Container className="px-0">
				<div className="flex justify-between items-center h-16">
					{/* logo */}
					<div className="flex-shrink-0">
						<Link href="/" className="flex items-center" onClick={handleNavLinkClick}>
							<Image src="/images/logo.png" alt="logo WK" width={80} height={80} />
						</Link>
					</div>

					{/* Liens desktop */}
					<div className="hidden xl:flex items-center space-x-8">
						{[
							{ href: "/", label: "Accueil" },
							{ href: "/projects", label: "Projets" },
							{ href: "/skills", label: "Compétences" },
							{ href: "/about", label: "À propos" },
						].map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className={`nav-link px-3 py-2 transition-colors duration-200 ${pathname === href
									? "text-blue-500 font-bold"
									: "text-gray-700 hover:text-blue-500"
									}`}
							>
								{label}
							</Link>
						))}
						<Link
							href="/#contact"
							className="rounded-xl bg-blue-500 text-white px-4 py-2 transition-colors duration-200 hover:bg-blue-500"
						>
							Contactez-moi
						</Link>
					</div>

					{/* Burger mobile */}
					<button
						id="menu-btn"
						className="block xl:hidden focus:outline-none z-50 relative w-6 h-6 cursor-pointer px-6"
						aria-label="Ouvrir le menu mobile"
						aria-expanded={open}
						onClick={() => setOpen((o) => !o)}
					>
						<span
							className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${open ? "rotate-45 top-3" : "top-1"
								}`}
						/>
						<span
							className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${open ? "opacity-0" : "top-3"
								}`}
						/>
						<span
							className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${open ? "-rotate-45 top-3" : "top-5"
								}`}
						/>
					</button>
				</div>
			</Container>

			{/* Menu mobile */}
			<div
				id="mobile-menu"
				className={`${open ? "block" : "hidden"} xl:hidden bg-white shadow-lg`}
			>
				<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					{[
						{ href: "/", label: "Accueil" },
						{ href: "/projects", label: "Projets" },
						{ href: "/skills", label: "Compétences" },
						{ href: "/about", label: "À propos" },
					].map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							onClick={handleNavLinkClick}
							className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === href
								? "text-blue-500 font-bold"
								: "text-gray-700 hover:text-blue-500"
								}`}
						>
							{label}
						</Link>
					))}
					<Link
						href="/#contact"
						onClick={handleNavLinkClick}
						className="block px-3 py-2 rounded-md text-base font-bold text-white bg-blue-500 hover:bg-blue-500"
					>
						Contactez-moi
					</Link>
				</div>
			</div>
		</nav>
	);
}
