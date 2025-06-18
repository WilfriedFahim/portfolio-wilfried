// components/ExperienceSection.tsx
"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  mode?: string;
  responsibilities: string[];
  results?: string[];
  footer: string;
  accent: string; // couleur de bordure
}

const experiences: Experience[] = [
  {
    title: "Développeur Front-End – Reconversion & Projets personnels",
    company: "Yemi Consulting · Indépendant",
    period: "mars 2025 – aujourd'hui · 4 mois",
    location: "Le Perreux-sur-Marne, Île-de-France, France · À distance",
    mode: "En reconversion active vers le front-end, j'ai construit chaque jour mes bases solides avec une approche projet 100 % concrète.",
    responsibilities: [
      "React.js, Next.js (App Router), Tailwind CSS, GitHub, Vercel",
      "Portfolio perso, clones d'interfaces, MVP EdgeMind",
      "Routing dynamique, responsive mobile, CI/CD",
    ],
    results: [],
    footer: "React.js, Next.js et 6 compétence(s) de plus",
    accent: "border-l-4 border-blue-500",
  },
  {
    title: "Gestionnaire Mon Allianz En Ligne",
    company: "Allianz France",
    period: "mai 2023 – nov. 2024 · 1 an 7 mois",
    location: "Noisy-le-Grand, Île-de-France, France · Hybride",
    responsibilities: [
      "Optimisation process Excel/VBA & gestion dossiers",
      "Analyse contrats IARD & automatisation rapports",
      "Dashboards interactifs & formation équipe",
    ],
    results: [
      "↑ Productivité grâce aux outils",
      "↓ Erreurs et temps de traitement",
      "KPI suivi amélioré grâce aux dashboards",
    ],
    footer: "Assurance IARD, Excel avancé et 11 compétence(s) de plus",
    accent: "border-l-4 border-green-500",
  },
  {
    title: "Développeur en E-Commerce",
    company: "Indépendant",
    period: "fév. 2020 – juin 2021 · 1 an 5 mois",
    location: "Val-de-Marne, Île-de-France, France",
    responsibilities: [
      "Création & optimisation boutiques Shopify & WordPress",
      "Personnalisation thèmes pour UX",
      "Automatisation scripts (stocks, commandes)",
    ],
    results: [],
    footer: "Shopify, WordPress et 8 compétence(s) de plus",
    accent: "border-l-4 border-purple-500",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-6">
          <h3 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Mon Parcours Professionnel
            </span>
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Découvrez comment, de mes premiers pas en programmation à ma reconversion en front-end,
            j’ai bâti mon expertise grâce à un esprit entrepreneurial et une vision produit concrète.
          </p>
        </header>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card className={`flex flex-col bg-white p-6 hover:shadow-2xl transition-shadow duration-300 ${exp.accent}`}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-600 mb-1">{exp.company}</p>
                <div className="flex flex-wrap text-gray-500 text-sm mb-4 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="mr-1 w-4 h-4" /> {exp.period}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="mr-1 w-4 h-4" /> {exp.location}
                  </span>
                </div>
                {exp.mode && (
                  <p className="text-gray-700 italic mb-4">{exp.mode}</p>
                )}
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
                {exp.results && exp.results.length > 0 && (
                  <>
                    <h4 className="font-medium text-gray-800 mb-2">Résultats :</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                      {exp.results.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </>
                )}
                <p className="text-sm text-gray-500">{exp.footer}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
