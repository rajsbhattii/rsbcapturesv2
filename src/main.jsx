import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./index.css";
import Header from "./Header.jsx";
import InfiniteSlideshow from "./Slides.jsx";
import Footer from "./Footer.jsx";
import Starter from "./Starter.jsx";

const images = [
  "/images/U (1).webp", "/images/U (2).webp", "/images/U (3).webp",
  "/images/U (4).webp", "/images/U (5).webp", "/images/U (6).webp",
  "/images/U (7).webp", "/images/U (8).webp", "/images/U (9).webp",
  "/images/U (10).webp", "/images/U (11).webp", "/images/U (12).webp",
  "/images/U (13).webp"
];

// Animation for fade-in and moving upwards
const fadeInUp = {
  hidden: { opacity: 0, y: 20, willChange: "transform, opacity" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

createRoot(document.getElementById("top")).render(<Starter />);

createRoot(document.getElementById("root")).render(
  <div id="additional-content" className="additional-content">
    <StrictMode>
      <Header />

      {/* Photos Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.95}} // Triggers when 95% of the section is visible
        variants={fadeInUp}
        id="cont"
        className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h1 id="slideHead" className="text-4xl font-bold text-gray-900 mb-8 text-left">
            rsb 2024 - photos
          </h1>
          <div className="shadow-2xl">
            <InfiniteSlideshow images={images} interval={5000} />
          </div>
        </div>
      </motion.div>

      {/* Static Horizontal Line */}
      <hr />

      {/* Video Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4}}
        variants={fadeInUp}
        id="cont"
        className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h1 id="slideHead">rsb video.</h1>
          <div className="vidAlign">
            <video controls width="1100px">
              <source src="/RS3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </motion.div>

      <Footer />
    </StrictMode>
  </div>
);
