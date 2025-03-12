"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar">
        <a className="navbar-item">Automotive</a>
        <a className="navbar-item">Real Estate</a>
        <a className="navbar-item logo-container">
          <img src="src/assets/rsb.png" alt="Logo" />
        </a>
        <a className="navbar-item">Shop</a>
        <a className="navbar-item">Contact</a>
      </div>
    </div>
  )
}

