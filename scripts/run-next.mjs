import { createServer } from "node:net";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next");

const command = process.argv[2];
const extraArgs = process.argv.slice(3);

if (command !== "dev" && command !== "start") {
  console.error("Usage: node scripts/run-next.mjs <dev|start> [...next args]");
  process.exit(1);
}

function hostnameFrom(args) {
  const flag = args.findIndex((arg) => arg === "--hostname" || arg === "-H");
  if (flag !== -1 && args[flag + 1]) return args[flag + 1];
  const eq = args.find((arg) => arg.startsWith("--hostname="));
  if (eq) return eq.slice("--hostname=".length);
  return "127.0.0.1";
}

function preferredPort(args) {
  const flag = args.findIndex((arg) => arg === "--port" || arg === "-p");
  if (flag !== -1 && args[flag + 1]) return Number(args[flag + 1]);
  const eq = args.find((arg) => arg.startsWith("--port="));
  if (eq) return Number(eq.slice("--port=".length));
  const fromEnv = Number(process.env.PORT);
  return Number.isInteger(fromEnv) && fromEnv > 0 ? fromEnv : 3000;
}

function withoutPort(args) {
  const out = [];
  for (let i = 0; i < args.length; i += 1) {
    if (args[i] === "--port" || args[i] === "-p") {
      i += 1;
      continue;
    }
    if (args[i].startsWith("--port=")) continue;
    out.push(args[i]);
  }
  return out;
}

function portFree(port, host) {
  return new Promise((resolve) => {
    const server = createServer();
    server.unref();
    server.once("error", () => resolve(false));
    server.listen(port, host, () => {
      server.close(() => resolve(true));
    });
  });
}

async function firstFreePort(start, host) {
  for (let port = start; port < start + 50; port += 1) {
    if (await portFree(port, host)) return port;
  }
  throw new Error(`No free port found from ${start} on ${host}`);
}

const host = hostnameFrom(extraArgs);
const startPort = preferredPort(extraArgs);
const port = await firstFreePort(startPort, host);

if (port !== startPort) {
  console.log(`Port ${startPort} is in use, using ${port} instead.`);
}

const child = spawn(
  process.execPath,
  [nextBin, command, "--port", String(port), ...withoutPort(extraArgs)],
  {
    stdio: "inherit",
    env: { ...process.env, PORT: String(port) },
  },
);

const stop = (signal) => {
  if (!child.killed) child.kill(signal);
};

process.on("SIGINT", () => stop("SIGINT"));
process.on("SIGTERM", () => stop("SIGTERM"));

child.on("exit", (code, signal) => {
  if (signal) process.exit(1);
  process.exit(code ?? 1);
});
