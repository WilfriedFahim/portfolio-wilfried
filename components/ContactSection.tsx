export default function ContactSection() {
    return (
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50" id="contact">
            <div className="max-w-xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center text-indigo-700">Contact</h2>
                <p className="mb-8 text-center text-gray-600">Une idée, un projet, une question ? Écrivez-moi !</p>
                <form className="space-y-4">
                    <input type="text" placeholder="Votre nom" className="w-full px-4 py-2 rounded-lg border" required />
                    <input type="email" placeholder="Votre email" className="w-full px-4 py-2 rounded-lg border" required />
                    <textarea placeholder="Votre message" className="w-full px-4 py-2 rounded-lg border min-h-[100px]" required />
                    <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition">Envoyer</button>
                </form>
                <div className="flex justify-center gap-6 mt-6">
                    <a href="https://linkedin.com/in/..." target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-700 text-2xl">LinkedIn</a>
                    <a href="https://github.com/WilfriedFahim" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-indigo-700 text-2xl">GitHub</a>
                </div>
            </div>
        </section>
    );
}
