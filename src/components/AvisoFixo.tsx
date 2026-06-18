export function AvisoFixo() {
  return (
    <aside
      className="border-y-4 border-red-700 bg-red-50 px-4 py-3 text-base text-red-900"
      role="alert"
      aria-label="Avisos importantes"
    >
      <p className="font-bold text-lg mb-1">⚠️ ATENÇÃO — leia antes de mandar qualquer documento:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li><b>NÃO PODE foto</b> de documento. Tem que ser escaneado (vire um PDF) ou xerox.</li>
        <li><b>Todas as certidões</b> precisam estar no <b>NOVO PADRÃO</b> (com QR code). Antiga não vale.</li>
        <li><b>Comprovante de residência</b> tem que estar <b>no seu nome</b> e ser <b>deste mês</b>.</li>
        <li><b>Contracheques e extratos</b>: os 3 últimos meses, de TODAS as contas e de TODOS os moradores +18 anos.</li>
      </ul>
    </aside>
  );
}
