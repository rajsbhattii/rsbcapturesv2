"use client"

import { StrictMode, useEffect } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Starter from "./pages/Starter.jsx"
import Home from "./pages/home/home.jsx"
import { PageTransition } from "./pages/PageTransition.jsx"
import Automotive from "./pages/Automotive.jsx"

function AnimatedRoutes() {
  const location = useLocation()

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      // Ensure exit completes before enter begins
      onExitComplete={() => {
        // This callback runs after exit animation completes
      }}
    >
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
        <Route
          path="/real-estate"
          element={
            <PageTransition>
              <div>Real Estate Page</div>
            </PageTransition>
          }
        />
        <Route
          path="/shop"
          element={
            <PageTransition>
              <div>Shop Page</div>
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <div>Contact Page</div>
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
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

