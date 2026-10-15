import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const WIDTHS = [360, 390, 768, 1024, 1280, 1440, 1920, 2560];
const ANCHORS = ["#nosotros", "#que-hacemos", "#industrias", "#proyectos", "#contacto"];

test.describe("desktop", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test("los links del header llevan a su sección", async ({ page }) => {
    await page.goto("/");
    for (const href of ANCHORS) {
      await page.locator(`header nav a[href="${href}"]`).click();
      await expect(page.locator(href)).toBeInViewport({ timeout: 5000 });
    }
  });

  test("todas las anclas internas existen", async ({ page }) => {
    await page.goto("/");
    const hrefs = await page.$$eval('a[href^="#"]', (as) =>
      [...new Set(as.map((a) => a.getAttribute("href") as string))],
    );
    for (const href of hrefs) {
      expect(await page.locator(href).count(), href).toBeGreaterThan(0);
    }
  });

  test("el botón de WhatsApp queda visible al hacer scroll", async ({ page }) => {
    await page.goto("/");
    const wa = page.getByRole("link", { name: "Escribir por WhatsApp" });
    await expect(wa).toHaveAttribute("href", /^https:\/\/wa\.me\//);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await expect(wa).toBeInViewport();
  });

  test("el header cambia de estado al pasar el hero", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header").first();
    await expect(header).toHaveClass(/bg-transparent/);
    await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.2));
    await expect(header).toHaveClass(/bg-white/);
  });

  test("formulario: valida y muestra el éxito", async ({ page }) => {
    await page.goto("/#contacto");
    const form = page.locator("form");
    // vacío: la validación nativa lo frena
    await form.getByRole("button", { name: "Enviar consulta" }).click();
    await expect(page.getByText("Recibimos tu consulta.")).toHaveCount(0);
    // solo nombre, empresa y motivo: pide mail o teléfono
    await form.getByLabel(/^Nombre/).fill("Ana");
    await form.getByLabel(/^Empresa/).fill("ACME");
    await form.getByLabel(/^Motivo/).fill("Necesito un presupuesto");
    await form.getByRole("button", { name: "Enviar consulta" }).click();
    await expect(form.getByRole("alert")).toContainText("Indicá un mail o un teléfono");
    // con mail: éxito
    await form.getByLabel(/^Mail/).fill("ana@acme.com");
    await form.getByRole("button", { name: "Enviar consulta" }).click();
    await expect(page.getByText("Recibimos tu consulta.")).toBeVisible();
  });

  test("accesibilidad: sin violaciones críticas", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => document.documentElement.removeAttribute("data-reveal-ready"));
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((v) => v.impact === "critical");
    expect(serious.map((v) => `${v.id}: ${v.help}`)).toEqual([]);
  });
});

test.describe("mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("menú móvil: abre, navega y cierra con Escape", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Menú" });
    await toggle.click();
    await expect(page.getByRole("button", { name: "Cerrar" })).toHaveAttribute("aria-expanded", "true");
    await page.getByRole("button", { name: "Cerrar" }).press("Escape");
    await expect(page.getByRole("button", { name: "Menú" })).toHaveAttribute("aria-expanded", "false");
    await page.getByRole("button", { name: "Menú" }).click();
    await page.locator("#menu-movil").getByRole("link", { name: "Proyectos" }).click();
    await expect(page.locator("#proyectos")).toBeInViewport({ timeout: 5000 });
    await expect(page.getByRole("button", { name: "Menú" })).toBeVisible();
  });

  test("los dos CTAs del hero se ven sin scroll", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Contactar" }).first()).toBeInViewport();
    await expect(page.getByRole("link", { name: /Ver proyectos/ }).first()).toBeInViewport();
  });
});

for (const width of WIDTHS) {
  test(`sin scroll horizontal en ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });
}
