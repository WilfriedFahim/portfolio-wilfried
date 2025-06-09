// components/ui/GroupHeader.tsx

import React from "react";
import { IconType } from "react-icons";
import { FaLaptopCode, FaServer, FaPalette, FaBrain } from "react-icons/fa";

interface GroupHeaderProps {
  title: string;
}

// Configuration des icônes et couleurs de chaque groupe
const groupConfig: Record<string, { icon: IconType; bg: string; text: string }> = {
  Frontend:      { icon: FaLaptopCode, bg: "bg-blue-100", text: "text-blue-600" },
  Backend:       { icon: FaServer,       bg: "bg-purple-100", text: "text-purple-600" },
  "Design & Outils": { icon: FaPalette,      bg: "bg-red-100",    text: "text-red-600" },
  "Soft Skills": { icon: FaBrain,       bg: "bg-green-100",  text: "text-green-600" },
};

export function GroupHeader({ title }: GroupHeaderProps) {
  const config = groupConfig[title];
  const Icon = config.icon;

  return (
    <div className="flex items-center mb-4">
      <div className={`${config.bg} p-3 rounded-full mr-4`}>
        <Icon className={`${config.text} text-xl`} />
      </div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
  );
}