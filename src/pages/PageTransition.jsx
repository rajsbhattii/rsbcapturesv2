"use client"

import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"

// Simple fade variants without any position changes
const fadeVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

export const PageTransition = ({ children }) => {
  const location = useLocation()

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={fadeVariants}
      transition={{
        duration: 0.4,
        ease: "linear",
      }}
      className="fixed inset-0 w-full h-full overflow-auto"
      style={{
        zIndex: 1,
        WebkitOverflowScrolling: "touch",
      }}
    >
      {children}
    </motion.div>
  )
}

