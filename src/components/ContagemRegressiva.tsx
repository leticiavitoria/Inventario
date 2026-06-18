"use client";
import { useEffect, useState } from "react";
import { config } from "@/lib/config";

function calcular() {
  const agora = new Date();
  const fim = new Date(config.prazoFinal);
  const diff = fim.getTime() - agora.getTime();
  if (diff <= 0) return { dias: 0, horas: 0, atrasado: true };
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    atrasado: false,
  };
}

export function ContagemRegressiva() {
  const [t, setT] = useState<ReturnType<typeof calcular> | null>(null);
  useEffect(() => {
    setT(calcular());
    const id = setInterval(() => setT(calcular()), 60_000);
    return () => clearInterval(id);
  }, []);
  if (!t) return null;
  const cor = t.atrasado ? "bg-red-700 text-white" : t.dias <= 2 ? "bg-red-100 text-red-900 border-red-700" : "bg-amber-100 text-amber-900 border-amber-700";
  return (
    <div className={`rounded-xl border-4 p-4 text-center ${cor}`}>
      <p className="text-sm font-bold uppercase tracking-wide">Prazo final</p>
      {t.atrasado ? (
        <p className="text-2xl font-extrabold mt-1">PRAZO ENCERRADO — fale com a Letícia!</p>
      ) : (
        <p className="text-3xl font-extrabold mt-1">
          {t.dias} {t.dias === 1 ? "dia" : "dias"} e {t.horas}h
        </p>
      )}
      <p className="text-sm mt-1">Entregue à Letícia (presencialmente ou Uber).</p>
    </div>
  );
}
