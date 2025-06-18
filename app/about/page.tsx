// app/about/page.tsx
"use client";

import React from "react";
// ParticlesBackground doit être exporté par défaut
import { ParticlesBackground } from "@/components/ParticlesBackground";
// ExperienceSection est un export nommé
import { ExperienceSection } from "@/components/ExperienceSection";
// TimelineWithRecs est un export nommé
import { TimelineWithRecs } from "@/components/TimelineWithRecs";
import Container from '@/components/Container';
import AnimatedAvatar from '@/components/ui/AnimatedAvatar';
import { BackToTopButton } from "@/components/ui/BackToTopButton";

export default function AboutPage() {
  return (
    <>
      {/* Fond animé */}
      <ParticlesBackground />

      <main className="pt-24 pb-16 bg-primary-dark min-h-screen relative z-10 text-white">
        {/* Parcours + Recs – named export */}
        <Container className="py-0" >
          {/* zone image*/}
          <div className="flex-1 flex justify-center items-center mt-8 mb-12 xl:mb-0">
            <AnimatedAvatar />
          </div>

          <header className="text-center mt-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Développeur & Entrepreneur dans l&rsquo;Âme
              </span>
            </h1>
            <p className="text-gray-300 max-w-4xl mx-auto">
              Encore junior en développement, j&rsquo;apporte déjà une expérience forte en entrepreneuriat et vision produit. <br />
              Mon objectif ? Transformer les idées en expériences web impactantes.
            </p>
          </header>


          <section className="mt-16 sm:px-6 lg:px-8">
            <TimelineWithRecs />
          </section>

          {/* Section expériences – named export */}
          <section className="mt-24">
            <ExperienceSection />
          </section>
          <BackToTopButton />
        </Container>
      </main>
    </>
  );
}
