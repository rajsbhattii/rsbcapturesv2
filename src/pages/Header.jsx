"use client"

import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

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

  // Custom navigation handler to track previous route
  const handleNavigation = (to) => (e) => {
    e.preventDefault()
    navigate(to, { state: { from: location.pathname } })
  }

  return (
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar">
        <a
          href="/automotive"
          onClick={handleNavigation("/automotive")}
          className={`navbar-item ${location.pathname === "/automotive" ? "active" : ""}`}
        >
          Automotive
        </a>
        <a
          href="/real-estate"
          onClick={handleNavigation("/real-estate")}
          className={`navbar-item ${location.pathname === "/real-estate" ? "active" : ""}`}
        >
          Real Estate
        </a>
        <a href="/home" onClick={handleNavigation("/home")} className="navbar-item logo-container">
          <img src="src/assets/rsb.png" alt="Logo" />
        </a>
        <a
          href="/shop"
          onClick={handleNavigation("/shop")}
          className={`navbar-item ${location.pathname === "/shop" ? "active" : ""}`}
        >
          Shop
        </a>
        <a
          href="/contact"
          onClick={handleNavigation("/contact")}
          className={`navbar-item ${location.pathname === "/contact" ? "active" : ""}`}
        >
          Contact
        </a>
      </div>
    </div>
  )
}

