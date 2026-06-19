"use client";
import { useEffect, useState } from "react";

export function MarcarFeito({ slug, itemId }: { slug: string; itemId: string }) {
  const [checked, setChecked] = useState(false);
  const key = `check_${slug}_${itemId}`;

  useEffect(() => {
    setChecked(localStorage.getItem(key) === "1");
  }, [key]);

  function toggle() {
    const v = !checked;
    setChecked(v);
    if (v) localStorage.setItem(key, "1");
    else localStorage.removeItem(key);
    window.dispatchEvent(new CustomEvent("checks-changed"));
  }

  return (
    <button
      onClick={toggle}
      className={`w-full rounded-lg border-2 px-4 py-3 font-bold text-base ${
        checked ? "bg-green-600 text-white border-green-700" : "bg-white text-gray-800 border-gray-400 hover:border-green-500"
      }`}
    >
      {checked ? "✓ Marcado como feito (toque para desmarcar)" : "☐ Marcar como feito"}
    </button>
  );
}
