import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // Handle both local dev and production builds
  const distPath = process.env.NODE_ENV === "production"
    ? path.resolve(__dirname, "public")
    : path.resolve(process.cwd(), "dist", "public");

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
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
