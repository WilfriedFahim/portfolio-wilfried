// components/FlipCard.tsx
"use client";
import React from "react";
import { IconType } from "react-icons";

interface FlipCardProps {
  icon: IconType;
  frontBg: string;
  backBg: string;
  title: string;
  level: number;
  description: string;
}

export function FlipCard({
  icon: Icon,
  frontBg,
  backBg,
  title,
  level,
  description,
}: FlipCardProps) {
  return (
    <div className="flip-card h-64 scale-in">
      <div className="flip-card-inner">
        {/* FACE AVANT */}
        <div
          className={`${frontBg} flip-card-front rounded-xl flex flex-col items-center justify-center p-4`}
        >
          <Icon className="text-5xl mb-4 text-white" />
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden mb-1">
            <div className="h-full bg-white" style={{ width: `${level}%` }} />
          </div>
          <span className="text-sm text-white opacity-80">{level}% maîtrise</span>
        </div>

        {/* FACE ARRIÈRE */}
        <div
          className={`${backBg} flip-card-back rounded-xl flex items-center justify-center p-4`}
        >
          <p className="text-center text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}
 