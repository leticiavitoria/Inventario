import Link from "next/link";
import { herdeiros, resumoStatus } from "@/data/herdeiros";
import { AvisoFixo } from "@/components/AvisoFixo";
import { ContagemRegressiva } from "@/components/ContagemRegressiva";

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-blue-900">Inventário da Família</h1>
        <p className="text-lg text-gray-700">
          Olá! Esta página vai te ajudar a juntar TODOS os documentos que faltam pro inventário. É super importante terminar dentro do prazo.
        </p>
      </section>

      <ContagemRegressiva />
      <AvisoFixo />

      <section className="rounded-xl bg-white border-2 border-gray-300 p-4">
        <h2 className="text-xl font-bold mb-3">Quem é você? Clique no seu nome:</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {herdeiros.map((h) => {
            const r = resumoStatus(h);
            const cor = r.pct === 100 ? "border-green-600 bg-green-50" : r.pct >= 50 ? "border-amber-500 bg-amber-50" : "border-red-500 bg-red-50";
            return (
              <li key={h.slug}>
                <Link
                  href={`/herdeiro/${h.slug}`}
                  className={`block rounded-xl border-2 p-4 hover:shadow-md ${cor}`}
                >
                  <p className="text-lg font-bold">{h.nome}</p>
                  <p className="text-sm text-gray-700">{h.parentesco}</p>
                  <p className="text-sm font-semibold mt-1">
                    {r.ok}/{r.total} documentos prontos · {r.pct}%
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="rounded-xl bg-blue-50 border-2 border-blue-700 p-4">
        <h2 className="text-xl font-bold mb-2 text-blue-900">📚 Precisa de ajuda?</h2>
        <ul className="space-y-2">
          <li><Link href="/quiz-renda" className="text-blue-800 underline font-semibold">→ Quais documentos de renda eu preciso?</Link></li>
          <li><Link href="/tutoriais/ctps-digital" className="text-blue-800 underline font-semibold">→ Como pegar a Carteira de Trabalho Digital</Link></li>
          <li><Link href="/tutoriais/certidoes" className="text-blue-800 underline font-semibold">→ Como pegar certidões atualizadas</Link></li>
          <li><Link href="/tutoriais/escanear" className="text-blue-800 underline font-semibold">→ Como escanear documentos pelo celular</Link></li>
          <li><Link href="/tutoriais/meu-inss" className="text-blue-800 underline font-semibold">→ Como tirar extrato do INSS</Link></li>
          <li><Link href="/declaracoes" className="text-blue-800 underline font-semibold">→ Baixar declarações para preencher</Link></li>
        </ul>
      </section>

      <section className="rounded-xl border-2 border-gray-400 bg-white p-4 text-sm text-gray-700">
        <p className="font-bold mb-1">Sobre o Marcelo:</p>
        <p>
          O Marcelo NÃO entra na lista — só precisamos do endereço do presídio para anexar ao processo. Letícia já cuida disso.
        </p>
      </section>
    </div>
  );
}
