import type { Metadata } from "next";
import "./globals.css";
import { AccessibilityToggle } from "@/components/AccessibilityToggle";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Inventário Família Martins",
  description: "Documentos para o inventário",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen">
        <Header />
        <main className="mx-auto max-w-3xl px-4 py-4">{children}</main>
        <AccessibilityToggle />
      </body>
    </html>
  );
}
