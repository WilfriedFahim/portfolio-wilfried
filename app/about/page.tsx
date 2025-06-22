// app/about/page.tsx
"use client";

import React from "react";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TimelineWithRecs } from "@/components/TimelineWithRecs";
import Container from '@/components/Container';
import AnimatedAvatar from '@/components/ui/AnimatedAvatar';
import { BackToTopButton } from "@/components/ui/BackToTopButton";

export default function AboutPage() {
  return (
    <>
      {/* Fond animé */}
      <ParticlesBackground />

      <main className="pt-16 pb-16 bg-primary-dark min-h-screen relative z-10 text-white">
        <Container className="py-0">
          {/* zone image */}
          <div className="flex-1 flex justify-center items-center mt-2 mb-16">
            <AnimatedAvatar />
          </div>

          <header className="text-center mt-0 mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Développeur & Entrepreneur dans l&rsquo;Âme
              </span>
            </h1>
            {/* Trait bleu sous le titre */}
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-7 rounded"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Encore junior en développement, j&rsquo;apporte déjà une expérience forte en entrepreneuriat et vision produit.
              Mon objectif ? Transformer les idées en expériences web impactantes.
            </p>
          </header>

          {/* Parcours & recommandations */}
          <section className="mt-16 sm:px-6 lg:px-8">
            <TimelineWithRecs />
          </section>

          {/* Section expériences */}
          <section className="mt-24">
            <ExperienceSection />
          </section>
          <BackToTopButton />
        </Container>
      </main>
    </>
  );
}
