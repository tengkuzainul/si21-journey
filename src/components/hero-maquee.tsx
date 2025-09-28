"use client";

import { motion } from "framer-motion";

const students = [
  "ZELVIANNISA PUTRI",
  "ARIEF RAHMAT PRANATA",
  "WILIA RUHAMMAH",
  "NOVIANA",
  "M. ARI HERMAWANTO",
  "TIARA PATRISIA",
  "DIMAS JULIANTO",
  "MUHITUALDI",
  "AULIA ANNISA FAJRA",
  "FACHRUL ROZI",
  "DWI AYU KARTIKA W",
  "DAMAYANTI NASUTION",
  "ASNIWATI",
  "TENGKU MUHAMMAD ZAINUL APRILIZAR",
  "EHNRICO BUDI HIDAYAT",
  "ALIFIA MEI SYAHRANI BORU SIAGIAN",
  "SHANDA DWIJRI SYAFLY",
  "RIRI ANGRAINI",
  "SITI HARTATI",
  "ANGGELA DISKA",
  "PUTRI HANDAYANI",
  "MUHAMMAD IQBAL SYAHPUTRA",
  "DINDA MIFTAHUL JANNAH",
];

const createMarqueeContent = (names: string[]) => {
  const content = names.join(" • ");
  return `${content} • ${content} • ${content}`;
};

export default function HeroMarquee() {
  const chunkSize = 8;
  const lines = [
    students.slice(0, chunkSize),
    students.slice(chunkSize, chunkSize * 2),
    students.slice(chunkSize * 2),
  ];

  return (
    <div className="absolute top-2 left-0 w-full overflow-hidden z-20">
      <div className="relative">
        {lines.map((line, idx) => (
          <motion.div
            key={idx}
            className={`flex whitespace-nowrap ${
              idx % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"
            }`}
            style={{
              animationDuration: `${30 + idx * 8}s`,
              animationTimingFunction: "linear",
            }}
            initial={{ opacity: 0, y: -15 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: idx * 0.3,
              },
            }}
            viewport={{
              once: false,
              amount: 0.1,
            }}
            exit={{ opacity: 0, y: -15 }}
          >
            <div className="flex items-center text-sm font-medium text-white/90 tracking-wide">
              {createMarqueeContent(line)
                .split(" • ")
                .map((name, i) => (
                  <span key={i} className="whitespace-nowrap flex items-center">
                    <span className="hover:text-blue-300 transition-colors duration-500 cursor-default text-shadow-lg">
                      {name}
                    </span>
                    {i < createMarqueeContent(line).split(" • ").length - 1 && (
                      <span className="mx-6 text-blue-400/50 text-xs font-bold">
                        •
                      </span>
                    )}
                  </span>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
