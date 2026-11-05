// One-time helper: prints a Spotify refresh token for the now-playing widget.
// Usage: stop the dev server (it uses port 3000), then run `node scripts/spotify-auth.mjs`.
import http from "node:http";
import { readFileSync } from "node:fs";

const env = Object.fromEntries(
  readFileSync(".env.local", "utf8")
    .split(/\r?\n/)
    .filter((l) => l.includes("=") && !l.startsWith("#"))
    .map((l) => [l.slice(0, l.indexOf("=")).trim(), l.slice(l.indexOf("=") + 1).trim()]),
);

const id = env.SPOTIFY_CLIENT_ID;
const secret = env.SPOTIFY_CLIENT_SECRET;
if (!id || !secret || secret.startsWith("paste")) {
  console.error("Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in .env.local first.");
  process.exit(1);
}

const redirect = "http://127.0.0.1:3000/callback";
const scope = "user-read-currently-playing user-read-recently-played";
const authUrl =
  "https://accounts.spotify.com/authorize?" +
  new URLSearchParams({ client_id: id, response_type: "code", redirect_uri: redirect, scope });

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://127.0.0.1:3000");
  if (url.pathname !== "/callback") return res.end("waiting for Spotify...");
  const code = url.searchParams.get("code");
  if (!code) {
    res.end("No code returned: " + (url.searchParams.get("error") ?? "unknown error"));
    return;
  }
  const r = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(`${id}:${secret}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "authorization_code", code, redirect_uri: redirect }),
  });
  const data = await r.json();
  if (!data.refresh_token) {
    console.error("Token exchange failed:", data);
    res.end("Failed. Check the terminal.");
  } else {
    console.log("\nAdd this line to .env.local:\n");
    console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}\n`);
    res.end("Done. You can close this tab and return to the terminal.");
  }
  server.close();
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Open this URL in your browser and approve access:\n\n" + authUrl + "\n");
});
