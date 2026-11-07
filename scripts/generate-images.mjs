// Regenerates the social preview images and app icons: pnpm images (macOS, needs `sips`).
// Copy is duplicated from src/constants.ts on purpose; keep both in sync when it changes.
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { extname, join } from "node:path";

const ink = "#141613";
const muted = "#5B5D5A";
const electric = "#123CFF";
const tmp = mkdtempSync(join(tmpdir(), "og-"));

// Satori cannot decode WebP, so every source goes through sips as PNG first.
const load = (file) => {
  const png = extname(file) === ".png" ? file : join(tmp, `${file.replaceAll("/", "_")}.png`);
  if (png !== file)
    execFileSync("sips", ["-s", "format", "png", file, "--out", png], { stdio: "ignore" });
  const info = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", png]).toString();
  const [width, height] = [/pixelWidth: (\d+)/, /pixelHeight: (\d+)/].map((r) => +info.match(r)[1]);
  return { uri: `data:image/png;base64,${readFileSync(png).toString("base64")}`, width, height };
};

const fit = (image, maxWidth, maxHeight) => {
  const scale = Math.min(maxWidth / image.width, maxHeight / image.height);
  return { width: Math.round(image.width * scale), height: Math.round(image.height * scale) };
};

const toBuffer = async (tree, width, height) =>
  Buffer.from(await new ImageResponse(tree, { width, height }).arrayBuffer());

const render = async (tree, out) => {
  writeFileSync(out, await toBuffer(tree, 1200, 630));
  console.log(out);
};

const roleMarker = (role) =>
  role === "lead"
    ? h(
        "div",
        { style: { display: "flex", padding: 2, border: `1.5px solid ${ink}` } },
        h("div", { style: { width: 9, height: 9, background: ink } }),
      )
    : h("div", {
        style: {
          width: 12,
          height: 12,
          background: role === "solo" ? ink : "transparent",
          border: role === "team" ? `2px solid ${ink}` : "none",
        },
      });

const roleLabels = { solo: "Solo build", lead: "Lead developer", team: "Team project" };

const shot = (image, box, { shadow = true } = {}) =>
  h("img", {
    src: image.uri,
    ...fit(image, box.width, box.height),
    style: shadow ? { boxShadow: "0 6px 16px rgba(20,22,19,0.12)" } : {},
  });

const caseImage = ({ slug, name, kind, role, visual }) =>
  render(
    h(
      "div",
      {
        style: {
          display: "flex",
          width: 1200,
          height: 630,
          background: "white",
          color: ink,
          padding: 56,
          gap: 48,
          alignItems: "center",
          fontFamily: "sans-serif",
        },
      },
      h(
        "div",
        { style: { display: "flex", flexDirection: "column", width: 466 } },
        h(
          "div",
          { style: { fontSize: 18, color: electric, letterSpacing: 3 } },
          "CASE STUDY · ROBERT GIZELO",
        ),
        h(
          "div",
          {
            style: {
              fontSize: name.length > 16 ? 54 : 80,
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: name.length > 16 ? -2 : -4,
              marginTop: 26,
            },
          },
          name,
        ),
        h(
          "div",
          { style: { display: "flex", flexDirection: "column", marginTop: 22 } },
          ...kind
            .split(" · ")
            .map((line) =>
              h("div", { style: { fontSize: 26, lineHeight: 1.3, color: muted } }, line),
            ),
        ),
        h(
          "div",
          { style: { display: "flex", alignItems: "center", gap: 12, marginTop: 40 } },
          roleMarker(role),
          h(
            "div",
            { style: { fontSize: 17, fontWeight: 600, letterSpacing: 2.5 } },
            roleLabels[role].toUpperCase(),
          ),
        ),
      ),
      h(
        "div",
        {
          style: {
            display: "flex",
            width: 574,
            height: 518,
            background: "#F5F5F5",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          },
        },
        ...visual,
      ),
    ),
    `public/work/${slug}/og.png`,
  );

const well = { width: 518, height: 462 };
const phone = { width: 240, height: 462 };

await caseImage({
  slug: "girex",
  name: "Girex",
  kind: "Stablecoin cards and payments · Web and iOS",
  role: "lead",
  visual: [
    shot(load("src/assets/work/girex/native/02-card-plus-usd.png"), phone, { shadow: false }),
    shot(load("src/assets/work/girex/native/01-home.png"), phone, { shadow: false }),
  ],
});
await caseImage({
  slug: "gimecs",
  name: "Welding Program Designer & WPS",
  kind: "Desktop and web app",
  role: "solo",
  visual: [shot(load("src/assets/work/gimecs/program-execute.jpg"), well)],
});
await caseImage({
  slug: "house-of-smile",
  name: "House of Smile",
  kind: "Dental clinic website",
  role: "solo",
  visual: [shot(load("src/assets/work/house-of-smile/home.webp"), well)],
});
await caseImage({
  slug: "chocolatin-labs",
  name: "Chocolatin Labs",
  kind: "Breeder website with CMS",
  role: "solo",
  visual: [shot(load("src/assets/work/chocolatin-labs/home.webp"), well)],
});

const portrait = load("public/robert-gizelo-portrait-final.jpg");
await render(
  h(
    "div",
    {
      style: {
        display: "flex",
        width: 1200,
        height: 630,
        background: "white",
        color: ink,
        padding: 64,
        alignItems: "center",
        gap: 56,
        fontFamily: "sans-serif",
      },
    },
    h(
      "div",
      { style: { display: "flex", flexDirection: "column", width: 640 } },
      h(
        "div",
        { style: { fontSize: 20, color: electric, letterSpacing: 3, marginBottom: 28 } },
        "ROBERT GIZELO — FULL-STACK DEVELOPER",
      ),
      h(
        "div",
        { style: { fontSize: 92, lineHeight: 0.98, fontWeight: 700, letterSpacing: -5 } },
        "I build apps end to end.",
      ),
      h(
        "div",
        { style: { fontSize: 30, marginTop: 36, fontWeight: 600 } },
        "Web · Mobile · Desktop",
      ),
      h(
        "div",
        { style: { fontSize: 24, marginTop: 12, color: muted } },
        "React · Next.js · TypeScript · Node.js · React Native",
      ),
    ),
    h(
      "div",
      { style: { display: "flex", border: `12px solid ${electric}`, width: 380, height: 380 } },
      h("img", { src: portrait.uri, width: 356, height: 356, style: { objectFit: "cover" } }),
    ),
  ),
  "public/og-image.png",
);

const asterisk = `data:image/svg+xml;base64,${readFileSync("src/app/icon.svg").toString("base64")}`;
const icon = (size, { background, inset }) =>
  toBuffer(
    h(
      "div",
      {
        style: {
          display: "flex",
          width: size,
          height: size,
          alignItems: "center",
          justifyContent: "center",
          background,
        },
      },
      h("img", { src: asterisk, width: size - inset * 2, height: size - inset * 2 }),
    ),
    size,
    size,
  );

writeFileSync("src/app/apple-icon.png", await icon(180, { background: ink, inset: 34 }));
console.log("src/app/apple-icon.png");

// ICO files may embed PNG data directly; every browser that still asks for favicon.ico reads it.
const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map((size) => icon(size, { background: "transparent", inset: 0 })),
);
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((size, index) => {
  const entry = 6 + index * 16;
  header.writeUInt8(size, entry);
  header.writeUInt8(size, entry + 1);
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(pngs[index].length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += pngs[index].length;
});
writeFileSync("src/app/favicon.ico", Buffer.concat([header, ...pngs]));
console.log("src/app/favicon.ico");
