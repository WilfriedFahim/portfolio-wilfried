import { skillsMock } from "@/mock";
export default function SkillsSection() {
    const groups = ["Frontend", "Backend", "Design & Outils", "Soft Skills"];
    return (
        <section className="py-16 bg-gradient-to-br from-white to-slate-100" id="skills">
            <div className="max-w-5xl mx-auto px-2">
                <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Mes compétences</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {groups.map((group) => (
                        <div key={group}>
                            <h3 className="text-lg font-semibold mb-3 text-indigo-500">{group}</h3>
                            <ul className="flex flex-wrap gap-2">
                                {skillsMock.filter(s => s.group === group).map((skill) => (
                                    <li key={skill.label} className="flex items-center gap-2 bg-white shadow-sm px-3 py-2 rounded-lg text-sm font-medium">
                                        <skill.icon className="text-xl" />
                                        {skill.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
