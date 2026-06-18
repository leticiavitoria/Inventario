"use client";
import { useEffect, useState } from "react";

const FONT_KEY = "ac_font";
const CONTRAST_KEY = "ac_contrast";

export function AccessibilityToggle() {
  const [font, setFont] = useState(1);
  const [contrast, setContrast] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = parseInt(localStorage.getItem(FONT_KEY) || "1");
    const c = localStorage.getItem(CONTRAST_KEY) === "1";
    setFont(f);
    setContrast(c);
    apply(f, c);
  }, []);

  function apply(f: number, c: boolean) {
    const root = document.documentElement;
    const sizes = ["16px", "20px", "24px"];
    root.style.fontSize = sizes[f] || "16px";
    if (c) root.classList.add("alto-contraste"); else root.classList.remove("alto-contraste");
  }

  function changeFont(f: number) {
    setFont(f);
    localStorage.setItem(FONT_KEY, String(f));
    apply(f, contrast);
  }
  function toggleContrast() {
    const v = !contrast;
    setContrast(v);
    localStorage.setItem(CONTRAST_KEY, v ? "1" : "0");
    apply(font, v);
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir opções de acessibilidade"
        className="fixed bottom-4 right-4 z-50 rounded-full bg-blue-700 px-4 py-3 text-white shadow-2xl text-base font-bold hover:bg-blue-800"
      >
        🔍 Aa
      </button>
      {open && (
        <div className="fixed bottom-20 right-4 z-50 w-72 rounded-xl border-2 border-blue-700 bg-white p-4 shadow-2xl text-gray-900">
          <p className="font-bold mb-2">Tamanho da letra</p>
          <div className="flex gap-2 mb-4">
            <button onClick={() => changeFont(0)} className={`flex-1 rounded border-2 py-2 ${font === 0 ? "border-blue-700 bg-blue-50" : "border-gray-300"}`}>A</button>
            <button onClick={() => changeFont(1)} className={`flex-1 rounded border-2 py-2 text-lg ${font === 1 ? "border-blue-700 bg-blue-50" : "border-gray-300"}`}>A</button>
            <button onClick={() => changeFont(2)} className={`flex-1 rounded border-2 py-2 text-2xl ${font === 2 ? "border-blue-700 bg-blue-50" : "border-gray-300"}`}>A</button>
          </div>
          <button onClick={toggleContrast} className="w-full rounded border-2 border-gray-700 py-2 font-bold">
            {contrast ? "Desligar alto contraste" : "Ligar alto contraste"}
          </button>
        </div>
      )}
    </>
  );
}
