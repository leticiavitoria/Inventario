"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HomeCard({ slug, nome, parentesco, totalDocs }: { slug: string; nome: string; parentesco: string; totalDocs: number }) {
  const [done, setDone] = useState(0);

  useEffect(() => {
    let c = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(`check_${slug}_`) && localStorage.getItem(k) === "1") c++;
    }
    setDone(c);
  }, [slug]);

  const pct = totalDocs > 0 ? Math.round((done / totalDocs) * 100) : 0;

  return (
    <Link
      href={`/herdeiro/${slug}`}
      className="block rounded-xl border-2 border-gray-300 bg-white p-4 hover:border-blue-600 hover:shadow active:scale-95 transition"
    >
      <p className="font-bold text-base text-gray-900">{nome}</p>
      <p className="text-xs text-gray-600 mt-0.5">{parentesco}</p>
      <div className="mt-2">
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div className="bg-green-500 h-full transition-all" style={{ width: `${pct}%` }} />
        </div>
        <p className="text-xs text-gray-600 mt-1">{done}/{totalDocs}</p>
      </div>
    </Link>
  );
}
