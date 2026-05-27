"use client";

import { motion } from "framer-motion";

export default function LoveLetter() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-20 text-white">

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(120)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
            }}
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-3xl" />

      {/* Letter */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="relative z-10 max-w-4xl rounded-[40px] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl"
      >

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-10 text-center text-6xl font-light text-pink-300"
          style={{
            fontFamily: "var(--font-caveat)",
          }}
        >
          To My Love ♡
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 3,
          }}
          className="space-y-6 text-lg leading-9 text-white/90"
        >
          <p>
            If you've only lived in hell, I'd become heaven for you.
            Even if I had to build a staircase to get there,
            I would do anything for you.
          </p>

          <p>
            If you've only ever known silence,
            I'd be the crescendo that kisses you awake.
          </p>

          <p>
            I would be the endless supply of love
            that reminds you it doesn't always just take.
          </p>

          <p>
            If you've only met sorrow,
            I'd introduce you to great joy.
          </p>

          <p>
            If you've only known confusion,
            I'd give only honesty for you to enjoy.
          </p>

          <p>
            Because shadows hide her,
            but they don't take hurt away.
            It isn't always sunny,
            but I will convince your light to stay.
          </p>

          <p>
            If you only ever lived half hearted,
            I would revive the other half
            with the same neuronal impulses
            that changed my brain chemistry with your laugh.
          </p>

          <p>
            If you only know loss,
            I'd show you what there is to gain.
            Because falling in love isn't always
            one sided or in vain.
          </p>

          <p>
            If you indulge in fearful thinking,
            how about a taste of hope?
          </p>

          <p>
            Because happy endings for hopeless romantics
            will always be my favorite trope.
          </p>

          <p>
            So my darling Angel,
            my favorite star in the sky...
          </p>

          <p>
            When you meet heaven,
            you'll think it's hell,
            and you'll sit in your car and cry.
          </p>

          <p>
            But anything worth doing
            is worth being afraid to do.
          </p>

          <p className="text-center text-2xl text-pink-300">
            I asked God what his favorite creation was.
            <br />
            He gave me a picture of you ♡
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}