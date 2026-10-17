// Falla si quedan placeholders o notas de borrador visibles fuera de un Placeholder marcado.
// Uso: npm run build && npm run check:content
import { readFileSync } from "node:fs";

const FILE = ".next/server/app/index.html";
const html = readFileSync(FILE, "utf8");

// Los Placeholder marcados (borde punteado) son lo único que puede contener marcadores.
const stripped = html
  .replace(/<script\b[\s\S]*?<\/script>/g, "")
  .replace(/<(span|div)\b[^>]*border-dashed[^>]*>[\s\S]*?<\/\1>/g, "");

const RULES = [
  [/\bXX\b/, "cifra pendiente (XX)"],
  [/\{\{|%7B%7B/, "token de contacto ({{...}})"],
  [/\[X\]/, "plazo pendiente ([X])"],
  [/BORRADOR/i, "nota de borrador"],
  [/Cliente \d/, "logo de cliente provisorio"],
  [/\u2014/, "raya larga (em dash) en el texto"],
];

let failures = 0;
for (const [regex, label] of RULES) {
  const match = stripped.match(regex);
  if (match) {
    failures += 1;
    const at = match.index ?? 0;
    const context = stripped.slice(Math.max(0, at - 60), at + 80).replace(/\s+/g, " ");
    console.error(`✗ ${label}: ...${context}...`);
  }
}

if (failures) {
  console.error(`\n${failures} tipo(s) de marcador sin resolver. No publicar.`);
  process.exit(1);
}
console.log("✓ Sin placeholders ni borradores fuera de un marcador.");
