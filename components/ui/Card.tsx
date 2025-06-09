// components/ui/Card.tsx

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm ${className}`}>
      {children}
    </div>
  );
}