// components/ParticlesBackground.tsx
"use client";
import React, { useEffect } from "react";

export function ParticlesBackground() {
  useEffect(() => {
    const cnt = document.getElementById("particles");
    if (!cnt) return;
    const max = window.innerWidth < 768 ? 30 : 80;
    for (let i = 0; i < max; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      const s = Math.random() * 10 + 2;
      p.style.width = p.style.height = `${s}px`;
      p.style.left = `${Math.random() * innerWidth}px`;
      p.style.top = `${Math.random() * innerHeight}px`;
      p.style.backgroundColor = `hsla(${Math.random()*360},80%,70%,${Math.random()*0.6+0.2})`;
      p.style.animationDelay = `${Math.random()*5}s`;
      p.style.animationDuration = `${Math.random()*20+10}s`;
      cnt.appendChild(p);
    }
  }, []);
  return <div id="particles" className="particles" />;
}
