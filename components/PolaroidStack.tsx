"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import reasons from "./reasons";
import LoveLetter from "./LoveLetter";


export default function PolaroidStack({
  audioRef,
}: {
  audioRef: React.RefObject<HTMLAudioElement | null>;
})  {
  const [selected, setSelected] = useState<number | null>(null);
  const [showLetter, setShowLetter] = useState(false);

  const positions = useMemo(() => {
    return reasons.map(() => ({
      top: `${Math.random() * 75}%`,
      left: `${Math.random() * 80}%`,
      rotate: Math.random() * 30 - 15,
    }));
  }, []);

  if (showLetter) {
    return <LoveLetter />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fce7f3] via-[#f3e8ff] to-[#fae8ff]">

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      {/* Glow Effects */}
      <div className="absolute top-[-150px] left-[-100px] h-[350px] w-[350px] rounded-full bg-pink-300/40 blur-3xl" />
      <div className="absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-purple-300/40 blur-3xl" />

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "100vh",
              opacity: 0,
            }}
            animate={{
              y: "-10vh",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute text-pink-300"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 18}px`,
            }}
          >
            ♡
          </motion.div>
        ))}
      </div>

      {/* Heading */}
      <div className="absolute top-6 left-1/2 z-50 -translate-x-1/2 text-center">

        <h1
          className="text-5xl text-rose-500 md:text-7xl"
          style={{
            fontFamily: "var(--font-caveat)",
          }}
        >
          100 Reasons
          <br />
          Why I Love You ♡
        </h1>

        <p className="mt-3 text-sm tracking-[0.3em] text-rose-300">
          pick a polaroid
        </p>
      </div>

      {/* Scattered Polaroids */}
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: index * 0.02,
          }}
          whileHover={{
            scale: 1.05,
            rotate: 0,
            zIndex: 100,
          }}
          onClick={() => setSelected(index)}
          className="absolute cursor-pointer"
          style={{
            top: positions[index].top,
            left: positions[index].left,
            rotate: `${positions[index].rotate}deg`,
          }}
        >
          <div className="relative w-[180px] rounded-[18px] bg-[#fffafc] p-3 shadow-2xl">

            {/* Tape */}
            <div className="absolute left-8 top-[-8px] h-6 w-16 rotate-[-8deg] rounded-md bg-pink-200/70" />
            <div className="absolute right-8 top-[-8px] h-6 w-16 rotate-[8deg] rounded-md bg-purple-200/70" />

            {/* Card Content */}
            <div className="pt-10 pb-6 text-center">

              <p className="text-xs uppercase tracking-[0.3em] text-rose-300">
                reason #{index + 1}
              </p>

              <h2
                className="mt-4 text-2xl leading-snug text-gray-700"
                style={{
                  fontFamily: "var(--font-caveat)",
                }}
              >
                {reason.length > 40
                  ? reason.slice(0, 40) + "..."
                  : reason}
              </h2>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Popup Card */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{
                scale: 0.6,
                rotate: -10,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              exit={{
                scale: 0.6,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[340px] rounded-[28px] bg-[#fffafc] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
            >

              {/* Tape */}
              <div className="absolute left-10 top-[-10px] h-8 w-24 rotate-[-8deg] rounded-md bg-pink-200/70" />
              <div className="absolute right-10 top-[-10px] h-8 w-24 rotate-[8deg] rounded-md bg-purple-200/70" />

              {/* Content */}
              <div className="pt-8 text-center">

                <p className="text-sm uppercase tracking-[0.3em] text-rose-300">
                  reason #{selected + 1}
                </p>

                <h2
                  className="mt-6 text-4xl leading-tight text-gray-700"
                  style={{
                    fontFamily: "var(--font-caveat)",
                  }}
                >
                  {reasons[selected]}
                </h2>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-10 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 px-6 py-3 text-white shadow-lg transition hover:scale-105"
                >
                  close ♡
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Button */}
      <div className="absolute bottom-8 left-1/2 z-50 -translate-x-1/2">

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setShowLetter(true)}
          className="rounded-full bg-white/30 px-8 py-4 text-lg text-rose-500 shadow-xl backdrop-blur-md transition-all hover:bg-white/40"
        >
          wanna know something? ♡
        </motion.button>
      </div>
    </main>
  );
}