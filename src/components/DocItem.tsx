"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { catalogoDocs } from "@/data/documentos";
import type { StatusDoc } from "@/data/tipos";
import { StatusBadge } from "./StatusBadge";

type Props = {
  slug: string;
  itemId: string;
  catalogoId: string;
  nomeOverride?: string;
  status: StatusDoc;
  observacao?: string;
};

export function DocItem({ slug, itemId, catalogoId, nomeOverride, status, observacao }: Props) {
  const doc = catalogoDocs[catalogoId];
  const [checked, setChecked] = useState(false);
  const storageKey = `check_${slug}_${itemId}`;

  useEffect(() => {
    setChecked(localStorage.getItem(storageKey) === "1");
  }, [storageKey]);

  function toggle(e: React.MouseEvent | React.ChangeEvent) {
    e.stopPropagation();
    const v = !checked;
    setChecked(v);
    if (v) localStorage.setItem(storageKey, "1");
    else localStorage.removeItem(storageKey);
    // Disparar evento custom pra outras partes da página recalcularem progresso
    window.dispatchEvent(new CustomEvent("checks-changed"));
  }

  if (!doc) return null;
  const nome = nomeOverride ?? doc.nome;

  return (
    <Link
      href={`/herdeiro/${slug}/doc/${catalogoId}?item=${encodeURIComponent(itemId)}`}
      className="block rounded-lg border border-gray-300 bg-white p-3 hover:border-blue-500 hover:shadow-sm"
    >
      <div className="flex items-center gap-3">
        <label className="flex shrink-0" onClick={(e) => e.stopPropagation()}>
          <input
            type="checkbox"
            checked={checked}
            onChange={toggle}
            onClick={(e) => e.stopPropagation()}
            aria-label={`Marcar ${nome} como feito`}
            className="h-6 w-6 cursor-pointer accent-green-600"
          />
        </label>
        <div className="flex-1 min-w-0">
          <p className={`font-semibold text-sm ${checked ? "line-through text-gray-500" : "text-gray-900"}`}>
            {nome}
          </p>
          {observacao && <p className="text-xs text-amber-800 mt-0.5">⚠️ {observacao}</p>}
          <div className="mt-1">
            <StatusBadge status={status} />
          </div>
        </div>
        <span className="shrink-0 text-2xl text-blue-700" aria-hidden>›</span>
      </div>
      <p className="text-xs text-blue-700 mt-2 font-semibold">Toque para ver como conseguir →</p>
    </Link>
  );
}

export function DocItemPronto({ catalogoId, nomeOverride }: { catalogoId: string; nomeOverride?: string }) {
  const doc = catalogoDocs[catalogoId];
  if (!doc) return null;
  const nome = nomeOverride ?? doc.nome;
  return (
    <div className="rounded-lg border border-green-300 bg-green-50 p-3 flex items-center gap-3">
      <span className="h-6 w-6 rounded bg-green-600 text-white text-center font-bold leading-6 shrink-0">✓</span>
      <p className="text-sm font-semibold text-green-900 line-through flex-1">{nome}</p>
    </div>
  );
}
