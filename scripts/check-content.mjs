// Falla si quedan placeholders o notas de borrador visibles fuera de un Placeholder marcado.
// Uso: npm run build && npm run check:content
import { existsSync, readFileSync } from "node:fs";

const FILE = ".next/server/app/index.html";
const html = readFileSync(FILE, "utf8");

// Los Placeholder marcados (borde punteado) son lo único que puede contener marcadores.
const stripped = html
  .replace(/<script\b[\s\S]*?<\/script>/g, "")
  .replace(/<(span|div)\b[^>]*border-dashed[^>]*>[\s\S]*?<\/\1>/g, "");

// Vista de solo texto visible (sin head, sin tags): sirve para revisar la marca.
// Los "SURIEL" en negrita (<strong>) son los correctos y se quitan antes de buscar el resto.
const text = stripped
  .replace(/<head\b[\s\S]*?<\/head>/, "")
  .replace(/<strong\b[^>]*>SURIEL<\/strong>/g, "")
  .replace(/<[^>]+>/g, " ");

const RULES = [
  [/\bXX\b/, "cifra pendiente (XX)"],
  [/\{\{|%7B%7B/, "token de contacto ({{...}})"],
  [/\[X\]/, "plazo pendiente ([X])"],
  [/BORRADOR/i, "nota de borrador"],
  [/Cliente \d/, "logo de cliente provisorio"],
  [/\u2014/, "raya larga (em dash) en el texto"],
  [/\bSuriel\b|\bsuriel\b/, 'marca mal escrita: va "SURIEL"', text],
  [/\bSURIEL\b/, 'SURIEL sin negrita: usar el componente "Brand"', text],
];

let failures = 0;
for (const [regex, label, haystack = stripped] of RULES) {
  const match = haystack.match(regex);
  if (match) {
    failures += 1;
    const at = match.index ?? 0;
    const context = haystack.slice(Math.max(0, at - 60), at + 80).replace(/\s+/g, " ");
    console.error(`✗ ${label}: ...${context}...`);
  }
}

// Toda imagen o logo que la página pide tiene que existir en public/ (evita fotos rotas).
const refs = new Set([...html.matchAll(/(?:src|href)="(\/(?:images|logos)\/[^"?#]+)"/g)].map((m) => m[1]));
for (const ref of refs) {
  if (!existsSync(`public${decodeURI(ref)}`)) {
    failures += 1;
    console.error(`✗ imagen que no existe en public/: ${ref}`);
  }
}

if (failures) {
  console.error(`\n${failures} tipo(s) de marcador sin resolver. No publicar.`);
  process.exit(1);
}
console.log("✓ Sin placeholders ni borradores fuera de un marcador.");
