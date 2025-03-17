"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

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
        <Link to="/automotive" className={`navbar-item ${location.pathname === "/automotive" ? "active" : ""}`}>
          Automotive
        </Link>
        <Link to="/real-estate" className={`navbar-item ${location.pathname === "/real-estate" ? "active" : ""}`}>
          Real Estate
        </Link>
        <Link to="/home" className="navbar-item logo-container">
          <img src="src/assets/rsb.png" alt="Logo" />
        </Link>
        <Link to="/shop" className={`navbar-item ${location.pathname === "/shop" ? "active" : ""}`}>
          Shop
        </Link>
        <Link to="/contact" className={`navbar-item ${location.pathname === "/contact" ? "active" : ""}`}>
          Contact
        </Link>
      </div>
    </div>
  )
}

