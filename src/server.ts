import express from "express";
import http2 from "http2";
import { readFileSync } from "fs";
import http2Express from "http2-express-bridge";
import morgan from "morgan";
import { useRoutes } from "./routes";

const app = http2Express(express);

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello, HTTP/2 with TypeScript!");
});

useRoutes(app);

const httpsOptions = {
  key: readFileSync("localhost-privkey.pem"),
  cert: readFileSync("localhost-cert.pem"),
};

const server = http2.createSecureServer(httpsOptions, app as any);

server.listen(3000, () => {
  console.log("Server running on https://localhost:3000.");
});
