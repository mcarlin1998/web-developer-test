"use client";
import { useGalleryData, GalleryImage } from "@/lib/useGalleryData";
import { useEffect, useState } from "react";

export default function Home() {
  const [imageData, setImageData] = useState<GalleryImage[]>([]);

  async function getGalleryData() {
    try {
      const res = await useGalleryData();
      // if (res) {
      setImageData(res.data);
      // }
    } catch (e) {
      console.error("error", e);
    }
  }

  useEffect(() => {
    getGalleryData();
  }, []);
  console.log(imageData);
  return (
    <main>
      Add content and style according to
      https://www.figma.com/design/cqwIYXNHitVg2nAlMBfObA/Web-Developer-Test?node-id=0-1&t=nQJuZMDmryzLddLl-1
    </main>
  );
}
