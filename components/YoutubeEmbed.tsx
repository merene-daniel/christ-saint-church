"use client";

import { useState } from "react";
import Image from "next/image";

export default function YoutubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="w-full aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      className="relative w-full aspect-video bg-black group/yt block"
      aria-label={`Play: ${title}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        fill
        className="object-cover opacity-80 group-hover/yt:opacity-60 transition-opacity"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Play button */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover/yt:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
