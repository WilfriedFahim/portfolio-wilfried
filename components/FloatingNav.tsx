// components/FloatingNav.tsx
"use client";

import React from "react";
import Link from "next/link";
import {
    Code,
    Server,
    Wrench,
    Smartphone,
    Users
} from "lucide-react";

const navItems = [
    { href: "#frontend", label: "Frontend", Icon: Code, bg: "bg-blue-600", hover: "hover:bg-blue-500", shadow: "shadow-blue-500/30" },
    { href: "#backend", label: "Backend", Icon: Server, bg: "bg-purple-600", hover: "hover:bg-purple-500", shadow: "shadow-purple-500/30" },
    { href: "#tools", label: "Outils", Icon: Wrench, bg: "bg-yellow-600", hover: "hover:bg-yellow-500", shadow: "shadow-yellow-500/30" },
    { href: "#mobile", label: "Mobile", Icon: Smartphone, bg: "bg-green-600", hover: "hover:bg-green-500", shadow: "shadow-green-500/30" },
    { href: "#soft-skills", label: "Soft Skills", Icon: Users, bg: "bg-teal-600", hover: "hover:bg-teal-500", shadow: "shadow-teal-500/30" },
];

export const FloatingNav = () => {
    return (
        <nav className="fixed bottom-8 right-8 z-50">
            <div className="flex flex-col gap-3">
                {navItems.map(({ href, label, Icon, bg, hover, shadow }) => (
                    <Link
                        key={href}
                        href={href}
                        scroll={false}
                        aria-label={label}
                        className={`relative group flex items-center justify-center w-12 h-12 rounded-full ${bg} ${hover} transition-all duration-300 shadow-lg ${shadow}`}
                    >
                        <Icon className="w-6 h-6 text-white" />
                        <span className="invisible group-hover:visible absolute bottom-full mb-2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white">
                            {label}
                        </span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};
