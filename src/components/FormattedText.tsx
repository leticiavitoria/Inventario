import Link from "next/link";

type Token = { tipo: "texto" | "negrito" | "link"; conteudo: string; url?: string };

function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < input.length) {
    if (input[i] === "*" && input[i + 1] === "*") {
      const end = input.indexOf("**", i + 2);
      if (end === -1) { tokens.push({ tipo: "texto", conteudo: input.slice(i) }); break; }
      tokens.push({ tipo: "negrito", conteudo: input.slice(i + 2, end) });
      i = end + 2;
      continue;
    }
    if (input[i] === "[") {
      const close = input.indexOf("]", i + 1);
      if (close !== -1 && input[close + 1] === "(") {
        const urlEnd = input.indexOf(")", close + 2);
        if (urlEnd !== -1) {
          tokens.push({ tipo: "link", conteudo: input.slice(i + 1, close), url: input.slice(close + 2, urlEnd) });
          i = urlEnd + 1;
          continue;
        }
      }
    }
    let j = i + 1;
    while (j < input.length && input[j] !== "*" && input[j] !== "[") j++;
    tokens.push({ tipo: "texto", conteudo: input.slice(i, j) });
    i = j;
  }
  return tokens;
}

export function FormattedText({ text, className }: { text: string; className?: string }) {
  const tokens = tokenize(text);
  return (
    <span className={className}>
      {tokens.map((t, i) => {
        if (t.tipo === "negrito") return <strong key={i}>{t.conteudo}</strong>;
        if (t.tipo === "link") {
          const externo = t.url?.startsWith("http") || t.url?.startsWith("tel:");
          if (externo) {
            return (
              <a key={i} href={t.url} target="_blank" rel="noopener" className="text-blue-700 underline font-semibold">
                🔗 {t.conteudo}
              </a>
            );
          }
          return <Link key={i} href={t.url ?? "#"} className="text-blue-700 underline font-semibold">{t.conteudo}</Link>;
        }
        return <span key={i}>{t.conteudo}</span>;
      })}
    </span>
  );
}
