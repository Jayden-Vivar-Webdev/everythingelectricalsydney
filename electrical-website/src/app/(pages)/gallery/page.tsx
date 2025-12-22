import FlexGallery from "@/app/components/gallery/bento-style";
import fs from "fs";
import path from "path";

export default function GalleryPage() {
  const gallery = path.join(process.cwd(), "public/images/gallery");

  const images = fs.readdirSync(gallery).map((file) => ({
    src: `images/gallery/${file}`,
    alt: file,
  }));
  return <FlexGallery images={images} />;
}
