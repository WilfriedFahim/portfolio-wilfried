// app/skills/page.tsx
"use client";

import React from "react";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { FlipCard } from "@/components/FlipCard";
import { skillsMock } from "@/mock/index";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { FaCode, FaServer, FaTools, FaMobileAlt, FaUsers } from "react-icons/fa";
import { FloatingNav } from "@/components/FloatingNav";

const sections = [
  {
    key: "frontend",
    title: "Frontend",
    Icon: FaCode,
    iconColor: "text-blue-400",
    frontBg: "frontend-bg",
    backBg: "bg-blue-400/10",
    decor1: "absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 blur-3xl z-0",
    decor2: "absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-xl",
  },
  {
    key: "backend",
    title: "Backend",
    Icon: FaServer,
    iconColor: "text-purple-400",
    frontBg: "backend-bg",
    backBg: "bg-purple-500/10",
    decor1: "absolute top-0 left-0 w-64 h-64 bg-purple-500/10 blur-3xl",
    decor2: "absolute bottom-10 right-0 w-48 h-48 bg-purple-400/10 blur-xl",
  },
  {
    key: "tools",
    title: "Outils & Technologies",
    Icon: FaTools,
    iconColor: "text-yellow-500",
    frontBg: "tools-bg",
    backBg: "bg-yellow-600/10",
    decor1: "absolute top-20 right-10 w-72 h-72 bg-yellow-600/10 blur-3xl",
    decor2: "absolute bottom-0 left-20 w-56 h-56 bg-orange-500/10 blur-xl",
  },
  {
    key: "mobile",
    title: "Mobile",
    Icon: FaMobileAlt,
    iconColor: "text-green-400",
    frontBg: "mobile-bg",
    backBg: "bg-green-500/10",
    decor1: "absolute top-1/4 left-1/4 w-80 h-80 bg-green-500/10 blur-3xl",
    decor2: "absolute bottom-20 right-10 w-64 h-64 bg-emerald-400/10 blur-xl",
  },
  {
    key: "soft-skills",
    title: "Soft Skills",
    Icon: FaUsers,
    iconColor: "text-green-400",
    frontBg: "soft-skills-bg",
    backBg: "bg-green-500/10",
    decor1: "absolute top-1/4 left-1/4 w-80 h-80 bg-green-500/10 blur-3xl",
    decor2: "absolute bottom-20 right-10 w-64 h-64 bg-emerald-400/10 blur-xl",
  },
];

export default function SkillsPage() {
  return (
    <>
      <ParticlesBackground />
      <main className="pt-16 pb-16 bg-primary-dark min-h-screen relative z-10 text-white">
        {/* Header */}
        <header className="text-center mt-6 mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Mes Compétences
            </span>
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Découvrez mon expertise technique et humaine<br />
            à travers ces différents domaines
          </p>
        </header>

        {/* Sections */}
        {sections.map(
          (
            { key, title, Icon, iconColor, frontBg, backBg, decor1, decor2 },
            idx
          ) => {
            const items = skillsMock.filter((s) => {
              if (key === "tools") return s.group === "Design & Outils";
              if (key === "soft-skills") return s.group === "Soft Skills";
              if (key === "mobile") return s.group === "Mobile";
              return s.group.toLowerCase() === key;
            });

            return (
              <section
                key={key}
                id={key}
                // padding haut/bas identique et cohérent pour chaque section :
                className={`py-14 relative overflow-hidden ${idx === 0 ? "mt-0" : "mt-0"
                  }`}
              >
                <div className="container mx-auto px-4 max-w-6xl">
                  <div className="text-center mb-8 flex items-center justify-center gap-3">
                    <Icon className={`text-4xl ${iconColor}`} />
                    <h2 className="section-title text-3xl font-bold text-white">
                      {title}
                    </h2>
                  </div>
                  <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((s) => (
                      <FlipCard
                        key={s.label}
                        icon={s.icon}
                        title={s.label}
                        level={s.level}
                        description={s.description}
                        frontBg={frontBg}
                        backBg={backBg}
                      />
                    ))}
                  </div>
                </div>
                <div className={decor1} />
                <div className={decor2} />
              </section>
            );
          }
        )}

        <BackToTopButton />
        <FloatingNav />
      </main>
    </>
  );
}
