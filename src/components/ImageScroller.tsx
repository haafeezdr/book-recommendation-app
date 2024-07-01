'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImageScrollerProps {
  images: string[];
}

const ImageScroller: React.FC<ImageScrollerProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const getVisibleImages = () => {
    const firstImage = images[currentIndex];
    const secondImage = images[(currentIndex + 1) % images.length];
    return [firstImage, secondImage];
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="flex space-x-4">
      {visibleImages.map((image, index) => (
        <div key={index} className="w-1/2">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={`image-${currentIndex + index}`}
              // layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
              width={400}
              height={300}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageScroller;