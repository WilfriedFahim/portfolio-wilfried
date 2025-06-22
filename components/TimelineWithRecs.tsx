// components/TimelineWithRecs.tsx
"use client";

import React from "react";
import Link from "next/link";
import { FaDownload, FaLinkedin } from "react-icons/fa";

interface Rec {
  name: string;
  title: string;
  text: string;
  profile: string;
}

const recommandations: Rec[] = [
  {
    name: "Kristian MILENKOVIC",
    title: "Assistant DCR Paris Nord Est, DCAG – Allianz France",
    text: "J'ai le plaisir de recommander Wilfried, un collaborateur exceptionnel sous ma responsabilité...",
    profile: "https://www.linkedin.com/in/kristian-milenkovic",
  },
  {
    name: "saidani Yanis",
    title: "Genesys Engage/Cloud",
    text: "Une aisance relationnelle, une compétence technique et un profil à dimension international...",
    profile: "https://www.linkedin.com/in/saidani-yanis",
  },
  {
    name: "Abdoulaye DIALLO",
    title: "Chef de Projet Freelance",
    text: "Je recommande vivement Mr Kouassi car j'ai travaillé avec lui. C'est quelqu'un de sérieux et de très professionnel.",
    profile: "https://www.linkedin.com/in/abdoulayediallo",
  },
];

export function TimelineWithRecs() {
  return (
    <div className="md:flex md:gap-8">
      {/* Timeline */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            À propos de moi
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Passionné par le développement web depuis mon plus jeune âge, j&rsquo;ai transformé ma curiosité en expertise. Mon esprit « builder » me pousse à constamment créer, améliorer et innover.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Je crois fermement que le meilleur moyen d&rsquo;apprendre est de faire. C&rsquo;est pourquoi j&rsquo;ai construit de nombreux projets personnels qui m&rsquo;ont permis d&rsquo;acquérir une solide expérience pratique.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-blue-800 font-medium">
              « Je ne me contente pas de coder – je construis des expériences qui engagent et inspirent. »
            </p>
          </div>
          <a
            href="/Wilfried_Chi_CV.pdf"
            download
            className="w-full inline-flex items-center justify-center bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            <FaDownload className="mr-2" /> Télécharger mon CV
          </a>
        </div>
      </div>

      {/* Recommandations */}
      <div className="md:w-1/2">
        <div className="bg-white p-8 rounded-xl shadow-md flex flex-col h-full relative">
          <h2 className="text-3xl font-bold text-gray-800 mb-6  text-center">
            Recommandations
          </h2>

          <ul className="space-y-4 overflow-y-auto pr-2 max-h-[390px] scroll-smooth">
            {recommandations.map((rec, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-4 border border-gray-100 rounded-lg p-4 shadow-sm bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-white text-sm">
                  {rec.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{rec.name}</p>
                  <p className="text-sm text-gray-600">{rec.title}</p>
                  <p className="text-gray-700 italic text-sm mt-1">
                    “{rec.text}”
                  </p>
                  <Link
                    href={rec.profile}
                    target="_blank"
                    className="text-blue-500 text-sm mt-1 inline-block hover:underline"
                  >
                    Voir le profil
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-8">
            <Link
              href="https://www.linkedin.com/in/votre-profil"
              target="_blank"
              className="w-full inline-flex items-center justify-center bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              <FaLinkedin className="w-4 h-4 mr-2" /> Voir plus sur LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}
