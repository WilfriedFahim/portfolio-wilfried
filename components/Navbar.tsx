// components/Navbar.tsx

// 1. On importe le composant Link de Next.js
//    pour naviguer sans rafraîchir la page entière.
import Link from "next/link";

// 2. On exporte par défaut la fonction Navbar,
//    ce qui permet de l'importer facilement ailleurs.

export default function Navbar() {
	return (
		// 3. Balise <nav> sémantique qui entoure la barre de navigation
		//    bg-white  → fond blanc
		//    shadow    → ombre portée
		//    p-4       → padding uniforme (1 rem)
		<nav className="fixed top-0 w-full bg-white shadow-md z-50 p-4">
			{/* 4. <ul> pour structurer les liens en liste horizontale
                flex      → active flexbox pour aligner les items
                space-x-4 → espace horizontal (1 rem) entre chaque <li> */}
			<ul className="flex flex-col md:flex-row md:space-x-4">
				{/* 5. <li> = un élément de la liste
                    <Link> déclenche une navigation client-side */}
				<li>
					<Link
						href="/#home"
						className="nav-link  block py-2 px-4 transition-colors duration-200"
					>
						Accueil
					</Link>
				</li>
				<li>
					<Link
						href="/#projects"
						className=" nav-link block py-2 px-4 transition-colors duration-200"
					>
						Projets
					</Link>
				</li>
				<li>
					<Link
						href="/#skills"
						className="nav-link block py-2 px-4transition-colors duration-200"
					>
						Contact
					</Link>
				</li>
				<li>
					<Link
						href="/#about"
						className="nav-link block py-2 px-4 transition-colors duration-200"
					>
						À Propos
					</Link>
				</li>
				<li>
					<Link
						href="/#contact"
						className="nav-link block py-2 px-4 transition-colors duration-200"
						> 
					
						Contactez-moi
					</Link>
				</li>
			</ul>
		</nav>
	);
}
