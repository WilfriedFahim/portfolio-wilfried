"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  // Bloquer le scroll du body quand la modale est ouverte
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;
  if (typeof window === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full relative animate-fade-in">
        <button
          className="absolute top-2 right-4 text-gray-400 hover:text-indigo-600 text-lg"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
