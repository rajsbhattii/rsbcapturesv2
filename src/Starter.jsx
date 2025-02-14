"use client"

import React, { useState, useEffect } from "react"
import { ChevronDown } from 'lucide-react'


const images = [
  "/starterpage/S (1).jpg?height=600&width=715",
  "/starterpage/S (2).jpg?height=600&width=715",
  "/starterpage/S (3).jpg?height=600&width=715",
  "/starterpage/S (4).jpg?height=600&width=715",
  "/starterpage/S (5).jpg?height=600&width=715",
  "/starterpage/S (6).jpg?height=600&width=715",
  "/starterpage/S (7).jpg?height=600&width=715",
]

export default function Starter() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleSeeMoreClick = () => {
    // Scroll to the additional content
    document.getElementById('additional-content').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="mainpage">
        <div className="content-wrapper">
          <div className="left-half">
            <h1 className="rsb">
              welcome to <br />
              rsbcaptures.
            </h1>
            <div className="btnGroup">
              <button className="startBtns">automotive.</button>
              <button className="startBtns">real estate.</button>
            </div>
          </div>
          
          <div className="right-half">
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
          </div>
        </div>
        <div className="see-more-wrapper" onClick={handleSeeMoreClick}>
          <p className="see-more-text">see more</p>
          <ChevronDown className="see-more-arrow" size={32} />
        </div>
      </div>
    </>
  )
}
