// components/SkillsSection.tsx
"use client";

import React from "react";
import Link from "next/link";
import { skillsMock } from "@/mock/index";
import { Card } from "@/components/ui/Card";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { GroupHeader } from "@/components/ui/GroupHeader";
import { ArrowRight } from "lucide-react";

// Group labels and their corresponding section slugs on /skills
const groups = ["Frontend", "Backend", "Design & Outils", "Soft Skills"];
const slugs: Record<string, string> = {
  Frontend: "frontend",
  Backend: "backend",
  "Design & Outils": "tools",
  "Soft Skills": "soft-skills",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mes Compétences
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un éventail de technologies que je maîtrise pour construire des expériences web exceptionnelles.
          </p>
        </div>

        {/* Groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {groups.map((group) => {
            const items = skillsMock.filter((s) => s.group === group);
            const preview = items.slice(0, 3);
            const slug = slugs[group];

            return (
              <Card key={group} className="flex flex-col h-full">
                <GroupHeader title={group} />
                <ul className="space-y-3 flex-1">
                  {preview.map((skill) => (
                    <SkillBadge
                      key={skill.label}
                      icon={skill.icon}
                      label={skill.label}
                      color={skill.color}
                    />
                  ))}
                </ul>
                <Link
                  href={`/skills#${slug}`}
                  className="mt-4 inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition"
                >
                  Voir toutes <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
