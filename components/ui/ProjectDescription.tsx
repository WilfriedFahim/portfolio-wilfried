/// component/ui/ProjectDescription.tsx

"use client";

import React, { useRef, useEffect, useState } from "react";

export function ProjectDescription({ description }: { description: string }) {
    const ref = useRef<HTMLParagraphElement>(null);
    const [isClamped, setIsClamped] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        setIsClamped(el.scrollHeight > el.clientHeight);
    }, [description]);

    return (
        <div className="relative mb-11">
            <p
                ref={ref}
                className="text-gray-600 mb-0 text-sm text-justify line-clamp-3"
            >
                {description}
            </p>
            {isClamped && (
                <button
                    className="absolute
                        right-0
                        bottom-0
                        text-indigo-500
                        underline
                        text-xs
                        px-1
                        pointer-events-auto"
                    tabIndex={0}
                    style={{ transform: "translateY(100%)" }}
                >
                    Voir plus
                </button>
            )}
        </div>
    );
}
