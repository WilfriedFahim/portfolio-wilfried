export default function Footer() {
    return (
        <footer className="py-8 bg-gray-900 text-gray-300 mt-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
                <span className="font-semibold text-lg tracking-wide">Wilfried KOUASSI © {new Date().getFullYear()}</span>
                <span className="italic">Merci de votre visite, à bientôt sur un prochain projet !</span>
                <div className="flex gap-6">
                    <a href="https://github.com/WilfriedFahim" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
                    <a href="https://linkedin.com/in/..." target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
