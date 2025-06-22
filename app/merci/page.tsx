// app/merci/page.tsx
"use client";

import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export default function MerciPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-white px-4 py-16">
            <div className="max-w-md w-full mx-auto bg-white rounded-3xl shadow-2xl px-8 py-14 flex flex-col items-center relative overflow-hidden animate-fadein">
                {/* Animation fond */}
                <div className="absolute -top-16 -right-24 w-72 h-72 rounded-full bg-indigo-400/10 blur-2xl z-0" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl z-0" />

                {/* Icône validation */}
                <div className="relative z-10 flex flex-col items-center">
                    <CheckCircle2 className="w-24 h-24 text-indigo-500 animate-bounce-in mb-4 drop-shadow-lg" />
                    <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center mb-2">
                        Merci pour votre message !
                    </h1>
                    <p className="text-gray-600 text-lg text-center mb-6">
                        Votre demande a bien été envoyée.<br />
                        Je reviens vers vous sous 24h pour discuter de votre projet.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold shadow-lg hover:from-indigo-600 hover:to-blue-600 transition mt-4"
                    >
                        <ArrowLeft className="w-5 h-5" /> Retour à l’accueil
                    </Link>
                </div>

                {/* Animations */}
                <style>{`
          @keyframes bounce-in {
            0% { transform: scale(0.8); opacity: 0; }
            60% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); }
          }
          .animate-bounce-in {
            animation: bounce-in 0.7s cubic-bezier(.68,-0.55,.27,1.55) both;
          }
          @keyframes fadein {
            from { opacity: 0; transform: translateY(20px);}
            to   { opacity: 1; transform: translateY(0);}
          }
          .animate-fadein {
            animation: fadein 0.8s ease;
          }
        `}</style>
            </div>
        </main>
    );
}
