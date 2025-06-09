// components/SkillsSection.tsx

"use client";
import React, { useState } from "react";
import { skillsMock } from "@/mock/index";
import { Card } from "@/components/ui/Card";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { GroupHeader } from "@/components/ui/GroupHeader";

const groups = [
  "Frontend",
  "Backend",
  "Design & Outils",
  "Soft Skills",
];

export default function SkillsSection() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const toggleGroup = (group: string) => {
    setExpanded(prev => ({ ...prev, [group]: !prev[group] }));
  };

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

        {/* Grid des groupes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {groups.map(group => {
            const allSkills = skillsMock.filter(s =>
              group === "Design & Outils" ? s.group === "Outils" : s.group === group
            );
            const isExpanded = expanded[group];
            const displayed = isExpanded ? allSkills : allSkills.slice(0, 3);

            return (
              <Card key={group} className="flex flex-col h-full">
                <GroupHeader title={group} />
                <ul className="space-y-3 flex-1">
                  {displayed.map(skill => (
                    <SkillBadge
                      key={skill.label}
                      icon={skill.icon}
                      label={skill.label}
                      color={skill.color}
                    />
                  ))}
                </ul>
                {allSkills.length > 3 && (
                  <div className="mt-4">
                    <button
                      onClick={() => toggleGroup(group)}
                      className="w-full mt-auto bg-blue-500 text-white font-medium py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
                    >
                      {isExpanded ? "Voir moins" : "Voir plus"}
                    </button>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}