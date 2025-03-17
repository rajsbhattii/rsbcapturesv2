"use client"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Starter from "./pages/Starter.jsx"
import Home from "./pages/home/home.jsx"
import { PageTransition } from "./pages/PageTransition.jsx"
import Automotive from "./pages/Automotive.jsx"
import Header from "./pages/Header.jsx"
// Import your Header component

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Starter />
              </PageTransition>
            }
          />
          <Route
            path="/home"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/automotive"
            element={
              <PageTransition>
                <Automotive />
              </PageTransition>
            }
          />
          {/* Add additional routes for Real Estate, Shop, Contact */}
          <Route
            path="/real-estate"
            element={
              <PageTransition>
                {/* Replace with your RealEstate component when available */}
                <div>Real Estate Page</div>
              </PageTransition>
            }
          />
          <Route
            path="/shop"
            element={
              <PageTransition>
                {/* Replace with your Shop component when available */}
                <div>Shop Page</div>
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                {/* Replace with your Contact component when available */}
                <div>Contact Page</div>
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  )
}

function Main() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

const root = createRoot(document.getElementById("root"))

root.render(
  <StrictMode>
    <Main />
  </StrictMode>,
)

