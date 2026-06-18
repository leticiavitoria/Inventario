import type { Metadata } from "next";
import "./globals.css";
import { AccessibilityToggle } from "@/components/AccessibilityToggle";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Inventário Família Martins",
  description: "Documentos para o inventário — passo a passo simples",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen">
        <Header />
        <main className="mx-auto max-w-3xl px-4 py-6">{children}</main>
        <AccessibilityToggle />
        <footer className="mt-12 border-t-2 border-gray-300 bg-white py-6 text-center text-sm text-gray-600">
          <p>Dúvidas? Fale com a Letícia pelo WhatsApp.</p>
          <p className="mt-1">Feito com 💙 para a Família Martins · Ibirité-MG</p>
        </footer>
      </body>
    </html>
  );
}
