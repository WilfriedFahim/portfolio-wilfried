// components/Footer.tsx
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-14 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo + Baseline */}
                <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
                    <a href="#" className="text-2xl font-bold flex items-center">
                        <span className="bg-blue-500 p-2 rounded-lg mr-2">
                            <i className="fas fa-code"></i>
                        </span>
                        <span>Yemi Consulting</span>
                    </a>
                    <p className="mt-2 text-gray-400 text-center md:text-left text-base">
                        Construire l&rsquo;avenir, une ligne de code à la fois.
                    </p>
                </div>
                {/* Réseaux sociaux + Copyright */}
                <div className="flex flex-col items-center md:items-end">
                    <div className="flex space-x-6 mb-4">
                        <a
                            href="https://www.linkedin.com/in/wilfriedk/"
                            className="text-gray-400 hover:text-white transition duration-300"
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn size={24} />
                        </a>
                        <a
                            href="https://github.com/WilfriedFahim"
                            className="text-gray-400 hover:text-white transition duration-300"
                            aria-label="GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={24} />
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm text-center md:text-right">
                        © {new Date().getFullYear()} Wilfried. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
