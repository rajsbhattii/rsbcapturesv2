"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { useNavigate } from "react-router-dom" // Import useNavigate

const images = [
  "/starterpage/S (1).webp?height=600&width=715",
  "/starterpage/S (2).webp?height=600&width=715",
  "/starterpage/S (3).webp?height=600&width=715",
  "/starterpage/S (4).webp?height=600&width=715",
  "/starterpage/S (5).webp?height=600&width=715",
  "/starterpage/S (6).webp?height=600&width=715",
  "/starterpage/S (7).webp?height=600&width=715",
]

export default function Starter() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const navigate = useNavigate() // Initialize useNavigate

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleSeeMoreClick = () => {
    // Navigate to the Home page
    navigate("/home")
  }

  const handleNavigation = () => {
    navigate("/automotive");
  };

  return (
    <div className="mainpage">
      <div className="slideshow">
        {images.map((src, index) => (
          <img
            key={index}
            src={src || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentImageIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="content-wrapper">
        <h1 className="rsb">
          welcome to <br />
          rsbcaptures.
        </h1>
        <div className="btnGroup">
          <button className="startBtns" onClick={handleNavigation}>automotive.</button>
          <button className="startBtns">real estate.</button>
        </div>
      </div>
      <div className="see-more-wrapper" onClick={handleSeeMoreClick}>
        <p className="see-more-text">see more</p>
        <ChevronDown className="see-more-arrow" size={32} />
      </div>
    </div>
  )
}

