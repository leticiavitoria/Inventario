import type { StatusDoc } from "@/data/tipos";

const config: Record<StatusDoc, { label: string; bg: string; text: string; icon: string }> = {
  ok: { label: "Pronto", bg: "bg-green-100 border-green-600", text: "text-green-900", icon: "✓" },
  falta: { label: "Falta enviar", bg: "bg-red-100 border-red-600", text: "text-red-900", icon: "✗" },
  errado: { label: "Refazer", bg: "bg-amber-100 border-amber-600", text: "text-amber-900", icon: "!" },
  na: { label: "—", bg: "bg-gray-100 border-gray-400", text: "text-gray-700", icon: "—" },
};

export function StatusBadge({ status }: { status: StatusDoc }) {
  const c = config[status];
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-semibold ${c.bg} ${c.text}`}
      role="status"
      aria-label={c.label}
    >
      <span aria-hidden>{c.icon}</span>
      {c.label}
    </span>
  );
}
