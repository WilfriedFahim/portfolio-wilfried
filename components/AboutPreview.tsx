// components/AboutPreview.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    À propos de moi
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Passionné par l’art de créer des expériences web uniques, je mélange
                    créativité et technique pour transformer vos idées en solutions
                    concrètes. Découvrez mon parcours et mes valeurs en détails.
                </p>
                <Link href="/about" passHref>
                    <button className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition">
                        En savoir plus
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </button>
                </Link>
            </div>
        </section>
    );
}
