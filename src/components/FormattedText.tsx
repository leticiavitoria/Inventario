export function FormattedText({ text, className }: { text: string; className?: string }) {
  const partes = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span className={className}>
      {partes.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) {
          return <strong key={i}>{p.slice(2, -2)}</strong>;
        }
        return <span key={i}>{p}</span>;
      })}
    </span>
  );
}
