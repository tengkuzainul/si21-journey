import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { motion, Variants } from "framer-motion";
import { GalleryImages } from "@/components/gallery-image";

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

export default function Gallery() {
  return (
    <ParallaxProvider>
      <section className="min-h-screen bg-black relative overflow-hidden pb-2 pt-14 px-2 sm:px-4 lg:px-6">
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
                Time to celebrate! 🤣
              </motion.span>
            </motion.div>
          </Parallax>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[0.9] tracking-tight text-white drop-shadow-2xl"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            Our Gallery
          </motion.h2>
        </motion.div>
        <GalleryImages />
      </section>
    </ParallaxProvider>
  );
}
