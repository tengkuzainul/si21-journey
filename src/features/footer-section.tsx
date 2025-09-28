import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, backgroundColor: "#000" },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: { opacity: 0, y: -20 },
};

// Removed unused subtitleVariants to fix ESLint warning

const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.1,
    },
  },
};

export default function Footer() {
  return (
    <ParallaxProvider>
      <section className="min-h-[30vh] bg-black relative overflow-hidden pb-2 pt-14 px-2 sm:px-4 lg:px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 relative z-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* ... */}
          <Parallax translateY={[-15, 15]}>
            <motion.div
              className="inline-flex items-center bg-white/5 border border-white/15 backdrop-blur-md px-6 py-3 rounded-full mb-8"
              variants={badgeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="text-white/90 font-medium text-sm tracking-wide"
              >
                Bye Bye, See You Later! 👋🏻
              </motion.span>
            </motion.div>
          </Parallax>
          <motion.blockquote
            className="mx-auto max-w-3xl text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold italic mb-8 leading-tight drop-shadow-2xl"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            &quot;MABA Angkatan 21 Pamit Undur Diri&quot;
            <footer className="mt-4 text-base text-white/70 font-normal not-italic">
              &mdash; Information System, Muhammadiyah University of Riau, 2021
            </footer>
          </motion.blockquote>
          ;{/* Copyright / Powered By */}
          <motion.div
            className="mx-auto max-w-fit text-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <a
              href="https://github.com/tengkuzainul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors duration-300 font-medium"
            >
              Powered by
              <motion.span
                whileHover={{ scale: 1.08, color: "#38bdf8" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="ml-1 underline decoration-dotted"
              >
                Tengku Muhammad Zainul Aprilizar
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </ParallaxProvider>
  );
}
