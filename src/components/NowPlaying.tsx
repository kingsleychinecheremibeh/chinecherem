"use client";

import { useEffect, useState } from "react";

type Track = {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  url?: string;
  cover?: string;
};

export function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let alive = true;
    const load = () =>
      fetch("/api/now-playing")
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => alive && d && setTrack(d))
        .catch(() => {});
    load();
    const id = setInterval(load, 30_000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  // No data (Spotify not configured yet) → render nothing.
  if (hidden || !track?.title) return null;

  return (
    <div className="flex max-w-sm items-center gap-3 rounded-lg border border-line bg-card p-3">
      {track.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={track.cover} alt="" width={44} height={44} className="rounded" />
      )}
      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted">
          {track.isPlaying && <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />}
          {track.isPlaying ? "Now playing" : "Last played"}
        </p>
        <a
          href={track.url}
          target="_blank"
          rel="noreferrer"
          className="block truncate text-sm hover:text-accent"
        >
          {track.title}
        </a>
        <p className="truncate text-xs text-muted">{track.artist}</p>
      </div>
      <button
        onClick={() => setHidden(true)}
        aria-label="Dismiss"
        className="self-start text-muted hover:text-foreground"
      >
        ×
      </button>
    </div>
  );
}
