"use client";
import { useState } from "react";
type Image = {
  src: string;
  alt: string;
};

type Collection = {
  images: Image[];
};

export default function FlexGallery({ images }: Collection) {
  const [visibleCount, setVisibleCount] = useState(6); // initially show 6 images

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6); // load 6 more each click
  };

  return (
    <>
      <div className="pb-20">
        <div className="flex w-full items-center justify-center px-6 py-10 lg:px-8">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Everything Electrical Sydney{" "}
            <span className="secondary-text">Gallery</span>
          </h2>
        </div>
        <div className="mx-auto max-w-7xl columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4 px-6 lg: px-8">
          {images.slice(0, visibleCount).map((image, index) => (
            <div className="" key={index}>
              <img
                className="w-full h-auto rounded-lg"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
        {visibleCount < images.length && (
          <div className="flex w-full items-center justify-center p-15">
            <button
              onClick={handleLoadMore}
              className="group inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 sm:px-6 sm:py-3 text-md font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Load More
            </button>
          </div>
        )}
        {visibleCount > images.length && (
          <div className="flex w-full items-center justify-center p-15">
            <button
              onClick={() => setVisibleCount(6)}
              className="group inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 sm:px-6 sm:py-3 text-md font-semibold text-white shadow-lg transition-all duration-200 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Collapse Images
            </button>
          </div>
        )}
      </div>
    </>
  );
}
