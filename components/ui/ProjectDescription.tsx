"use client";

import React, { useRef, useEffect, useState } from "react";
import Modal from "./Modal";

export function ProjectDescription({ description, title }: { description: string; title: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [isClamped, setIsClamped] = useState(false);
  const [open, setOpen] = useState(false);

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
          className="absolute right-0 bottom-0 text-indigo-500 underline text-xs px-1 pointer-events-auto"
          tabIndex={0}
          style={{ transform: "translateY(100%)" }}
          onClick={() => setOpen(true)}
        >
          Voir plus
        </button>
      )}

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex justify-end mt-6">
          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
            onClick={() => setOpen(false)}
          >
            Fermer
          </button>
        </div>
      </Modal>
    </div>
  );
}
