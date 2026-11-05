import { NextResponse } from "next/server";

// Needs SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET and SPOTIFY_REFRESH_TOKEN in env.
// Without them the route returns 204 and the widget stays hidden.

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_URL = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENT_URL = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

type SpotifyTrack = {
  name: string;
  artists: { name: string }[];
  external_urls: { spotify: string };
  album: { images: { url: string }[] };
};

async function getAccessToken() {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) return null;

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: SPOTIFY_REFRESH_TOKEN }),
    cache: "no-store",
  });
  if (!res.ok) return null;
  return (await res.json()).access_token as string;
}

function shape(t: SpotifyTrack, isPlaying: boolean) {
  return {
    isPlaying,
    title: t.name,
    artist: t.artists.map((a) => a.name).join(", "),
    url: t.external_urls.spotify,
    cover: t.album.images.at(-1)?.url,
  };
}

export async function GET() {
  const token = await getAccessToken();
  if (!token) return new NextResponse(null, { status: 204 });

  const headers = { Authorization: `Bearer ${token}` };
  const cacheHeaders = { "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60" };

  const now = await fetch(NOW_URL, { headers, cache: "no-store" });
  if (now.status === 200) {
    const data = await now.json();
    if (data?.item && data.currently_playing_type === "track") {
      return NextResponse.json(shape(data.item, data.is_playing), { headers: cacheHeaders });
    }
  }

  const recent = await fetch(RECENT_URL, { headers, cache: "no-store" });
  if (recent.ok) {
    const item = (await recent.json()).items?.[0]?.track;
    if (item) return NextResponse.json(shape(item, false), { headers: cacheHeaders });
  }

  return new NextResponse(null, { status: 204 });
}
