"use client";

import { useEffect, useState } from "react";

type Track = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  url?: string;
};

export function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    let alive = true;
    const load = () =>
      fetch("/api/now-playing", { cache: "no-store" })
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => alive && d && setTrack(d))
        .catch(() => {});
    load();
    const id = setInterval(load, 20_000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  // No data (Spotify not configured or nothing to show) → render nothing.
  if (!track?.title) return null;

  return (
    <p className="flex items-center gap-2 text-sm text-muted">
      {track.isPlaying ? (
        <span className="pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
      ) : (
        <span aria-hidden>♫</span>
      )}
      <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-accent">
        {track.isPlaying ? "Now playing" : "Last played"}
      </span>
      <a
        href={track.url}
        target="_blank"
        rel="noreferrer"
        className="min-w-0 truncate hover:text-accent"
      >
        <span className="font-medium text-foreground">{track.title}</span>
        <span> · {track.artist}</span>
      </a>    </p>
  );
}
