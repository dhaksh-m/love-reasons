"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio
        .play()
        .catch((err) => console.log("Playback blocked:", err));
    } else {
      audio.pause();
    }
  }, [playing]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/love-song.mp3"
        loop
      />

      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setPlaying(!playing)}
        className="fixed bottom-6 left-6 z-[999] rounded-full bg-white/30 px-6 py-3 text-sm text-rose-500 shadow-xl backdrop-blur-md transition-all hover:bg-white/40"
      >
        {playing ? "pause music ♡" : "play music ♡"}
      </motion.button>
    </>
  );
}