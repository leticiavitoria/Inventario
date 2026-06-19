"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { catalogoDocs } from "@/data/documentos";
import type { StatusDoc } from "@/data/tipos";
import { StatusBadge } from "./StatusBadge";

type Props = {
  slug: string;
  docId: string;
  status: StatusDoc;
  observacao?: string;
};

export function DocItem({ slug, docId, status, observacao }: Props) {
  const doc = catalogoDocs[docId];
  const [checked, setChecked] = useState(false);
  const storageKey = `check_${slug}_${docId}`;

  useEffect(() => {
    setChecked(localStorage.getItem(storageKey) === "1");
  }, [storageKey]);

  function toggle(e: React.MouseEvent | React.ChangeEvent) {
    e.stopPropagation();
    const v = !checked;
    setChecked(v);
    if (v) localStorage.setItem(storageKey, "1");
    else localStorage.removeItem(storageKey);
  }

  if (!doc) return null;

  return (
    <Link
      href={`/herdeiro/${slug}/doc/${docId}`}
      className="block rounded-lg border border-gray-300 bg-white p-3 hover:border-blue-500 hover:shadow-sm transition"
    >
      <div className="flex items-center gap-3">
        <label className="flex shrink-0" onClick={(e) => e.stopPropagation()}>
          <input
            type="checkbox"
            checked={checked}
            onChange={toggle}
            onClick={(e) => e.stopPropagation()}
            aria-label={`Marcar ${doc.nome} como feito`}
            className="h-6 w-6 cursor-pointer accent-green-600"
          />
        </label>
        <div className="flex-1 min-w-0">
          <p className={`font-semibold text-sm ${checked ? "line-through text-gray-500" : "text-gray-900"}`}>
            {doc.nome}
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
