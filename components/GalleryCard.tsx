import { GalleryImage } from "@/lib/useGalleryData";

export default function GalleryCard({ filename, altText }: GalleryImage) {
  console.log(filename);
  return (
    <div className="gallery-card">
      <img src={filename} alt={altText} />
    </div>
  );
}
