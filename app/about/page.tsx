// app/about/page.tsx
"use client";

import React from "react";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import AboutSection from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function AboutPage() {
    return (
        <>
            <ParticlesBackground />
            <main className="pt-24 pb-16 bg-primary-dark min-h-screen relative z-10 text-white">
                <AboutSection />
                <ExperienceSection />
            </main>
        </>
    );
}
