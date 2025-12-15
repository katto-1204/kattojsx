import express, { type Express } from "express";
import fs from "fs";
import path from "path";

declare const __dirname: string;

export function serveStatic(app: Express) {
  // In the bundled CommonJS file, __dirname is available and points to dist/
  // So public folder will be at dist/public
  const distPath = path.join(__dirname, "public");

  console.log(`[Static] Serving from: ${distPath}`);
  console.log(`[Static] Directory exists: ${fs.existsSync(distPath)}`);
  
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Serve static files with proper cache headers
  app.use(express.static(distPath, {
    maxAge: "1d",
    etag: false,
  }));

  // Serve index.html for all other routes (SPA routing)
  app.use("*", (_req, res) => {
    res.type("text/html");
    res.sendFile(path.join(distPath, "index.html"));
  });
}
