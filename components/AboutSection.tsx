// components/AboutSection.tsx
"use client";

import React from "react";
import { FaDownload } from "react-icons/fa";

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                {/* Texte */}
                <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        À propos de moi
                    </h2>
                    <div className="w-20 h-1 bg-blue-500 mb-6" />
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
                        href="public/Wilfried_KOUASSI_CV.pdf"
                        download
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        <FaDownload className="mr-2" /> Télécharger mon CV
                    </a>
                </div>

                {/* Timeline */}
                <div className="md:w-1/2">
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Mon Parcours</h3>
                        <div className="space-y-8">
                            {/* Item 1 */}
                            <div className="flex">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full" />
                                    <div className="w-px h-full bg-gray-300 mt-2" />
                                </div>
                                <div className="pb-8">
                                    <p className="text-sm text-gray-500">2022 - Présent</p>
                                    <h4 className="text-lg font-bold text-gray-800 mb-2">Développeur Frontend Freelance</h4>
                                    <p className="text-gray-600">
                                        Création de sites web et applications pour divers clients, avec focus sur UI/UX et performance.
                                    </p>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="flex">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full" />
                                    <div className="w-px h-full bg-gray-300 mt-2" />
                                </div>
                                <div className="pb-8">
                                    <p className="text-sm text-gray-500">2020 - 2022</p>
                                    <h4 className="text-lg font-bold text-gray-800 mb-2">Formation Intensive en Développement Web</h4>
                                    <p className="text-gray-600">
                                        Apprentissage des technologies modernes du web à travers projets concrets et défis techniques.
                                    </p>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="flex">
                                <div className="flex flex-col items-center mr-4">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">2018 - 2020</p>
                                    <h4 className="text-lg font-bold text-gray-800 mb-2">Premiers Pas en Programmation</h4>
                                    <p className="text-gray-600">
                                        Découverte de la programmation via petits projets personnels et tutoriels en ligne.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
