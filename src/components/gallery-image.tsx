"use client";

import { memo } from "react";
import { DirectionAwareHover } from "./direction-aware-hover";

interface GalleryImage {
  imageUrl: string;
  caption: string;
}

const GalleryItem = memo(function GalleryItem({
  imageUrl,
  caption,
}: GalleryImage) {
  return (
    <DirectionAwareHover imageUrl={imageUrl}>
      <p className="font-bold text-xl">{caption}</p>
    </DirectionAwareHover>
  );
});

export function GalleryImages() {
  const imageUrls: GalleryImage[] = [
    {
      imageUrl: "/img/galleries/Gallery-1.jpg",
      caption: "Group Photo SI 21",
    },
    {
      imageUrl: "/img/galleries/Gallery-2.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-3.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-4.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-5.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-6.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-7.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-8.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-9.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-10.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-11.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-12.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-13.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-14.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-15.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-16.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-17.jpg",
      caption: "In the mountains",
    },
    {
      imageUrl: "/img/galleries/Gallery-18.jpg",
      caption: "In the mountains",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 space-y-3 justify-center items-center min-h-screen">
      {imageUrls.map((img, index) => (
        <GalleryItem key={index} {...img} />
      ))}
    </div>
  );
}
