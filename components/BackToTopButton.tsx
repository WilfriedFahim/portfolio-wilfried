'use client';

import React from 'react';

export const BackToTopButton = () => {
    return (
        <button
            id="backToTop"
            className="fixed bottom-8 left-8 w-12 h-12 rounded-full bg-gray-700/70 hover:bg-gray-600 flex items-center justify-center transition-opacity duration-300 opacity-0 z-50 shadow-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <i className="fas fa-arrow-up text-white" />
        </button>
    );
}; 