// components/ui/SkillBadge.tsx

import React from "react";
import { IconType } from "react-icons";

interface SkillBadgeProps {
  icon: IconType;
  label: string;
  color: string; 
}

export function SkillBadge({ icon: Icon, label, color }: SkillBadgeProps) {
  // On sépare la classe de fond et la classe de texte pour appliquer un fond gris générique
  const [, textColor] = color.split(" ");

  return (
    <li
      className={`flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors duration-200`}
    >
      {/* Icone avec couleur spécifique */}
      <Icon className={`${textColor} mr-2 text-lg`} />
      <span className="font-medium text-gray-900">{label}</span>
    </li>
  );
}