// components/ui/BackToTopButton.tsx
"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Retour en haut"
            className="
        fixed bottom-8 left-1/2 transform -translate-x-1/2
        z-50 p-3 rounded-full shadow-xl
        bg-gradient-to-r from-blue-500 to-purple-500
        hover:from-blue-600 hover:to-purple-600
        ring-4 text-gray-300 border-gray-400 /30
        transition-all duration-300
      "
        >
            <ChevronUp className="w-6 h-6 text-white" />
        </button>
    );
}
