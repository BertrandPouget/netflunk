"use client";
import { useEffect, useState } from "react";

export default function WatchClient({
  title,
  src,
  label = "Avvia",
  variant = "solid", // "solid" = pieno scuro, "outline" = solo bordo scuro
}: {
  title: string;
  src: string;
  label?: string;
  variant?: "solid" | "outline";
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        className={`btn ${variant === "outline" ? "btnOutline" : "btnSolid"}`}
        onClick={() => setOpen(true)}
      >
        {label}
      </button>

      {open && (
        <div className="modal" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className="modalInner" onClick={(e) => e.stopPropagation()}>
            <div className="playerWrap">
              <iframe
                className="player"
                src={src}
                title={title}
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                loading="lazy"
                referrerPolicy="origin-when-cross-origin"
              />
            </div>
            <div className="modalBar">
              <div><strong>{title}</strong></div>
              <button className="closeBtn" onClick={() => setOpen(false)}>Chiudi</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
