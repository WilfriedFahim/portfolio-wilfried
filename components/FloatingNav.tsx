// components/FloatingNav.tsx
"use client";

import React from "react";
import {
    Code,
    Server,
    Wrench,
    Smartphone,
    Users
} from "lucide-react";

const navItems = [
    { id: "frontend", label: "Frontend", Icon: Code, bg: "bg-blue-600", hover: "hover:bg-blue-500", shadow: "shadow-blue-500/30" },
    { id: "backend", label: "Backend", Icon: Server, bg: "bg-purple-600", hover: "hover:bg-purple-500", shadow: "shadow-purple-500/30" },
    { id: "tools", label: "Outils", Icon: Wrench, bg: "bg-yellow-600", hover: "hover:bg-yellow-500", shadow: "shadow-yellow-500/30" },
    { id: "mobile", label: "Mobile", Icon: Smartphone, bg: "bg-green-600", hover: "hover:bg-green-500", shadow: "shadow-green-500/30" },
    { id: "soft-skills", label: "Soft Skills", Icon: Users, bg: "bg-teal-600", hover: "hover:bg-teal-500", shadow: "shadow-teal-500/30" },
];

export const FloatingNav = () => {
    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <nav className="fixed bottom-8 right-8 z-50">
            <div className="flex flex-col gap-3">
                {navItems.map(({ id, label, Icon, bg, hover, shadow }) => (
                    <button
                        key={id}
                        onClick={() => handleClick(id)}
                        aria-label={label}
                        className={`relative group flex items-center justify-center w-12 h-12 rounded-full ${bg} ${hover} transition-all duration-300 shadow-lg ${shadow}`}
                    >
                        <Icon className="w-6 h-6 text-white" />
                        <span className="invisible group-hover:visible absolute bottom-full mb-2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white">
                            {label}
                        </span>
                    </button>
                ))}
            </div>
        </nav>
    );
};
