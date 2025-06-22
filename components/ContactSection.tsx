// components/ContactSection.tsx
"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail, Phone, MapPin, Send, Info, Clock } from "lucide-react";
import Image from "next/image";

// Définition du gradient (identique)
const gradientStyle = {
    background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
};

export default function ContactSection() {
    return (
        <section
            className="py-20 text-white w-full"
            id="contact"
            style={gradientStyle}
        >
            <div className="max-w-6xl w-full mx-auto px-4">
                {/* HEADER */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Travaillons ensemble</h1>
                    {/* Trait blanc sous le titre */}
                    <div className="w-20 h-1 bg-white mx-auto mb-6 rounded"></div>
                    <p className="text-xl max-w-2xl mx-auto text-white">
                        Vous avez un projet, une idée, une question ? Parlons-en, je suis toujours ouvert aux collaborations ambitieuses.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
                    {/* COLONNE GAUCHE - INFOS */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl contact-card p-8 md:p-12 flex flex-col justify-between border border-white/20">
                        <div>
                            <div className="flex items-center mb-10">
                                <span className="bg-white/30 text-blue-600 rounded-full p-3 mr-4">
                                    <Info className="w-6 h-6" />
                                </span>
                                <h2 className="text-2xl font-bold text-white">Collaborons sur votre projet</h2>
                            </div>
                            <p className="text-white/80 mb-10 text-lg">
                                Que ce soit pour un site, une application mobile ou une solution digitale innovante, je vous accompagne pour concrétiser votre vision.
                            </p>
                            <div className="space-y-6 mb-12">
                                <div className="flex items-start">
                                    <span className="bg-white/30 text-blue-600 rounded-full p-3 mr-4">
                                        <Mail className="w-5 h-5" />
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-white text-lg">Email</h3>
                                        <p className="text-white/80 break-all">wilfried.kouassi.pro@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-white/30 text-blue-600 rounded-full p-3 mr-4">
                                        <Phone className="w-5 h-5" />
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-white text-lg">Téléphone</h3>
                                        <p className="text-white/80">+33 6 12 34 56 78</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="bg-white/30 text-blue-600 rounded-full p-3 mr-4">
                                        <MapPin className="w-5 h-5" />
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-white text-lg">Localisation</h3>
                                        <p className="text-white/80">Paris, France (ou à distance)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-8">
                                <h3 className="font-semibold text-white text-lg mb-4">Connectons-nous</h3>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://www.linkedin.com/in/wilfriedk/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/30 text-blue-600 rounded-full p-3 w-12 h-12 flex items-center justify-center social-icon hover:bg-white/40 transition"
                                    >
                                        <FaLinkedin className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://github.com/WilfriedFahim"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/30 text-white rounded-full p-3 w-12 h-12 flex items-center justify-center social-icon hover:bg-white/40 transition"
                                    >
                                        <FaGithub className="w-6 h-6" />
                                    </a>
                                    <a
                                        href="https://www.malt.fr/profile/wilfriedkouassi1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/30 text-red-600 rounded-full p-3 w-12 h-12 flex items-center justify-center social-icon hover:bg-white/40 transition"
                                    >
                                        <Image
                                            src="/images/malt-france-logo-vector.png"
                                            alt="Malt"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6 object-contain"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 bg-white/30 rounded-xl p-6 border border-white/20">
                            <div className="flex items-start">
                                <div className="mr-4 text-blue-600">
                                    <Info className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Première consultation gratuite</h4>
                                    <p className="text-white/80 text-sm">
                                        Discutons de votre projet lors d&rsquo;un appel découverte de 30 minutes, sans engagement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* COLONNE DROITE - FORMULAIRE */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl contact-card p-8 md:p-12 relative overflow-hidden border border-white/20">
                        {/* Éléments décoratifs */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/30 rounded-full opacity-20"></div>
                        <div className="absolute bottom-20 -left-8 w-24 h-24 bg-white/40 rounded-full opacity-20"></div>
                        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white/60 rounded-full opacity-10"></div>
                        {/* Formulaire Formsubmit.co */}
                        <form
                            className="relative z-10 space-y-6"
                            action="https://formsubmit.co/kouassi.Wilfried.pro@gmail.Com"
                            method="POST"
                            autoComplete="off"
                        >
                            {/* Options Formsubmit */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value="Nouveau message du portfolio" />
                            <input type="hidden" name="_next" value="https://portfolio-wilfried-chi.vercel.app/merci" />
                            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                            <div className="flex items-center mb-10">
                                <span className="bg-white/30 text-blue-600 rounded-full p-3 mr-4">
                                    <Send className="w-6 h-6" />
                                </span>
                                <h2 className="text-2xl font-bold text-white">Envoyez un message</h2>
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-white font-medium mb-2">
                                    Votre nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white text-gray-900 bg-white/60 placeholder-gray-400"
                                    placeholder="Jean Dupont"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-white font-medium mb-2">
                                    Votre email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white text-gray-900 bg-white/60 placeholder-gray-400"
                                    placeholder="jean@exemple.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-white font-medium mb-2">
                                    Sujet
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white text-gray-900 bg-white/60 placeholder-gray-400"
                                    placeholder="À propos de votre projet"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-white font-medium mb-2">
                                    Votre message <span className="text-xs text-white/60">(parlez-moi de vos objectifs et attentes)</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-white text-gray-900 bg-white/60 placeholder-gray-400"
                                    placeholder="Décrivez votre projet, vos besoins, votre vision…"
                                />
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    required
                                    className="rounded text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="consent" className="ml-2 text-white/80 text-sm">
                                    J&rsquo;accepte que mes informations soient utilisées pour répondre à ma demande.
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-white/90 hover:bg-white text-blue-600 font-bold py-4 rounded-lg transition-all shadow-lg text-lg flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Envoyer le message
                            </button>
                            <div className="mt-8 text-center">
                                <p className="text-white flex items-center justify-center gap-2">
                                    <Clock className="w-5 h-5 text-blue-400" />
                                    Réponse garantie sous 24h
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
