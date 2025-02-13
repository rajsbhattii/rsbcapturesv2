"use client"

import { useState, useEffect } from "react"
import styles from "./Slides.module.css"

const InfiniteSlideshow = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images, interval])

  // Create an array of image indices to display
  const imageIndices = [...images.slice(-2), ...images, ...images.slice(0, 2)]

  const slideWidth = 285 // 11:16 aspect ratio for 600px height (412.5) + 10px for margins

  return (
    <div className={styles.slideshowContainer}>
      <div
        className={styles.slideTrack}
        style={{
          transform: `translateX(-${(currentIndex + 2) * slideWidth}px)`,
          width: `${imageIndices.length * slideWidth}px`,
        }}
      >
        {imageIndices.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image || "/placeholder.svg"} alt={`Slide ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfiniteSlideshow

