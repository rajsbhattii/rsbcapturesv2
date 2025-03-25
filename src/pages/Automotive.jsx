"use client";
import Header from "../components/Header";
import PhotoGrid from "../components/PhotoGrid";
import Footer from "../components/Footer"
import { motion } from "framer-motion"

export default function Automotive() {
  return (
    <div className="min-h-screen">
      <title>Automotive | rsbcaptures</title>
      <Header />
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h1 id="slideHead" className="text-4xl font-bold text-gray-900 mb-8 text-left">
          A1 F30
        </h1>
        <PhotoGrid images={A1F30} />
      </div>
      <hr></hr>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
        }}
        id="cont"
        className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <h1 id="slideHead" className="text-4xl font-bold text-gray-900 mb-8 text-left">
            StlthQ
          </h1>
          <PhotoGrid images={StlthQ} />
        </div>
      </motion.div>
      <Footer />
    </div>
    
  );
}

const A1F30 = [
  "/automotive/A1F30/a1f30 (1).webp",
  "/automotive/A1F30/a1f30 (2).webp",
  "/automotive/A1F30/a1f30 (3).webp",
  "/automotive/A1F30/a1f30 (5).webp",
  "/automotive/A1F30/a1f30 (6).webp",
  "/automotive/A1F30/a1f30 (7).webp",
  "/automotive/A1F30/a1f30 (8).webp",
  "/automotive/A1F30/a1f30 (9).webp",
];

const StlthQ = [
  "/automotive/StlthQ/stlthq (1).webp",
  "/automotive/StlthQ/stlthq (2).webp",
  "/automotive/StlthQ/stlthq (3).webp",
  "/automotive/StlthQ/stlthq (4).webp",
  "/automotive/StlthQ/stlthq (5).webp"
]