export default function AboutSection() {
    return (
        <section className="py-20" id="about">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <img src="/images/photo_wilfried.jpg" alt="Wilfried" className="w-40 h-40 rounded-full shadow-lg object-cover" />
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-indigo-700">À propos de moi</h2>
                    <p className="mb-3 text-gray-700 text-lg">Je m’appelle Wilfried, passionné de tech, développeur front-end junior, créateur dans l’âme. Après un parcours riche et atypique, je me spécialise dans la création d’expériences web modernes, accessibles et engageantes.</p>
                    <ul className="mb-3 list-disc list-inside text-gray-600">
                        <li>+10 projets réalisés (SaaS, apps, clones, mobile)</li>
                        <li>Maîtrise de React, Next.js, Tailwind, TypeScript</li>
                        <li>Fan d’UI/UX, de pédagogie et d’innovation utile</li>
                        <li>Basé en France, ouvert aux missions partout</li>
                    </ul>
                    <span className="inline-block mt-2 text-indigo-500 font-semibold">Prêt à rejoindre une aventure ? Discutons !</span>
                </div>
            </div>
        </section>
    );
}
