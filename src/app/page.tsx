import { herdeiros, gerarDocumentos } from "@/data/herdeiros";
import { HomeCard } from "@/components/HomeCard";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-gray-900 text-center">
        Toque no seu nome
      </h1>
      <div className="grid grid-cols-2 gap-3">
        {herdeiros.map((h) => {
          const docs = gerarDocumentos(h, h.perfilDefault);
          return (
            <HomeCard
              key={h.slug}
              slug={h.slug}
              nome={h.nome}
              parentesco={h.parentesco}
              totalDocs={docs.length}
            />
          );
        })}
      </div>
    </div>
  );
}
