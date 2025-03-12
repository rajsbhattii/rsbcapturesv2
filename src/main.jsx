"use client"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Starter from "./pages/Starter.jsx"
import Home from "./pages/home/home.jsx"
import { PageTransition } from "./pages/PageTransition.jsx"
import Automotive from "./pages/Automotive.jsx"

function AnimatedRoutes() {
  const location = useLocation()

  return (
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
              <Automotive/>
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

