// Convierte a WebP los recursos del cliente y los deja en public/images.
// Uso (desde la raíz del repo):
//   npm run images                       usa ../../Docs/Docs cliente como origen
//   npm run images -- --src "<carpeta>"  origen distinto
//   npm run images -- --only proyectos/  solo los destinos que empiecen con ese texto
//   npm run images -- --dry              muestra qué haría, sin escribir
// Requiere `sharp`, que ya viene con Next. Cada imagen baja la calidad hasta entrar en su tope de peso.
import { mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};
const SRC = resolve(arg("src", "../../Docs/Docs cliente"));
const ONLY = arg("only", "");
const DRY = args.includes("--dry");
const OUT = resolve("public/images");
const REPO = resolve(".");

const P = "SERVICIOS/PROYECTOS";
const IZAJE = `${P}/INGENIERIA/DISPOSITIVO DE IZAJE ADAPTATIVO 15TON`;
const SKID = `${P}/INGENIERIA/SKID SEPARADOR DE CONTROL MINIMO`;
const T30400 = `${P}/INGENIERIA/TRAMPA DE SCRAPPER 30400 36X32 FUTURA-CONTRERAS-SESA`;
const PECOM = `${P}/INGENIERIA/TRAMPAS DE SCRAPPER LANZADORA + RECEPTORA - FUTURA PECOM`;
const OFFSHORE = `${P}/GESTION DE PROYECTOS/PROYECTO EJECUTIVO Y DIRECCION DE MONTAJE - VENTILACION PLATAFORMA OFFSHORE`;
const HRSG = `${P}/GESTION DE PROYECTOS/PROYECTO EJECUTIVO Y DIRECCIÓN DE OBRA - REACONDICIONAMIENTO HRSG 8 CENTRAL COSTANERA`;
const INTERCAMBIADOR = `${P}/INGENIERIA/INTERCAMBIADOR DE CALOR - ENFIRADOR DE ACEITE`;
const FAB = "SERVICIOS/SERVICIOS/FABRICACION, MONTAJES MANTENIMIENTI";
const STOCK = "SERVICIOS/IMAGENES STOCK";

// to: destino dentro de public/images · width: ancho máximo · maxKB: tope de peso
// from: ruta dentro del origen · fromRepo: ruta dentro del repo (para reoptimizar una imagen ya cargada)
// trim: recorta bordes lisos (por ejemplo, las barras negras de una captura de pantalla)
const job = (to, from, width = 1600, maxKB = 260, trim = false) => ({ to, from, width, maxKB, trim });
const MANIFEST = [
  // Ingeniería · percha de izaje (2 renders y 3 imágenes de análisis)
  job("proyectos/percha-izaje/01.webp", `${IZAJE}/PERCHA - ISO1.png`),
  job("proyectos/percha-izaje/02.webp", `${IZAJE}/PERCHA - ISO2.png`),
  job("proyectos/percha-izaje/03.webp", `${IZAJE}/fem vm.png`),
  job("proyectos/percha-izaje/04.webp", `${IZAJE}/malla 2.png`),
  job("proyectos/percha-izaje/05.webp", `${IZAJE}/ures.png`),
  // Ingeniería · skid SK307
  job("proyectos/skid-separador-sk307/01.webp", `${SKID}/SK307CO - ISO1.png`),
  job("proyectos/skid-separador-sk307/02.webp", `${SKID}/SK307CO - ISO2.png`),
  job("proyectos/skid-separador-sk307/03.webp", `${SKID}/SK307CO - FRONTAL1.png`),
  job("proyectos/skid-separador-sk307/04.webp", `${SKID}/SK307CO - LATERAL1.png`),
  // Ingeniería · trampas de scraper 20x24, 24x26 y 30x32
  job("proyectos/trampas-scraper-30400/01.webp", `${T30400}/30400 - ISO 1.png`),
  job("proyectos/trampas-scraper-30400/02.webp", `${T30400}/30400 - ISO 2.png`),
  job("proyectos/trampas-scraper-30400/03.webp", `${T30400}/30400 - FRONTAL 1.png`),
  job("proyectos/trampas-scraper-30400/04.webp", `${T30400}/30400 - LATERAL 1.png`),
  // Ingeniería · trampas de scraper 16x12
  job("proyectos/trampas-scraper-pecom/01.webp", `${PECOM}/ST01301A - ISO1.png`),
  job("proyectos/trampas-scraper-pecom/02.webp", `${PECOM}/ST01301A - ISO2.png`),
  job("proyectos/trampas-scraper-pecom/03.webp", `${PECOM}/ST01301A - FRENTE1.png`),
  job("proyectos/trampas-scraper-pecom/04.webp", `${PECOM}/ST01301A - LATERAL1.png`),
  // Ingeniería · intercambiadores de calor, enfriadores de aceite
  job("proyectos/intercambiador-enfriador-aceite/01.webp", `${INTERCAMBIADOR}/EA442ABCD - ISO1.png`),
  job("proyectos/intercambiador-enfriador-aceite/02.webp", `${INTERCAMBIADOR}/int 3.png`),
  job("proyectos/intercambiador-enfriador-aceite/03.webp", `${INTERCAMBIADOR}/INT2.png`),
  job("proyectos/intercambiador-enfriador-aceite/04.webp", `${INTERCAMBIADOR}/INT1.png`),
  // Obras · plataforma offshore AM-6. De la 03 en adelante son de baja resolución (decisión: usarlas igual)
  job("proyectos/ventilacion-plataforma-am6/01.webp", `${OFFSHORE}/IMG_20250413_193027.jpg`),
  job("proyectos/ventilacion-plataforma-am6/02.webp", `${OFFSHORE}/IMG_20250419_110841.jpg`),
  job("proyectos/ventilacion-plataforma-am6/03.webp", `${OFFSHORE}/IMG_20250411_171415_1.jpg`),
  job("proyectos/ventilacion-plataforma-am6/04.webp", `${OFFSHORE}/IMG_20250407_173814.jpg`),
  job("proyectos/ventilacion-plataforma-am6/05.webp", `${OFFSHORE}/IMG_20250325_123941.jpg`),
  job("proyectos/ventilacion-plataforma-am6/06.webp", `${OFFSHORE}/PANO_20250407_122523.jpg`),
  job("proyectos/ventilacion-plataforma-am6/07.webp", `${OFFSHORE}/Screenshot_2025-04-06-20-06-40-945_com.miui.gallery.jpg`, 1600, 260, true),
  // Obras · HRSG 8. La 05 y la 06 son de baja resolución (decisión: usarlas igual)
  job("proyectos/reacondicionamiento-hrsg8/01.webp", `${HRSG}/IMG_20250512_153353.jpg`),
  job("proyectos/reacondicionamiento-hrsg8/02.webp", `${HRSG}/IMG_20250513_105729.jpg`),
  job("proyectos/reacondicionamiento-hrsg8/03.webp", `${HRSG}/IMG_20250513_105015.jpg`),
  job("proyectos/reacondicionamiento-hrsg8/04.webp", `${HRSG}/IMG_20250427_164659.jpg`),
  job("proyectos/reacondicionamiento-hrsg8/05.webp", `${HRSG}/IMG_20250505_151729.jpg`),
  job("proyectos/reacondicionamiento-hrsg8/06.webp", `${HRSG}/images.jfif`),
  // Fabricación y montaje · 18 imágenes de la carpeta nueva (varias de baja resolución y origen por confirmar)
  job("fabricacion/01.webp", `${FAB}/fabricacion_de_escaleras_metalicas-scaled.jpg`),
  job("fabricacion/02.webp", `${FAB}/gas-processing-plant-sm.jpg`),
  job("fabricacion/03.webp", `${FAB}/20180910_104959-e1560174735422.jpg`),
  job("fabricacion/04.webp", `${FAB}/pasarelas-estructuras-metalicas-taesmet-02.jpg`),
  job("fabricacion/05.webp", `${FAB}/38969.jpg`),
  job("fabricacion/06.webp", `${FAB}/piping-spool-fabrication.png`),
  job("fabricacion/07.webp", `${FAB}/images.jfif`),
  job("fabricacion/08.webp", `${FAB}/1_Distribucion.jpg`),
  job("fabricacion/09.webp", `${FAB}/images (1).jfif`),
  job("fabricacion/10.webp", `${FAB}/Reforma-de-una-caldera-acuotubular-de-biomasa-5.jpeg`),
  job("fabricacion/11.webp", `${FAB}/97qlbtwgyvfc1.jpg`, 1200, 260),
  job("fabricacion/12.webp", `${FAB}/boiler-tube-butt-welding-1024x538.webp`),
  job("fabricacion/13.webp", `${FAB}/Repairs-and-Mordenisation-1.jpg`),
  job("fabricacion/14.webp", `${FAB}/acuatubulares-q4h4575hrg867m06zfnwti53izsre91364avema4rk.jpg`),
  job("fabricacion/15.webp", `${FAB}/Captura de pantalla 2026-10-28 221913.jpg`),
  job("fabricacion/16.webp", `${FAB}/Captura de pantalla 2026-10-28 221954.jpg`),
  job("fabricacion/17.webp", `${FAB}/Captura de pantalla 2026-10-28 222008.jpg`),
  job("fabricacion/18.webp", `${FAB}/Captura de pantalla 2026-10-28 222030.jpg`),
  // Industrias · fotos de stock del cliente elegidas
  job("industrias/oil-and-gas.webp", `${STOCK}/OIL AND GAS/arvind-vallabh-kjk90_OSGZU-unsplash.jpg`, 2000, 300),
  job("industrias/energia.webp", `${STOCK}/GENERACION ENERGIA/adigun-ampa-9U0vAXekzgU-unsplash.jpg`, 2000, 300),
];

const kb = (n) => `${Math.round(n / 1024)} KB`;
let failed = 0;

for (const item of MANIFEST) {
  if (ONLY && !item.to.startsWith(ONLY)) continue;
  const input = item.fromRepo ? join(REPO, item.fromRepo) : join(SRC, item.from);
  const output = join(OUT, item.to);
  try {
    statSync(input);
  } catch {
    console.error(`✗ falta el origen: ${input}`);
    failed += 1;
    continue;
  }
  if (DRY) {
    console.log(`· ${item.to}  ←  ${input}`);
    continue;
  }
  mkdirSync(dirname(output), { recursive: true });
  let buffer = null;
  let quality = 82;
  for (; quality >= 55; quality -= 4) {
    let pipeline = sharp(input, { limitInputPixels: false }).rotate();
    if (item.trim) pipeline = pipeline.trim({ threshold: 12 });
    buffer = await pipeline
      .resize({ width: item.width, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toBuffer();
    if (buffer.length <= item.maxKB * 1024) break;
  }
  const meta = await sharp(buffer).metadata();
  await sharp(buffer).toFile(output);
  const ok = buffer.length <= item.maxKB * 1024;
  if (!ok) failed += 1;
  console.log(
    `${ok ? "✓" : "✗"} ${item.to}  ${meta.width}x${meta.height}  ${kb(buffer.length)} (tope ${item.maxKB} KB, calidad ${quality + (ok ? 0 : 4)})`,
  );
}

if (failed) {
  console.error(`\n${failed} imagen(es) con problemas.`);
  process.exit(1);
}
console.log("\nListo.");
