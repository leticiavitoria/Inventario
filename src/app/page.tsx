import { herdeiros } from "@/data/herdeiros";
import { HomeCard } from "@/components/HomeCard";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-lg font-bold text-gray-900 text-center">Toque no seu nome</h1>
      <div className="grid grid-cols-2 gap-3">
        {herdeiros.map((h) => (
          <HomeCard key={h.slug} slug={h.slug} nome={h.nome} parentesco={h.parentesco} />
        ))}
      </div>
    </div>
  );
}
