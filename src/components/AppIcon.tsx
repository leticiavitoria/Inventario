import type { AppIcon } from "@/data/tipos";

const config: Record<AppIcon, { label: string; bg: string; emoji: string; cdn?: string }> = {
  govbr: { label: "Gov.br", bg: "bg-yellow-400 text-blue-900", emoji: "🇧🇷" },
  meuinss: { label: "Meu INSS", bg: "bg-orange-500 text-white", emoji: "🏛️" },
  ctps: { label: "Carteira de Trabalho Digital", bg: "bg-blue-700 text-white", emoji: "💼" },
  googledrive: { label: "Google Drive", bg: "bg-white border border-gray-300", emoji: "", cdn: "https://cdn.simpleicons.org/googledrive" },
  whatsapp: { label: "WhatsApp", bg: "bg-green-500 text-white", emoji: "", cdn: "https://cdn.simpleicons.org/whatsapp/ffffff" },
  youtube: { label: "YouTube", bg: "bg-red-600 text-white", emoji: "", cdn: "https://cdn.simpleicons.org/youtube/ffffff" },
};

export function AppIconBadge({ icon }: { icon: AppIcon }) {
  const c = config[icon];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-semibold ${c.bg}`} title={c.label}>
      {c.cdn ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={c.cdn} alt="" className="h-4 w-4" />
      ) : (
        <span className="text-base leading-none">{c.emoji}</span>
      )}
      <span>{c.label}</span>
    </span>
  );
}
