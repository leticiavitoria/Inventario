"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HomeCard({ slug, nome, parentesco }: { slug: string; nome: string; parentesco: string }) {
  const [done, setDone] = useState(0);

  useEffect(() => {
    function count() {
      let c = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(`check_${slug}_`) && localStorage.getItem(k) === "1") c++;
      }
      setDone(c);
    }
    count();
    window.addEventListener("storage", count);
    return () => window.removeEventListener("storage", count);
  }, [slug]);

  return (
    <Link
      href={`/herdeiro/${slug}`}
      className="block rounded-xl border-2 border-gray-300 bg-white p-4 hover:border-blue-600 hover:shadow"
    >
      <p className="font-bold text-sm text-gray-900 leading-tight">{nome}</p>
      <p className="text-xs text-gray-600 mt-0.5">{parentesco}</p>
      {done > 0 && <p className="text-xs text-green-700 font-semibold mt-2">{done} marcado(s)</p>}
    </Link>
  );
}
