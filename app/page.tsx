"use client";
import { useGalleryData, GalleryImage } from "@/lib/useGalleryData";
import { useEffect, useState } from "react";
import GalleryCard from "@/components/GalleryCard";

export default function Home() {
  //Stores image data
  const [imageData, setImageData] = useState<GalleryImage[]>([]);

  async function getGalleryData() {
    try {
      //Fetches gallery data and sets in useState with matching types.
      const res = await useGalleryData();
      setImageData(res.data);
    } catch (e) {
      //throws error/error handler
      console.error("error", e);
    }
  }

  useEffect(() => {
    //useEffect hook to fire getGalleryData function on render
    getGalleryData();
  }, []);

  console.log(imageData);

  return (
    <main>
      {/* Dynamically renders gallery card component based on the size of the imageData array - maps each object and passes data as props */}
      {imageData
        ? imageData.map((img, index) => {
            console.log("page.tsx", img.filename);
            return (
              <GalleryCard
                key={index}
                filename={img.filename}
                altText={img.altText}
              />
            );
          })
        : null}
    </main>
  );
}
