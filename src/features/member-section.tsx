"use client";

import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { motion, Variants } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function Members() {
  const graduateMembers = [
    {
      name: "Zelviannisa Putri",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-9.jpg",
      instagramUrl: "https://www.instagram.com/zlvnputri",
    },
    {
      name: "Arif Rahmat Pranata",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-39.jpg",
      instagramUrl: "https://www.instagram.com/a.rahmatp_",
    },
    {
      name: "Wilia Ruhammah",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-2.jpg",
      instagramUrl: "https://www.instagram.com/wliarh",
    },
    {
      name: "Noviana",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-1.jpg",
      instagramUrl: "https://www.instagram.com/_.novianaaaa",
    },
    {
      name: "M. Ari Hermawanto",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-8.jpg",
      instagramUrl: "https://www.instagram.com/hermawn_ari",
    },
    {
      name: "Tiara Patrisia",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-24.jpg",
      instagramUrl: "https://www.instagram.com/tiarapatrisiaa",
    },
    {
      name: "Dimas Julianto",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-38.jpg",
      instagramUrl: "https://www.instagram.com/masdidim_",
    },
    {
      name: "Muhitualdi",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-32.jpg",
      instagramUrl: "https://www.instagram.com/mhtaldi_",
    },
    {
      name: "Aulia Annisa Fajra",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-27.jpg",
      instagramUrl: "https://www.instagram.com/auliannisafjra",
    },
    {
      name: "Fachrul Rozi",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI.jpg",
      instagramUrl: "https://www.instagram.com/rozi.mly",
    },
    {
      name: "Dwi Ayu Kartika W",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-30.jpg",
      instagramUrl: "https://www.instagram.com/dwiayukrtkaa",
    },
    {
      name: "Damayanti Nasution",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-20.jpg",
      instagramUrl: "https://www.instagram.com/damayantii.__",
    },
    {
      name: "Asniwati",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-21.jpg",
      instagramUrl: "https://www.instagram.com/asnwt_",
    },
    {
      name: "Tengku Muhammad Zainul Aprilizar",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-31.jpg",
      instagramUrl: "https://www.instagram.com/tengkumz__",
    },
    {
      name: "Ehnrico Budi Hidayat",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-42.jpg",
      instagramUrl: "https://www.instagram.com/riko.12yu",
    },
    {
      name: "Alifia Mei Syahrani Br. Siagian",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-17.jpg",
      instagramUrl: "https://www.instagram.com/fisyagian",
    },
    {
      name: "Shanda Dwijri Syafly",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-5.jpg",
      instagramUrl: "https://www.instagram.com/shanda_ds",
    },
    {
      name: "Riri Angraini",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-18.jpg",
      instagramUrl: "https://www.instagram.com/ririangrainii_",
    },
    {
      name: "Siti Hartati",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-15.jpg",
      instagramUrl: "https://www.instagram.com/sitihartatii",
    },
    {
      name: "Anggela Diska",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-35.jpg",
      instagramUrl: "https://www.instagram.com/anggldska_",
    },
    {
      name: "Putri Handayani",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-25.jpg",
      instagramUrl: "https://www.instagram.com/ririangrainii_",
    },
    {
      name: "Muhammad Iqbal Syahputra",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-12.jpg",
      instagramUrl: "https://www.instagram.com/mh.iqbalsya",
    },
    {
      name: "Dinda Miftahul Jannah",
      bechalor: "Bachelor of Computer Science 🎓",
      src: "/img/members/SI_UMRI-7.jpg",
      instagramUrl: "https://www.instagram.com/dinda_miftahuljannah",
    },
  ].map((member, idx) => ({
    ...member,
    id: idx + 1,
  }));

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

  const subtitleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3,
      },
    },
  };

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

  return (
    <ParallaxProvider>
      <section className="min-h-screen bg-black relative overflow-hidden pb-2 pt-14 px-2 sm:px-4 lg:px-6">
        {/* Subtle Background Elements */}
        <Parallax
          translateY={[-30, 30]}
          className="absolute inset-0 pointer-events-none z-[9999999]"
        >
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-white rounded-full animate-pulse" />
          <div className="absolute left-18 bottom-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute right-18 top-1/4 w-3 h-3 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-16 right-1/12 w-1 h-1 bg-white rounded-full animate-pulse" />
        </Parallax>
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
                Information System 21
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
            Who Are We?
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/85 leading-relaxed font-light tracking-wide"
            variants={subtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            We are the graduating class of Information System 21 at Muhammadiyah
            University of Riau.
          </motion.p>
        </motion.div>

        {/* AnimatedTestimonials */}
        <Parallax translateY={[-10, 10]} className="relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <AnimatedTestimonials
              testimonials={graduateMembers}
              autoplay={false}
            />
          </motion.div>
        </Parallax>
      </section>
    </ParallaxProvider>
  );
}
