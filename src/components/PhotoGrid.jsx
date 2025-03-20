import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function PhotoGrid({ images }) {
  const renderImage = (src, aspectClass, index) => (
    <div className={`photo-item ${aspectClass}`} key={index}>
      <LazyLoadImage
        src={src}
        alt={`Photo ${index + 1}`}
        effect="blur"
        placeholderSrc="/placeholder.svg" // Low-res placeholder (matching aspect ratio)
        className="w-full h-full object-cover"
        wrapperClassName={`lazy-wrapper ${aspectClass}`} 
        threshold={0} // Loads image slightly before it's visible
      />
    </div>
  );

  const rows = [];
  for (let i = 0; i < images.length; i += 5) {
    const rowImages = images.slice(i, i + 5);
    const row = (
      <div
        className={`photo-row ${i / 5 % 2 === 0 ? "even-row" : "odd-row"}`}
        key={i}
      >
        {rowImages.map((image, index) =>
          index < 4
            ? renderImage(image, "aspect-9-16", i + index)
            : renderImage(image, "aspect-16-9", i + index)
        )}
      </div>
    );
    rows.push(row);
  }

  return <div className="photo-grid">{rows}</div>;
}

export default PhotoGrid;
