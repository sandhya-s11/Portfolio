import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

const clientDir = "dist/client";
const assets = readdirSync(join(clientDir, "assets"));

const js = assets.find((f) => f.endsWith(".js") && f.startsWith("index"));
const css = assets.find((f) => f.endsWith(".css"));

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Sandhya — Developer Portfolio</title>
    <meta name="description" content="Personal portfolio of Sandhya — CSBS student, software developer, and AI enthusiast." />
    ${css ? `<link rel="stylesheet" href="/assets/${css}" />` : ""}
  </head>
  <body>
    <div id="root"></div>
    ${js ? `<script type="module" src="/assets/${js}"></script>` : ""}
  </body>
</html>`;

writeFileSync(join(clientDir, "index.html"), html);
console.log("✅ index.html generated in dist/client");
