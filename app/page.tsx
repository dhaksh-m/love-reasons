"use client";

import { useRef, useState } from "react";
import PolaroidStack from "@/components/PolaroidStack";

export default function Home() {
  const [started, setStarted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStart = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;

        await audioRef.current.play();

        console.log("music started");
      }

      setStarted(true);
    } catch (err) {
      console.error("audio failed:", err);
    }
  };

  if (started) {
    return <PolaroidStack audioRef={audioRef} />;
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 px-6">

      {/* Audio */}
      <audio
        ref={audioRef}
        src="/music/love-song.mp3"
        loop
        preload="auto"
      />

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-pink-300 opacity-30 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-purple-300 opacity-30 blur-3xl" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-2xl rounded-[40px] border border-white/40 bg-white/30 p-10 text-center shadow-2xl backdrop-blur-xl">

        <h1 className="mb-6 text-5xl font-bold leading-tight text-rose-600 md:text-7xl">
          Hey Love...
          <br />
          do you wanna know
          <br />
          why I love you?
        </h1>

        <p className="mb-10 text-lg text-rose-500">
          I tried putting it into words...
        </p>

        <button
          onClick={handleStart}
          className="rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-10 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105"
        >
          find out ♡
        </button>
      </div>
    </main>
  );
}