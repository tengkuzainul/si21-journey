"use client";

import Gallery from "@/features/gallery-section";
import Hero from "@/features/hero-section";
import Members from "@/features/member-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Members />
      <Gallery />
    </>
  );
}
