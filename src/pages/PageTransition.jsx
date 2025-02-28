"use client"

import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"

const pageVariants = {
  initial: {
    opacity: 0,
    y: "100%",
    scale: 1,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: "-100%",
    scale: 1.0,
  },
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.5,
}

export const PageTransition = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

