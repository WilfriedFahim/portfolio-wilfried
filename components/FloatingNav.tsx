'use client';

import React from 'react';

export const FloatingNav = () => {
    return (
        <nav className="fixed bottom-8 right-8 z-50">
            <div className="flex flex-col gap-3">
                <a href="#frontend" className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/30 tooltip">
                    <i className="fas fa-code text-white"></i>
                    <span className="tooltip-text bg-blue-600 px-3 py-1 rounded text-xs whitespace-nowrap -translate-x-1/2 left-1/2">Frontend</span>
                </a>
                <a href="#backend" className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/30 tooltip">
                    <i className="fas fa-server text-white"></i>
                    <span className="tooltip-text bg-purple-600 px-3 py-1 rounded text-xs whitespace-nowrap -translate-x-1/2 left-1/2">Backend</span>
                </a>
                <a href="#tools" className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 shadow-lg shadow-yellow-500/30 tooltip">
                    <i className="fas fa-tools text-white"></i>
                    <span className="tooltip-text bg-yellow-600 px-3 py-1 rounded text-xs whitespace-nowrap -translate-x-1/2 left-1/2">Outils</span>
                </a>
                <a href="#soft-skills" className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition-all duration-300 shadow-lg shadow-green-500/30 tooltip">
                    <i className="fas fa-users text-white"></i>
                    <span className="tooltip-text bg-green-600 px-3 py-1 rounded text-xs whitespace-nowrap -translate-x-1/2 left-1/2">Soft Skills</span>
                </a>
            </div>
        </nav>
    );
}; 